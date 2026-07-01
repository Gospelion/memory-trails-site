export const ecosystem = {
  name: "Memory Trails",
  tagline: "Browser memory tools for reading, research, and context trails.",
  description:
    "Memory Trails is a product ecosystem for lightweight browser memory, reading continuity, and research path recovery.",
} as const;

export const whereWasI = {
  name: "Where Was I?",
  shortName: "Where Was I",
  tagline: "Continue reading from where you left off.",
  description:
    "A lightweight Chrome extension that remembers the latest reading position for normal webpages and helps you return to it later.",
  websiteUrl: "https://where-was-i-site.vercel.app/",
  chromeWebStoreUrl: "https://chromewebstore.google.com/detail/where-was-i/ajmchpcbddhiocgkpflniinmemfplhjj",
  chromeExtensionPageUrl: "/install",
  repositoryUrl: "",
} as const;

export const howDidIGetHere = {
  name: "How Did I Get Here?",
  shortName: "How Did I Get Here",
  tagline: "Turn browsing paths into recoverable research topics.",
  description:
    "A Chrome extension that records research trails in the browser and groups ordinary page visits into topics you can reopen later.",
  longDescription:
    "How Did I Get Here? watches normal web research as it happens, remembers page relationships, and helps recover the chain of pages that made a topic useful.",
  href: "/products/how-did-i-get-here",
  status: "local MVP",
  cta: "Explore How Did I Get Here?",
  assets: {
    logo: {
      src: "/product/how-did-i-get-here/logo.png",
      alt: "How Did I Get Here product mark showing browser pages connected by a research path",
      width: 1254,
      height: 1254,
    },
    screenshotEn: {
      src: "/product/how-did-i-get-here/screenshot-en.png",
      alt: "How Did I Get Here side panel showing grouped research topics and confidence signals",
      width: 1280,
      height: 800,
    },
    screenshotZh: {
      src: "/product/how-did-i-get-here/screenshot-zh.png",
      alt: "Chinese How Did I Get Here side panel showing localized research topic groups",
      width: 1280,
      height: 800,
    },
  },
  features: [
    "Records normal HTTP and HTTPS page visits.",
    "Uses opener tabs and referrers to infer source relationships.",
    "Groups page nodes into research topics with local rules or authorized AI.",
    "Shows topic cards, topic trees, page details, and relationship clues in the side panel.",
    "Reopens core pages and to-read pages with Continue research.",
  ],
  privacyNotes: [
    "Stores page nodes, edges, topics, settings, blacklist, and AI authorization in chrome.storage.local.",
    "Skips sensitive site categories by default.",
    "Supports a custom domain blacklist.",
    "Uses AI grouping only after the user authorizes it.",
  ],
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
    href: whereWasI.chromeWebStoreUrl || whereWasI.chromeExtensionPageUrl,
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
