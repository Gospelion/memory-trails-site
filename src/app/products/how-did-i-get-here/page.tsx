import Link from "next/link";
import { howDidIGetHere } from "@/lib/products";

export const metadata = {
  title: "How Did I Get Here? - Memory Trails",
  description: howDidIGetHere.description,
};

export default function HowDidIGetHerePage() {
  return (
    <main className="content-page">
      <Link className="brand-link" href="/">
        Memory Trails
      </Link>
      <h1>{howDidIGetHere.name}</h1>
      <p className="page-copy">
        {howDidIGetHere.longDescription} It is designed for the moment when a useful page is open, but the chain of
        clicks, searches, and references that made it useful has faded.
      </p>

      <h2>Status</h2>
      <p>
        This product is a local MVP. The current Memory Trails plan has no paid content, no subscription, and no account
        requirement.
      </p>

      <h2>What it does</h2>
      <ul>
        {howDidIGetHere.features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Privacy stance</h2>
      <ul>
        {howDidIGetHere.privacyNotes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
