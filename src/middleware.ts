import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const path = req.nextUrl.pathname;
  const locale = req.cookies.get("NEXT_LOCALE");

  if (path === `/${locale?.value}/login` && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
