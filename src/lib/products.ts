export const ecosystem = {
  name: "Memory Trails",
  tagline: "Browser memory tools for retracing attention, reading, and context.",
  description:
    "Memory Trails is a product ecosystem for lightweight browser memory, reading continuity, and navigation recall.",
} as const;

export const whereWasI = {
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

export const howDidIGetHere = {
  name: "How Did I Get Here?",
  shortName: "How Did I Get Here",
  tagline: "Understand the path that brought you to the current page.",
  description:
    "A sibling Chrome extension in the Memory Trails ecosystem for tracing browsing context and navigation paths.",
  href: "/products/how-did-i-get-here",
  status: "in design",
} as const;

export const product = whereWasI;

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
    name: whereWasI.name,
    shortName: whereWasI.shortName,
    tagline: whereWasI.tagline,
    description: whereWasI.description,
    href: "/",
    status: "available",
  },
  {
    id: "how-did-i-get-here",
    name: howDidIGetHere.name,
    shortName: howDidIGetHere.shortName,
    tagline: howDidIGetHere.tagline,
    description: howDidIGetHere.description,
    href: howDidIGetHere.href,
    status: howDidIGetHere.status,
  },
] as const;
