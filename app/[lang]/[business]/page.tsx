import { dictionary } from "@/locales";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Business',
    description: 'Page for Business',
  }

export default function Pagae({params}:any) {
    const t = dictionary[params.lang]
    return <div>
        <h1>{t?.BusinessPage.title}: {params.business}</h1>
    </div>
}