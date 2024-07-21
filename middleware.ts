// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("SITE_OFFLINE:", process.env.SITE_OFFLINE); // Debugging line
  const isOffline = process.env["SITE_OFFLINE"] === "true";

  if (isOffline && req.nextUrl.pathname !== "/offline") {
    return NextResponse.redirect(new URL("/offline", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
