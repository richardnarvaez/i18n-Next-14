import { getLang } from '@/lib/lang';
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
      <h1>{t?.title}</h1>
      <h2>{t?.description}</h2>
      <h3>ID Business: {params.business}</h3>
      <h4>LANG: {lang}</h4>
    </div>
  );
}
