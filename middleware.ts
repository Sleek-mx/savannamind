import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "@/lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

const STUDIO_PATH = /^\/(en|sw)\/learn\/studio(\/|$)/;
/**
 * The public site root currently opens the auth flow (login) instead of the
 * marketing home page. Set to `false` to restore the marketing landing page.
 */
const ROOT_REDIRECTS_TO_LOGIN = true;
const LOCALE_ROOT = /^\/(en|sw)\/?$/;

export async function middleware(request: NextRequest) {
  const { response: supabaseResponse, user } = await updateSession(request);

  const pathname = request.nextUrl.pathname;
  const isStudio = STUDIO_PATH.test(pathname);

  if (ROOT_REDIRECTS_TO_LOGIN && LOCALE_ROOT.test(pathname)) {
    const locale = pathname.split("/")[1] || routing.defaultLocale;
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = `/${locale}/login`;
    loginUrl.search = "";
    return NextResponse.redirect(loginUrl);
  }

  if (isStudio && !user) {
    const locale = pathname.split("/")[1] || routing.defaultLocale;
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = `/${locale}/login`;
    loginUrl.searchParams.set("next", pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  const intlResponse = intlMiddleware(request);

  supabaseResponse.cookies.getAll().forEach((cookie) => {
    intlResponse.cookies.set(cookie.name, cookie.value, cookie);
  });

  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|auth|_next|_vercel|.*\\..*).*)"],
};
