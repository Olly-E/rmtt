import { NextRequest, NextResponse } from "next/server";

import { AccessType } from "@/app/types";

const PUBLIC_FILE = /\.(.*)$/;

const AUTH_PAGE_PATHNAMES = ["/auth"];

const TEAM_MEMBER_PATHNAMES = ["/time", "/projects", "/onboarding"];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessType = req.cookies.get("accessType")?.value;

  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return NextResponse.next();

  let token: string | undefined;
  const requestHeaders = new Headers(req.headers);

  if (req.cookies.has("RMTT_TOKEN")) {
    token = req.cookies.get("RMTT_TOKEN")?.value;
  } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7);
  }
  // TODO: Create token checker and token refresher with refresh token

  if (token) {
    if (
      AUTH_PAGE_PATHNAMES.some(
        (pagePathname) => pathname.startsWith(pagePathname) || pathname === "/"
      )
    )
      return NextResponse.redirect(new URL("/time", req.url));
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  if (!token) {
    if (
      AUTH_PAGE_PATHNAMES.some(
        (pagePathname) => pathname.startsWith(pagePathname) || pathname === "/"
      )
    )
      return;
    return NextResponse.redirect(
      new URL(
        `/auth/login?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        req.url
      )
    );
  }

  if (accessType === AccessType.MEMBER) {
    if (
      TEAM_MEMBER_PATHNAMES.some((pagePathname) =>
        pathname.startsWith(pagePathname)
      )
    )
      return NextResponse.redirect(new URL("/TIME", req.url));
  }

  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  return response;
}
