import Link from "next/link";
import { howDidIGetHere } from "@/lib/products";

const focusAreas = [
  "Show the recent browser path that led to the current page.",
  "Help you recover why a tab mattered without turning browsing into a social feed.",
  "Fit alongside Where Was I? as a small, focused memory tool.",
];

export const metadata = {
  title: "How Did I Get Here? - Memory Trails",
  description: "A Memory Trails product for understanding the browsing path that brought you to the current page.",
};

export default function HowDidIGetHerePage() {
  return (
    <main className="content-page">
      <Link className="brand-link" href="/">
        Memory Trails
      </Link>
      <h1>{howDidIGetHere.name}</h1>
      <p className="page-copy">
        {howDidIGetHere.description} It is designed for the moment when a useful page is open, but the chain of clicks,
        searches, and references that made it useful has faded.
      </p>

      <h2>Status</h2>
      <p>
        This product is in design. The current Memory Trails plan has no paid content, and this page will grow as the
        extension's behavior, privacy notes, screenshots, and installation path become ready to publish.
      </p>

      <h2>Focus</h2>
      <ul>
        {focusAreas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
