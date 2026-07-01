import Image from "next/image";
import Link from "next/link";
import { ecosystem, ecosystemProducts, howDidIGetHere, product, whereWasI } from "@/lib/products";

const workflow = [
  {
    title: "Capture the trail",
    body: "The extension records normal HTTP and HTTPS pages, then keeps the page nodes and source relationships in local browser storage.",
  },
  {
    title: "Group the research",
    body: "Local rules can create topics without a backend. Authorized AI grouping can refresh topics when the user chooses to enable it.",
  },
  {
    title: "Return to the work",
    body: "The side panel shows topic cards, relationship clues, core pages, and to-read pages so a research session can be reopened.",
  },
] as const;

const productPair = [
  {
    name: whereWasI.name,
    label: "Resume where you stopped",
    body: whereWasI.description,
    href: whereWasI.chromeWebStoreUrl || whereWasI.chromeExtensionPageUrl,
    logo: {
      src: "/brand/logo.png",
      alt: "Where Was I product mark",
      width: 96,
      height: 96,
    },
  },
  {
    name: howDidIGetHere.name,
    label: "Recover how you arrived",
    body: howDidIGetHere.description,
    href: howDidIGetHere.href,
    logo: {
      src: howDidIGetHere.assets.logo.src,
      alt: howDidIGetHere.assets.logo.alt,
      width: 96,
      height: 96,
    },
  },
] as const;

const chromeExtensionHref = product.chromeWebStoreUrl || product.chromeExtensionPageUrl;

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy-column">
            <span className="eyebrow">Free browser memory tools</span>
            <h1>{ecosystem.tagline}</h1>
            <p className="hero-copy">
              Memory Trails helps recover what the browser usually forgets: where you stopped reading, what led you to a
              page, and which research threads are worth reopening.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href={howDidIGetHere.href}>
                {howDidIGetHere.cta}
              </Link>
              <Link className="button button-secondary" href="#products">
                See all tools
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="How Did I Get Here product preview">
            <div className="logo-orbit">
              <Image src={howDidIGetHere.assets.logo.src} alt="" width={124} height={124} priority />
            </div>
            <div className="product-frame hero-frame">
              <Image
                src={howDidIGetHere.assets.screenshotEn.src}
                alt={howDidIGetHere.assets.screenshotEn.alt}
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
            <p className="section-intro">{howDidIGetHere.longDescription}</p>
            <div className="feature-list compact-list">
              {howDidIGetHere.features.slice(0, 3).map((feature) => (
                <p key={feature}>{feature}</p>
              ))}
            </div>
            <Link className="text-link" href={howDidIGetHere.href}>
              Read product notes
            </Link>
          </div>
        </section>

        <section className="section product-section" id="products">
          <h2>Two small tools, one memory system.</h2>
          <p className="section-intro">
            Memory Trails products stay narrow on purpose. One tool resumes the page, the other recovers the path.
          </p>
          <div className="product-carousel" aria-label="Memory Trails products">
            {productPair.map((item) => (
              <article className="pair-card product-slide" key={item.name}>
                <div className="product-card-logo">
                  <Image src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} />
                </div>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.name}</strong>
                  <p>{item.body}</p>
                </div>
                <Link className="text-link" href={item.href}>
                  View tool
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section workflow-section">
          <div>
            <h2>From scattered tabs to a recoverable research path.</h2>
            <p className="section-intro">
              How Did I Get Here? is built around the shape of real browsing: sources, branches, unread pages, and topic
              clusters.
            </p>
          </div>
          <div className="workflow-steps">
            {workflow.map((step) => (
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
            <h2>Research tools should feel local to the work.</h2>
            <p className="section-intro">
              The new product already carries English and Chinese product surfaces. The homepage stays English-first,
              while the product design can support bilingual research habits.
            </p>
          </div>
        </section>

        <section className="section privacy-section">
          <div>
            <h2>Private by default, explicit when AI is involved.</h2>
            <p className="section-intro">
              The ecosystem avoids account-first workflows. How Did I Get Here? stores its working data locally, skips
              sensitive categories, and uses AI grouping only after authorization.
            </p>
          </div>
          <div className="privacy-grid">
            {howDidIGetHere.privacyNotes.map((promise) => (
              <p key={promise}>{promise}</p>
            ))}
          </div>
        </section>

        <section className="section final-cta">
          <h2>Recover the browser context you meant to keep.</h2>
          <p>
            Explore the tools now. Memory Trails has no paid content, no subscription, and no account requirement in the
            current plan.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href={howDidIGetHere.href}>
              {howDidIGetHere.cta}
            </Link>
            <Link className="button button-secondary" href={chromeExtensionHref}>
              Get Where Was I
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-link" href="/">
          <Image src="/brand/logo.png" alt="" width={32} height={32} />
          <span>Memory Trails</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="#featured">Featured</Link>
          <Link href="#products">Products</Link>
          <Link href={chromeExtensionHref}>Where Was I</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand-mark">
        <Image src="/brand/logo.png" alt="" width={28} height={28} />
        <span>Memory Trails</span>
      </div>
      <p>Free browser memory tools for reading continuity, navigation recall, and recoverable research paths.</p>
      <div className="footer-products" aria-label="Memory Trails products">
        {ecosystemProducts.map((item) => (
          <Link key={item.id} href={item.href}>
            {item.shortName}
          </Link>
        ))}
      </div>
    </footer>
  );
}
