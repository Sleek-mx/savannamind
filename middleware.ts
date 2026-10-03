import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "@/lib/supabase/middleware";

const intlMiddleware = createIntlMiddleware(routing);

const STUDIO_PATH = /^\/(en|sw)\/learn\/studio(\/|$)/;
/**
 * The public marketing website has been removed from the app. The locale root
 * and the retired public pages now open the auth entry screen instead.
 */
const LOCALE_ROOT = /^\/(en|sw)\/?$/;
const RETIRED_SITE_PATH =
  /^\/(en|sw)\/(about|contact|focus-areas|learn|projects|resources)\/?$/;

function loginUrlFor(request: NextRequest) {
  const locale = request.nextUrl.pathname.split("/")[1] || routing.defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}/login`;
  url.search = "";
  return url;
}

export async function middleware(request: NextRequest) {
  const { response: supabaseResponse, user } = await updateSession(request);

  const pathname = request.nextUrl.pathname;
  const isStudio = STUDIO_PATH.test(pathname);

  if (LOCALE_ROOT.test(pathname) || RETIRED_SITE_PATH.test(pathname)) {
    return NextResponse.redirect(loginUrlFor(request));
  }

  if (isStudio && !user) {
    const loginUrl = loginUrlFor(request);
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
