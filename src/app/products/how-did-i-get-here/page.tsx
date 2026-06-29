import Link from "next/link";
import { ecosystemProducts } from "@/lib/products";

const product = ecosystemProducts.find((item) => item.id === "how-did-i-get-here");

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
      <h1>{product?.name}</h1>
      <p className="page-copy">
        {product?.description} This page is a placeholder for the product's future website content while the ecosystem
        site is being separated from the original Where Was I? monorepo.
      </p>

      <h2>Status</h2>
      <p>
        Product website copy, screenshots, install links, privacy notes, and release notes should be added here when
        this product is ready to be presented alongside Where Was I?.
      </p>
    </main>
  );
}
