import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./config/languages";

/**
 * Middleware that handles language routing for the application
 *
 * @param request - The incoming Next.js request object
 * @returns NextResponse - Either continues the request or redirects to language-prefixed URL
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the URL already includes a supported language code to prevents infinite redirects for already language-prefixed URLs
  const pathSegment = pathname.split("/")[1];
  if (SUPPORTED_LANGUAGES.includes(pathSegment)) {
    return NextResponse.next();
  }

  // Get the user's preferred language from the accept-language header
  // Format example: "en-US,en;q=0.9,fr;q=0.8"
  const acceptLang = request.headers.get("accept-language") || "";
  // Extract the primary language code
  const preferredLang = acceptLang.split(",")[0].split("-")[0];
  const lang = SUPPORTED_LANGUAGES.includes(preferredLang)
    ? preferredLang
    : DEFAULT_LANGUAGE;

  // Redirect to a new URL with the language prefix
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

// Configure which routes the middleware should run on
// This is a regex pattern that:
// - Excludes API routes (/api/*)
// - Excludes Next.js internal routes (/_next/*)
// - Excludes files with extensions (like .js, .css, etc.)
// - Includes the root path (/)
export const config = {
  matcher: ["/((?!api|_next|.*\\..+$).*)", "/"],
};
