import Image from "next/image";
import Link from "next/link";
import { ecosystem, ecosystemProducts, privacyPromises, product } from "@/lib/products";

const features = [
  {
    title: "Reading continuity",
    body: "Where Was I remembers the point where your attention stopped so a reopened page feels less cold.",
  },
  {
    title: "Path awareness",
    body: "How Did I Get Here explores the context trail that brought you from one page to another.",
  },
  {
    title: "Small, focused tools",
    body: "Each product answers one browser-memory question without turning into a feed, notebook, or account system.",
  },
  {
    title: "Built to expand",
    body: "The ecosystem can grow into more context and recall tools while keeping each product independently useful.",
  },
];

const chromeExtensionHref = product.chromeWebStoreUrl || product.chromeExtensionPageUrl;

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">A growing ecosystem of free browser tools</span>
            <h1>{ecosystem.tagline}</h1>
            <p className="hero-copy">
              {ecosystem.description} The first product, {product.name}, helps you continue reading from where you left
              off. The next product, How Did I Get Here?, focuses on the path that brought you to the current page.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#products">
                Explore products
              </Link>
              <Link className="button button-secondary" href={chromeExtensionHref}>
                Get Where Was I
              </Link>
            </div>
            <p className="hero-note">
              Current plan: no paid content, no subscription, and no account requirement.
            </p>
          </div>
          <div className="hero-visual">
            <div className="product-frame">
              <Image
                src="/product/continue-prompt-en.png"
                alt="Where Was I continue reading prompt on a saved webpage"
                width={1280}
                height={800}
                priority
              />
            </div>
            <p className="visual-caption">
              The Continue Prompt sits above the page and asks before scrolling you back.
            </p>
          </div>
        </section>

        <section className="section product-section" id="products">
          <h2>One ecosystem for small acts of browser memory.</h2>
          <p className="section-intro">
            Memory Trails products are intentionally narrow tools. Each one answers a specific question about what you
            were reading, where you stopped, or how you arrived somewhere.
          </p>
          <div className="product-grid">
            {ecosystemProducts.map((ecosystemProduct) => (
              <article className="product-card" key={ecosystemProduct.id}>
                <span>{ecosystemProduct.status}</span>
                <strong>{ecosystemProduct.name}</strong>
                <p>{ecosystemProduct.description}</p>
                <Link className="text-link" href={ecosystemProduct.href}>
                  View product
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section product-section">
          <h2>Designed around the questions browsers leave unanswered.</h2>
          <p className="section-intro">
            Memory Trails is not trying to become a giant productivity suite. It is a set of quiet tools for recovering
            your place, understanding your path, and making browser context easier to resume.
          </p>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature" key={feature.title}>
                <strong>{feature.title}</strong>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="split-band">
            <div>
              <h2>Private by default, because reading is personal.</h2>
              <p className="section-intro">
                The extension saves lightweight page metadata and scroll position. It does not collect webpage body text.
              </p>
            </div>
            <ul className="promise-list">
              {privacyPromises.map((promise) => (
                <li key={promise}>{promise}</li>
              ))}
            </ul>
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
          <Link href="#products">Products</Link>
          <Link href={chromeExtensionHref}>Where Was I</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/changelog">Changelog</Link>
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
      <p>Free browser memory tools for reading continuity, navigation recall, and future context trails.</p>
    </footer>
  );
}
