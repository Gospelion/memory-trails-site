import type { Metadata } from "next";
import { ecosystem, howDidIGetHere, whereWasI } from "@/lib/products";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${ecosystem.name} - Browser memory tools`,
  description: `${ecosystem.description} Explore ${howDidIGetHere.name} for research paths and ${whereWasI.name} for reading continuity.`,
  openGraph: {
    title: ecosystem.name,
    description: ecosystem.description,
    images: [howDidIGetHere.assets.screenshotEn.src],
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
