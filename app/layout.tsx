import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/config/lang';

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
              {children}
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
