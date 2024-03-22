import { getLang } from '@/lib/lang';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business with ID',
  description: 'Page for Business',
};

export default async function Pagae({ params }: any) {
  const { lang, dictionary } = await getLang();
  const t = dictionary?.BusinessPage;
  return (
    <div>
      <h1>{t?.title}</h1>
      <p>{t?.description}</p>
      <h2>
        ID Business: {params.business} - ID: {params.id}
      </h2>
      <h4>LANG: {lang}</h4>
    </div>
  );
}
