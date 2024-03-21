'use client';
import { dictionary } from '@/locales';
import { useEffect, useState } from 'react';
import { getLang } from './lang';

export function useLang() {
  const [langData, setLangData] = useState({
    lang: 'en',
    dictionary: dictionary['en'],
  });

  useEffect(() => {
    async function fetchLang() {
      const langData = await getLang();
      setLangData(langData);
    }

    fetchLang();
  }, []); 

  return langData;
}
