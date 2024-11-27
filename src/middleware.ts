import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { getLocale } from "next-intl/server";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);

  const token = req.cookies.get("token");
  const path = req.nextUrl.pathname;
  const locale = await getLocale();

  if (path === `/${locale}/login` && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return intlResponse;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
