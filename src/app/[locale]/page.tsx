import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ecosystemProducts, howDidIGetHere, product } from "@/lib/products";
import { getAlternateLanguages, isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary, getLocalizedProductPath, getOtherLocale } from "@/i18n/dictionaries";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.home.metadataTitle,
    description: dictionary.home.metadataDescription,
    alternates: {
      languages: getAlternateLanguages(),
    },
    openGraph: {
      title: dictionary.ecosystem.name,
      description: dictionary.ecosystem.description,
      images: [howDidIGetHere.assets.screenshotEn.src],
      locale,
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";
  const dictionary = getDictionary(locale);
  const chromeExtensionHref = product.chromeWebStoreUrl || product.chromeExtensionPageUrl;

  return (
    <div className="page-shell">
      <Header locale={locale} />
      <main>
        <section className="hero">
          <div className="hero-copy-column">
            <span className="eyebrow">{dictionary.home.eyebrow}</span>
            <h1>{dictionary.ecosystem.tagline}</h1>
            <p className="hero-copy">{dictionary.home.heroCopy}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={localizePath(locale, howDidIGetHere.href)}>
                {dictionary.home.primaryCta}
              </Link>
              <Link className="button button-secondary" href="#products">
                {dictionary.home.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label={dictionary.home.heroPreviewLabel}>
            <div className="logo-orbit">
              <Image src={howDidIGetHere.assets.logo.src} alt="" width={124} height={124} priority />
            </div>
            <div className="product-frame hero-frame">
              <Image
                src={locale === "zh-CN" ? howDidIGetHere.assets.screenshotZh.src : howDidIGetHere.assets.screenshotEn.src}
                alt={
                  locale === "zh-CN"
                    ? howDidIGetHere.assets.screenshotZh.alt
                    : howDidIGetHere.assets.screenshotEn.alt
                }
                width={howDidIGetHere.assets.screenshotEn.width}
                height={howDidIGetHere.assets.screenshotEn.height}
                priority
              />
            </div>
          </div>
        </section>

        <section className="section featured-product" id="featured">
          <div className="feature-media">
            <Image
              src={howDidIGetHere.assets.logo.src}
              alt={howDidIGetHere.assets.logo.alt}
              width={howDidIGetHere.assets.logo.width}
              height={howDidIGetHere.assets.logo.height}
            />
          </div>
          <div>
            <p className="section-kicker">{howDidIGetHere.status}</p>
            <h2>{howDidIGetHere.name}</h2>
            <p className="section-intro">{locale === "zh-CN" ? dictionary.products.howDidIGetHere.description : howDidIGetHere.longDescription}</p>
            <div className="feature-list compact-list">
              {howDidIGetHere.features.slice(0, 3).map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
            <Link className="text-link" href={localizePath(locale, howDidIGetHere.href)}>
              {dictionary.home.featuredLink}
            </Link>
          </div>
        </section>

        <section className="section product-section" id="products">
          <h2>{dictionary.home.productsTitle}</h2>
          <p className="section-intro">{dictionary.home.productsIntro}</p>
          <div className="product-carousel" aria-label={dictionary.home.productsLabel}>
            {dictionary.home.productPair.map((item) => (
              <Link
                className="pair-card product-slide"
                href={getLocalizedProductPath(locale, item.href)}
                key={item.name}
              >
                <div className="product-card-copy">
                  <span>{item.label}</span>
                  <strong>{item.name}</strong>
                  <p>{item.body}</p>
                </div>
                <div className="product-card-logo">
                  <Image src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section workflow-section">
          <div>
            <h2>{dictionary.home.workflowTitle}</h2>
            <p className="section-intro">{dictionary.home.workflowIntro}</p>
          </div>
          <div className="workflow-steps">
            {dictionary.home.workflow.map((step) => (
              <article className="workflow-step" key={step.title}>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section localization-section">
          <div className="product-frame secondary-frame">
            <Image
              src={howDidIGetHere.assets.screenshotZh.src}
              alt={howDidIGetHere.assets.screenshotZh.alt}
              width={howDidIGetHere.assets.screenshotZh.width}
              height={howDidIGetHere.assets.screenshotZh.height}
            />
          </div>
          <div>
            <h2>{dictionary.home.localizationTitle}</h2>
            <p className="section-intro">{dictionary.home.localizationIntro}</p>
          </div>
        </section>

        <section className="section privacy-section">
          <div>
            <h2>{dictionary.home.privacyTitle}</h2>
            <p className="section-intro">{dictionary.home.privacyIntro}</p>
          </div>
          <div className="privacy-grid">
            {howDidIGetHere.privacyNotes.map((promise) => (
              <p key={promise}>{promise}</p>
            ))}
          </div>
        </section>

        <section className="section final-cta">
          <h2>{dictionary.home.finalTitle}</h2>
          <p>{dictionary.home.finalCopy}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={localizePath(locale, howDidIGetHere.href)}>
              {dictionary.home.primaryCta}
            </Link>
            <Link className="button button-secondary" href={chromeExtensionHref}>
              {dictionary.home.finalSecondaryCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

function Header({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const otherLocale = getOtherLocale(locale);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-link" href={localizePath(locale)}>
          <Image src="/brand/logo.png" alt="" width={32} height={32} />
          <span>Memory Trails</span>
        </Link>
        <nav className="nav-links" aria-label={dictionary.nav.primary}>
          <Link href="#featured">{dictionary.nav.featured}</Link>
          <Link href="#products">{dictionary.nav.products}</Link>
          <Link href={product.chromeWebStoreUrl || product.chromeExtensionPageUrl}>{dictionary.nav.whereWasI}</Link>
          <Link href={localizePath(locale, "/privacy")}>{dictionary.nav.privacy}</Link>
          <Link href={localizePath(otherLocale)} aria-label={dictionary.languageToggleLabel}>
            {dictionary.languageToggle}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="site-footer">
      <div className="brand-mark">
        <Image src="/brand/logo.png" alt="" width={28} height={28} />
        <span>Memory Trails</span>
      </div>
      <p>{dictionary.home.footer}</p>
      <div className="footer-products" aria-label={dictionary.home.productsLabel}>
        {ecosystemProducts.map((item) => (
          <Link key={item.id} href={getLocalizedProductPath(locale, item.href)}>
            {item.shortName}
          </Link>
        ))}
      </div>
    </footer>
  );
}
