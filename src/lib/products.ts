export const ecosystem = {
  name: "Memory Trails",
  tagline: "Small browser tools for remembering where your attention left off.",
  description:
    "Memory Trails is a product ecosystem for lightweight browser memory, reading continuity, and navigation recall.",
} as const;

export const product = {
  name: "Where Was I?",
  shortName: "Where Was I",
  tagline: "Continue reading from where you left off.",
  description:
    "A lightweight Chrome extension that remembers the latest reading position for normal webpages and helps you return to it later.",
  websiteUrl: "https://where-was-i-site.vercel.app/",
  chromeWebStoreUrl: "",
  chromeExtensionPageUrl: "/install",
  repositoryUrl: "",
} as const;

export const proPlan = {
  name: "Pro lifetime",
  provider: "PayPal",
  productId: "pro_lifetime",
  earlyBirdPrice: "$4.99",
  regularPrice: "$9.99",
  earlyBirdLimit: 100,
  paypalCheckoutUrl: "https://www.paypal.com/",
  status: "available",
} as const;

export const privacyPromises = [
  "Reading positions stay local in the browser for v0.1.",
  "No account is required.",
  "The extension does not collect webpage body text.",
  "The extension only saves lightweight page metadata and scroll position.",
] as const;

export const installPaths = {
  extensionBuildDirectory: "apps/extension/dist",
  chromeExtensionsUrl: "chrome://extensions",
} as const;

export const ecosystemProducts = [
  {
    id: "where-was-i",
    name: product.name,
    shortName: product.shortName,
    tagline: product.tagline,
    description: product.description,
    href: "/",
    status: "available",
  },
  {
    id: "how-did-i-get-here",
    name: "How Did I Get Here?",
    shortName: "How Did I Get Here",
    tagline: "Understand the path that brought you to the current page.",
    description:
      "A sibling Chrome extension in the Memory Trails ecosystem for tracing browsing context and navigation paths.",
    href: "/products/how-did-i-get-here",
    status: "planned",
  },
] as const;
