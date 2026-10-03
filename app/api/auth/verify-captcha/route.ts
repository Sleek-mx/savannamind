import { NextRequest, NextResponse } from "next/server";

const CLOUDFLARE_TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { token?: string };
    const token = body?.token;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing verification token" },
        { status: 400 }
      );
    }

    const secretKey =
      process.env.TURNSTILE_SECRET_KEY ||
      "1x0000000000000000000000000000000AA"; // Cloudflare always-pass test key

    // If using Cloudflare dummy test keys or dummy dev token, auto-pass immediately
    if (
      secretKey.startsWith("1x0000000000000000000000000000000AA") &&
      (token === "dev-mock-pass" || token.startsWith("XXXX."))
    ) {
      const response = NextResponse.json({ success: true, mode: "test-pass" });
      response.cookies.set("sm_turnstile_verified", "true", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      });
      return response;
    }

    const formData = new FormData();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (clientIp) {
      formData.append("remoteip", clientIp);
    }

    const verifyRes = await fetch(CLOUDFLARE_TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: formData,
    });

    const verifyData = (await verifyRes.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (verifyData.success) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("sm_turnstile_verified", "true", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      });
      return response;
    }

    return NextResponse.json(
      {
        success: false,
        error: "Verification failed. Please retry.",
        codes: verifyData["error-codes"],
      },
      { status: 403 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Verification server error",
      },
      { status: 500 }
    );
  }
}
