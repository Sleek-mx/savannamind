import { NextRequest, NextResponse } from "next/server";
import {
  TURNSTILE_COOKIE,
  assessTurnstile,
  turnstileCookieOptions,
  verifyTurnstileToken,
} from "@/lib/security/turnstile";

export async function GET(request: NextRequest) {
  const decision = await assessTurnstile(request);
  if (decision.ok) {
    return NextResponse.json({ verified: true });
  }
  if (decision.code === "turnstile_misconfigured") {
    return NextResponse.json(
      { verified: false, error: decision.error, code: decision.code },
      { status: decision.status }
    );
  }
  return NextResponse.json({ verified: false, code: decision.code });
}

export async function POST(request: NextRequest) {
  let token = "";
  try {
    const body = (await request.json()) as { token?: unknown };
    token = typeof body?.token === "string" ? body.token : "";
  } catch {
    return NextResponse.json(
      { success: false, error: "Missing verification token" },
      { status: 400 }
    );
  }

  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const result = await verifyTurnstileToken(token, remoteIp);
  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error, code: result.code },
      { status: result.status }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(TURNSTILE_COOKIE, result.cookie, turnstileCookieOptions());
  return response;
}
