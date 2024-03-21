import { dictionary } from '@/locales';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business with ID',
    description: 'Page for Business',
  }


export default function Pagae({ params }: any) {
  const t = dictionary[params.lang];
  return (
    <div>
      <h1>{t?.BusinessPage.title}</h1>
      <h2>
        {params.business} - {params.id}
      </h2>
    </div>
  );
}
