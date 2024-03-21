import { getLang } from '@/lib/getLangServer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business',
  description: 'Page for Business',
};

export default async function Pagae({ params }: any) {
  const { lang, dictionary } = await getLang();
  const t = dictionary?.BusinessPage;
  return (
    <div>
      <h1>
        {t.title}: {params.business}
      </h1>
    </div>
  );
}
