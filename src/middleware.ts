import { auth } from "./auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Session } from "next-auth";

// `auth()` ke callback ka type manually define kiya
export default auth((req: NextRequest & { auth?: Session | null }) => {
  const { pathname } = req.nextUrl;

  if (!req.auth && pathname.startsWith("/edit-photo")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/edit-photo/:path*"], // Protect /edit-photo and all its subpages
};
