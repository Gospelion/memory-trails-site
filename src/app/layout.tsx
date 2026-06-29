import type { Metadata } from "next";
import { ecosystem, product } from "@/lib/products";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${ecosystem.name} - Browser memory tools`,
  description: `${ecosystem.description} The first product is ${product.name}, a Chrome extension for continuing reading from where you left off.`,
  openGraph: {
    title: ecosystem.name,
    description: ecosystem.description,
    images: ["/product/continue-prompt-en.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
