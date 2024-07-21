import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isOffline = process.env.SITE_OFFLINE === 'false';

  // Add logging for debugging
  console.log('Middleware running');
  console.log('SITE_OFFLINE:', process.env.SITE_OFFLINE);
  console.log('isOffline:', isOffline);

  if (isOffline && req.nextUrl.pathname !== '/offline') {
    return NextResponse.redirect(new URL('/offline', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|favicon.ico).*)',
};