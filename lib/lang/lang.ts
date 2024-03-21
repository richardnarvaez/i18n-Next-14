import { dictionary } from '@/locales';

export async function getLang() {
  let lang: string = 'en'; // Valor predeterminado

  if (typeof window === 'undefined') {
    // Si estamos en el servidor
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = cookies();

      lang = cookieStore.get('lang')?.value || lang;
    } catch (error) {
      console.error(
        'Error al importar la función "cookies" en el servidor:',
        error,
      );
    }
  } else if (typeof document !== 'undefined') {
    // Si estamos en el cliente
    const langCookie = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('lang='));
    lang = langCookie ? langCookie.split('=')[1] || lang : lang;
  }

  return { lang, dictionary: dictionary[lang] || dictionary['en'] };
}
