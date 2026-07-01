import type { Metadata } from "next";
import Link from "next/link";
import { getAlternateLanguages, isLocale, localizePath } from "@/i18n/config";
import { getDictionary, getOtherLocale } from "@/i18n/dictionaries";
import { privacyPromises, product } from "@/lib/products";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const pagePath = "/privacy";

const privacyPromisesZh = [
  "v0.1 阶段阅读位置保存在浏览器本地。",
  "不需要账号。",
  "扩展不会收集网页正文内容。",
  "扩展只保存轻量页面元数据和滚动位置。",
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.privacy.title,
    description: dictionary.privacy.description,
    alternates: {
      languages: getAlternateLanguages(pagePath),
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const promises = locale === "zh-CN" ? privacyPromisesZh : privacyPromises;
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
      <h1>{dictionary.privacy.heading}</h1>
      <p className="page-copy">{dictionary.privacy.intro}</p>

      <h2>{dictionary.privacy.currentHeading}</h2>
      <ul>
        {promises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>

      <h2>{dictionary.privacy.storedHeading}</h2>
      <p>{dictionary.privacy.storedCopy}</p>

      <h2>{dictionary.privacy.excludedHeading}</h2>
      <p>{dictionary.privacy.excludedCopy}</p>
    </main>
  );
}
