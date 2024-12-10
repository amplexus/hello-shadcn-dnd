
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/dashboard",
    "/dashboard/:path*",
    // "/api/stripe",
    // "/api/stripe/:path*",
  ],
};
