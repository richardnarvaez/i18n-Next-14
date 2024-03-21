import { dictionary } from '@/locales';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Next 14 LANG Demo',
  description: 'Page for Demo',
}
function Page({ params }: { params: { lang: string } }) {
  const t = dictionary[params.lang];
  return (
    <div>
      <h1>H1. {t?.homeHeader}</h1>
      <p>p. {t?.homeContent}</p>
      <div className="switch-lang border rounded p-3 flex gap-4">
        <a href="/es" className="border bg-gray-50 rounded py-1 px-4">
          es
        </a>
        <a href="/en" className="border bg-gray-50 rounded py-1 px-4">
          en
        </a>
      </div>
    </div>
  );
}

export default Page;
