import { NextResponse } from "next/server";

// without the matcher; it infinite redirects `ERR_TOO_MANY_REDIRECTS`
export const config = {
  matcher: ["/en", "/fr", "/de"],
};

export default async function handler() {
  return NextResponse.next();
}
