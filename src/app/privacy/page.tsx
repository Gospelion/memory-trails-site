import Link from "next/link";
import { privacyPromises, product } from "@/lib/products";

export const metadata = {
  title: "Privacy - Where Was I?",
  description: "Privacy notes for the Where Was I? Chrome extension.",
};

export default function PrivacyPage() {
  return (
    <main className="content-page">
      <Link className="brand-link" href="/">
        {product.name}
      </Link>
      <h1>Privacy notes</h1>
      <p className="page-copy">
        {product.name} is designed to remember reading position without turning your reading into an account,
        feed, or cloud profile.
      </p>

      <h2>Current v0.1 behavior</h2>
      <ul>
        {privacyPromises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>

      <h2>What is stored</h2>
      <p>
        The extension stores page URL, normalized URL, title, domain, a lightweight heading outline, scroll position,
        reading percentage, and update time. This helps the popup show recent pages and lets the prompt scroll back to
        the saved place.
      </p>

      <h2>What is not included</h2>
      <p>
        The v0.1 extension does not add login, cloud sync, AI summaries, notes, highlights, PDF tracking, or video
        tracking. Any future sync or account behavior should be documented before it is enabled.
      </p>
    </main>
  );
}
