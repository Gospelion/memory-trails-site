import Link from "next/link";
import { installPaths, product } from "@/lib/products";

export const metadata = {
  title: "Chrome extension - Where Was I?",
  description: "Get the Where Was I? Chrome extension.",
};

export default function InstallPage() {
  const chromeExtensionHref = product.chromeWebStoreUrl || installPaths.chromeExtensionsUrl;

  return (
    <main className="content-page">
      <Link className="brand-link" href="/">
        {product.name}
      </Link>
      <h1>Get the Chrome extension</h1>
      <p className="page-copy">
        Where Was I? is currently planned as a free Chrome extension. After the Chrome Web Store listing is live, this
        page should send readers directly to the official extension page.
      </p>

      <div className="callout">
        <p>
          <Link className="button button-primary" href={chromeExtensionHref}>
            Open Chrome extension page
          </Link>
        </p>
      </div>

      <h2>Temporary local testing</h2>
      <p>
        These steps are only for development builds before the Chrome Web Store listing is available.
      </p>
      <ol>
        <li>Run <code>npm run build:extension</code> from the monorepo root.</li>
        <li>Open <code>{installPaths.chromeExtensionsUrl}</code> in Chrome.</li>
        <li>Enable Developer Mode.</li>
        <li>Choose Load unpacked.</li>
        <li>Select <code>{installPaths.extensionBuildDirectory}</code>.</li>
        <li>Pin {product.shortName} from the Chrome extensions menu.</li>
      </ol>
    </main>
  );
}
