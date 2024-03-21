import { dictionary } from '@/locales';

function Page({ params }: { params: { lang: string } }) {
  const t = dictionary[params.lang];
  return (
    <div>
      <h1>{t?.aboutHeader}</h1>
      <p>{t?.aboutContent}</p>
    </div>
  );
}

export default Page;
