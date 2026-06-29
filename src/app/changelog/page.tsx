import Link from "next/link";
import { product } from "@/lib/products";

export const metadata = {
  title: "Changelog - Where Was I?",
  description: "Release notes for the Where Was I? Chrome extension.",
};

export default function ChangelogPage() {
  return (
    <main className="content-page">
      <Link className="brand-link" href="/">
        {product.name}
      </Link>
      <h1>Changelog</h1>

      <h2>v0.1.0</h2>
      <ul>
        <li>Saved latest reading position for eligible webpages.</li>
        <li>Added a popup with recent reading records.</li>
        <li>Added a top fixed Continue Prompt with Continue and Ignore actions.</li>
        <li>Kept data local in Chrome storage for the MVP.</li>
      </ul>
    </main>
  );
}
