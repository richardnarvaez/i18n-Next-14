import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/config/lang';
import LangMenu from '@/components/SelectLanguaje/LangMenu';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  console.log({ lang: params.lang });
  return (
    <>
      <html lang={params.lang ?? defaultLocale}>
        <head />
        <body className={inter.className}>
          <div className="relative flex flex-col min-h-screen">
            <div className="container flex-1 py-8 prose lg:prose-lg">
              <div className="switch-lang bg-white items-center justify-between border rounded p-3 flex gap-4 mb-4">
                <Link href="/">i18n Demo</Link>
                <div className="flex gap-2">
                  <LangMenu />
                </div>
              </div>
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
