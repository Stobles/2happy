import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parseJwt } from "./shared/utils/parseJWT";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const payload = parseJwt(token);

  if (payload && payload.exp && payload.sub) {
    console.log("Токен имеет правильную структуру");
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account"],
};
