import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './config/lang';

export function middleware(request: NextRequest) {
  //TODO: Detectar ?lang=es y relizar el cambio - PARA BOTON SWITCH LANG
  const pathname = request.nextUrl.pathname;

  console.log('\n\n> Pathname:', { pathname });

  let cookieLocale = request.cookies.get('lang')?.value;
  console.log('>>', { cookieLocale });

  if (!cookieLocale || !locales.includes(cookieLocale)) {
    console.log('No tiene cookie por lo que va por defecto en EN');
    cookieLocale = defaultLocale;
  }

  const localeFromPath = locales.find((loc) => pathname.startsWith(`/${loc}`));

  console.log('>> Path have LOCALE:', { localeFromPath });

  if (localeFromPath) {
    console.log(
      'Tiene /{lang}/ y es diferente a la coockie',
      pathname,
      'to',
      pathname.substring(3) || '/',
    );
    cookieLocale = localeFromPath;
    const newUrl = new URL(`${pathname.substring(3) || '/'}`, request.nextUrl);
    const response = NextResponse.redirect(newUrl);
    response.cookies.set('lang', cookieLocale);
    return response;
  } else {
    console.log(
      'No tiene LOCALE en el Path | ',
      pathname,
      'en ',
      cookieLocale,
      '-> Se redirige a',
      `/${
        cookieLocale && locales.includes(cookieLocale)
          ? cookieLocale
          : defaultLocale
      }${pathname}`,
    );

    const newUrl = new URL(`${pathname}`, request.nextUrl);
    return NextResponse.rewrite(newUrl);
  }
}

//TODO: termina en .algomas no lo detecta
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
