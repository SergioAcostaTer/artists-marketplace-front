import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  const hasLocalePrefix = /^\/(es|en|fr)\//.test(pathname);

  console.log("hasLocalePrefix", hasLocalePrefix);

  if (!hasLocalePrefix && pathname !== "/") {
    const url = new URL(process.env.NEXT_PUBLIC_BASE_URL + "/en" + pathname);

    console.log("redirecting to", url.toString());

    return NextResponse.redirect(url.toString(), { status: 302 });
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
