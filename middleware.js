import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const locale =
    req.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';

  // Se já houver um idioma na URL, não faça nada
  if (pathname.startsWith('/en') || pathname.startsWith('/pt-br')) {
    return NextResponse.next();
  }

  // Redirecionar para o idioma padrão
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
