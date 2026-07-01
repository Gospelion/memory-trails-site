import type { Metadata } from "next";
import Link from "next/link";
import { getAlternateLanguages, isLocale, localizePath } from "@/i18n/config";
import { getDictionary, getOtherLocale } from "@/i18n/dictionaries";
import { installPaths, product } from "@/lib/products";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pagePath = "/install";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.install.title,
    description: dictionary.install.description,
    alternates: {
      languages: getAlternateLanguages(pagePath),
    },
  };
}

export default async function InstallPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const chromeExtensionHref = product.chromeWebStoreUrl || installPaths.chromeExtensionsUrl;
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
      <h1>{dictionary.install.heading}</h1>
      <p className="page-copy">{dictionary.install.intro}</p>

      <div className="callout">
        <p>
          <Link className="button button-primary" href={chromeExtensionHref}>
            {dictionary.install.cta}
          </Link>
        </p>
      </div>

      <h2>{dictionary.install.testingHeading}</h2>
      <p>{dictionary.install.testingCopy}</p>
      <ol>
        {dictionary.install.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
