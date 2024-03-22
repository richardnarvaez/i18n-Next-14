import TestComponet from '@/components/TestComponent';
import { getLang } from '@/lib/lang';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Next 14 LANG Demo',
  description: 'Page for Demo',
};

async function Page({ params }: { params: { lang: string } }) {
  const { lang, dictionary } = await getLang();

  const t = dictionary?.HomePage;

  return (
    <div>
      <div>
        <h1>H1. {t?.homeHeader}</h1>
        <p>p. {t?.homeContent}</p>
      </div>
      <TestComponet />

      <div className="border rounded mt-4 p-3">
        <p>Links</p>
        <div className="flex gap-3">
          <Link href={'/business'}>Business: /[business] </Link>
          <Link href={'/business/1231'}>
            Business with id: /[business]/[1231]
          </Link>
          <Link href={'/about'}>About: /about</Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
