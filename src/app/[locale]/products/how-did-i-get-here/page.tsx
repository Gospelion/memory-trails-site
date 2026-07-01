import type { Metadata } from "next";
import Link from "next/link";
import { getAlternateLanguages, isLocale, localizePath } from "@/i18n/config";
import { getDictionary, getOtherLocale } from "@/i18n/dictionaries";
import { howDidIGetHere } from "@/lib/products";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pagePath = "/products/how-did-i-get-here";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.products.howDidIGetHere.title,
    description: dictionary.products.howDidIGetHere.description,
    alternates: {
      languages: getAlternateLanguages(pagePath),
    },
  };
}

export default async function HowDidIGetHerePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const productDictionary = dictionary.products.howDidIGetHere;
  const otherLocale = getOtherLocale(locale);

  return (
    <main className="content-page">
      <div className="content-nav">
        <Link className="brand-link" href={localizePath(locale)}>
          Memory Trails
        </Link>
        <Link className="text-link" href={localizePath(otherLocale, pagePath)}>
          {dictionary.languageToggle}
        </Link>
      </div>
      <h1>{howDidIGetHere.name}</h1>
      <p className="page-copy">
        {productDictionary.longDescription} {productDictionary.intro}
      </p>

      <h2>{productDictionary.statusHeading}</h2>
      <p>{productDictionary.statusCopy}</p>

      <h2>{productDictionary.featuresHeading}</h2>
      <ul>
        {productDictionary.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{productDictionary.privacyHeading}</h2>
      <ul>
        {productDictionary.privacyNotes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
