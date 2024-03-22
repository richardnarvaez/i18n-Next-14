'use client';
import { useLang } from '@/lib/lang';
import { useState } from 'react';

export default function TestComponet() {
  const { lang, dictionary: t } = useLang();
  console.log({ t, lang });
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Componente {t?.aboutContent}:</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
