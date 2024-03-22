'use client'
import Link from 'next/link'
import {
   Menubar,
   MenubarContent,
   MenubarItem,
   MenubarMenu,
   MenubarTrigger,
} from '@/components/ui/menubar'

import { usePathname } from 'next/navigation'

import Flag from './Flag'
import { useLang } from '@/lib/lang'

export default function LangMenu(props: any) {
   const route = usePathname()
   const { lang } = useLang()
   return (
      <Menubar {...props}>
         <MenubarMenu>
            <MenubarTrigger className="p-1">
               <Flag code={lang} />
               <svg
                  className="-me-1 ms-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
               >
                  <path
                     fillRule="evenodd"
                     d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                     clipRule="evenodd"
                  />
               </svg>
            </MenubarTrigger>
            <MenubarContent>
               <MenubarItem>
                  <a className="flex items-center gap-2" href={`/es${route}`}>
                     <Flag code="es" />
                     {'ES | Español'}
                  </a>
               </MenubarItem>
               <MenubarItem>
                  <a className="flex items-center gap-2" href={`/en${route}`}>
                     <Flag code="en" /> {'EN | English'}
                  </a>
               </MenubarItem>
            </MenubarContent>
         </MenubarMenu>
      </Menubar>
   )
}
