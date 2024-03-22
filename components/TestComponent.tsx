'use client';
import { useLang } from '@/lib/lang';
import { useState } from 'react';

export default function TestComponet() {
  const { lang, dictionary } = useLang();
  const t = dictionary?.HomePage;
  const common = dictionary?.Common;
  console.log({ t, lang });
  const [count, setCount] = useState<number>(0);

  return (
    <div className="border p-4 rounded mb-4">
      <h2 className="m-0">{common?.clientSide}</h2>
      <p>{t?.homeContent}:</p>
      <div className="flex gap-2 rounded-full items-center justify-center border px-4 py-2">
        <button
          className="border bg-gray-100 rounded-full px-4"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>

        <label>{count}</label>
        <button
          className="border bg-gray-100 rounded-full px-4"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
