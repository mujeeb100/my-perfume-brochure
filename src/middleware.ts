import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  if (!req.auth && pathname.startsWith("/edit-photo")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/edit-photo/:path*"], // Protect /edit-photo and all its subpages
};
