import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assessTurnstile } from "@/lib/security/turnstile";
import {
  emptyCloudLearnState,
  type CloudLearnState,
} from "@/lib/learn/cloud-state";
import {
  ensureProfileRow,
  parseCloudLearnState,
  readCloudLearnState,
  writeCloudLearnState,
  LEARN_STATE_MAX_BYTES,
} from "@/lib/learn/server-state";

const LEARN_USER_HEADER = "x-learn-user-id";

export async function GET(request: NextRequest) {
  const gate = await assessTurnstile(request);
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error, code: gate.code }, { status: gate.status });
  }

  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureProfileRow(user);
    const state = await readCloudLearnState(user.id);
    return NextResponse.json(state, {
      headers: { [LEARN_USER_HEADER]: user.id },
    });
  } catch (err) {
    console.error("[learn-state] GET failed", err);
    return NextResponse.json(
      { error: "Failed to load learn state" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const gate = await assessTurnstile(request);
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error, code: gate.code }, { status: gate.status });
  }

  const supabase = createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Reject oversized bodies before parsing.
  const declaredLength = Number(request.headers.get("content-length") ?? "");
  if (Number.isFinite(declaredLength) && declaredLength > LEARN_STATE_MAX_BYTES) {
    return NextResponse.json(
      { error: "Learn state payload too large" },
      { status: 400 }
    );
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (text.length > LEARN_STATE_MAX_BYTES) {
      return NextResponse.json(
        { error: "Learn state payload too large" },
        { status: 400 }
      );
    }
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseCloudLearnState(raw);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.reason }, { status: 400 });
  }

  const state: CloudLearnState = {
    ...emptyCloudLearnState(),
    ...parsed.state,
  };

  try {
    await writeCloudLearnState(user.id, state);
  } catch (err) {
    // Storage or table failures must never look like a successful save.
    console.error("[learn-state] PUT failed", err);
    return NextResponse.json(
      { error: "Failed to persist learn state" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
