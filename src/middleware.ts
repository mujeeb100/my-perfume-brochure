import { auth } from "./auth";

export default auth((req:any) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/edit-photo")) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/edit-photo"],
};