import { getLang } from '@/lib/lang';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About',
  description: 'Page for Demo',
};

async function Page() {
  const { dictionary } = await getLang();
  const t = dictionary?.AboutPage;
  return (
    <div>
      <h1>{t?.aboutHeader}</h1>
      <p>{t?.aboutContent}</p>
    </div>
  );
}

export default Page;
