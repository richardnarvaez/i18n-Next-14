import TestComponet from '@/components/TestComponent';
import { getLang } from '@/lib/lang';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Next 14 LANG Demo',
  description: 'Page for Demo',
};

async function Page({ params }: { params: { lang: string } }) {
  const {lang, dictionary: t}: any = await getLang();
  console.log("SERVER: ", t)
  return (
    <div>
      <h1>H1. {t?.homeHeader}</h1>
      <p>p. {t?.homeContent}</p>
      <TestComponet />
      <div className="switch-lang border rounded p-3 flex gap-4">
        <a href="/es" className="border bg-gray-50 rounded py-1 px-4">
          es
        </a>
        <a href="/en" className="border bg-gray-50 rounded py-1 px-4">
          en
        </a>
      </div>

      <div className='flex gap-3'>
        <Link href={"/business"}>Business</Link>
        <Link href={"/business/1231"}>Business with id</Link>
      </div>
    </div>
  );
}

export default Page;
