import type { Metadata } from "next";
import Link from "next/link";
import { getAlternateLanguages, isLocale, localizePath } from "@/i18n/config";
import { getDictionary, getOtherLocale } from "@/i18n/dictionaries";
import { product } from "@/lib/products";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pagePath = "/changelog";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.changelog.title,
    description: dictionary.changelog.description,
    alternates: {
      languages: getAlternateLanguages(pagePath),
    },
  };
}

export default async function ChangelogPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const otherLocale = getOtherLocale(locale);

  return (
    <main className="content-page">
      <div className="content-nav">
        <Link className="brand-link" href={localizePath(locale)}>
          {product.name}
        </Link>
        <Link className="text-link" href={localizePath(otherLocale, pagePath)}>
          {dictionary.languageToggle}
        </Link>
      </div>
      <h1>{dictionary.changelog.heading}</h1>

      {dictionary.changelog.releases.map((release) => (
        <section key={release.version}>
          <h2>{release.version}</h2>
          <ul>
            {release.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
