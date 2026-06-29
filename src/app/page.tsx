import Image from "next/image";
import Link from "next/link";
import { ecosystemProducts, privacyPromises, proPlan, product } from "@/lib/products";

const features = [
  {
    title: "Free remembers your latest 5 pages",
    body: "Start with local reading memory for the handful of pages you actually want to finish.",
  },
  {
    title: "Pro restores without extra steps",
    body: "Automatic revisit prompts help you continue when you return to a saved page.",
  },
  {
    title: "Quiet on low-value pages",
    body: "Short pages, browser pages, and tiny scrolls are ignored so the extension stays out of the way.",
  },
  {
    title: "Made for normal reading",
    body: "No summaries, notes, highlights, or feed. Just the place you stopped and a way back.",
  },
];

const freeFeatures = [
  "Latest 5 local reading records",
  "Continue Prompt after opening a record from the popup",
  "Local Chrome storage",
  "No account required",
];

const proFeatures = [
  "Lifetime unlock",
  "Automatic Continue Prompt when revisiting saved pages",
  "Chrome sync support when enabled",
  "Richer history management",
];

const chromeExtensionHref = product.chromeWebStoreUrl || product.chromeExtensionPageUrl;
const paypalCheckoutUrl = process.env.NEXT_PUBLIC_PAYPAL_CHECKOUT_URL || proPlan.paypalCheckoutUrl;

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">Free Chrome extension + Pro lifetime unlock</span>
            <h1>{product.tagline}</h1>
            <p className="hero-copy">
              {product.description} Free is enough to try the habit. Pro is a one-time purchase for people who want the
              prompt to appear automatically when they come back.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href={paypalCheckoutUrl}>
                Buy Pro with PayPal
              </Link>
              <Link className="button button-secondary" href={chromeExtensionHref}>
                Get the free extension
              </Link>
            </div>
            <p className="hero-note">
              Early bird {proPlan.earlyBirdPrice} for the first {proPlan.earlyBirdLimit} users, then{" "}
              {proPlan.regularPrice}. Lifetime license, no subscription.
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
          <h2>For the tabs you meant to finish.</h2>
          <p className="section-intro">
            This is not a bookmarking system or a read-it-later app. It handles the tiny moment after you reopen an
            article, documentation page, or essay and wonder where you stopped.
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

        <section className="section pricing-section" id="pricing">
          <div className="pricing-header">
            <h2>Start free. Upgrade once.</h2>
            <p className="section-intro">
              Keep the free extension lightweight, then buy Pro if automatic reminders and richer history are worth it.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="plan-card">
              <div className="plan-top">
                <span className="plan-label">Free</span>
                <strong>$0</strong>
                <p>For trying the reading-memory habit.</p>
              </div>
              <ul className="plan-list">
                {freeFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="button button-secondary" href={chromeExtensionHref}>
                Get free
              </Link>
            </article>
            <article className="plan-card plan-card-featured">
              <div className="plan-top">
                <span className="plan-label">Pro lifetime</span>
                <strong>
                  {proPlan.earlyBirdPrice}
                  <small> then {proPlan.regularPrice}</small>
                </strong>
                <p>For people who want the prompt to appear as soon as they revisit saved pages.</p>
              </div>
              <ul className="plan-list">
                {proFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="button button-primary" href={paypalCheckoutUrl}>
                Pay with PayPal
              </Link>
            </article>
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
          <span>{product.shortName}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="#products">Products</Link>
          <Link href={chromeExtensionHref}>Extension</Link>
          <Link href="#pricing">Pricing</Link>
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
        <span>{product.name}</span>
      </div>
      <p>Free Chrome reading memory with a Pro lifetime unlock via PayPal.</p>
    </footer>
  );
}
