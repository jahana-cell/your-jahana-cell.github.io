
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN;

  if (rootDomain) {
    const wwwHost = `www.${rootDomain}`;
    if (process.env.NODE_ENV === 'production' && host && host === rootDomain) {
      const newUrl = new URL(request.url);
      newUrl.host = wwwHost;
      return NextResponse.redirect(newUrl.toString(), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
