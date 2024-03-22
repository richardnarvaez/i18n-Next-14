interface DictionaryEntry {
  HomePage: {
    homeHeader: string;
    homeContent: string;
  };
  AboutPage: {
    aboutHeader: string;
    aboutContent: string;
  };
  BusinessPage: {
    title: string;
    description: string;
  };
  Common: {
    clientSide: string;
  };
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    HomePage: {
      homeHeader: 'Home',
      homeContent: 'Welcome to my home.',
    },
    AboutPage: {
      aboutHeader: 'About Me',
      aboutContent:
        'Here is some information about me. English is my primary language.',
    },
    Common: {
      clientSide: 'Client Side Rendering',
    },
    BusinessPage: {
      title: 'Business Page',
      description: 'This is a description',
    },
  },
  es: {
    HomePage: {
      homeHeader: 'Pantalla principal',
      homeContent: 'Bienvenidos a mi casa.',
    },
    AboutPage: {
      aboutHeader: 'Sobre mi',
      aboutContent:
        'Aqui tenemos un poco informacion sobre mi. Hablo espanol tambien.',
    },
    BusinessPage: {
      title: 'Pagina de la Empresa',
      description: 'Esto es una descripcion',
    },
    Common: {
      clientSide: 'Renderizado en el lado del Cliente',
    },
  },
};
