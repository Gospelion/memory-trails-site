import { howDidIGetHere, installPaths, privacyPromises, whereWasI } from "@/lib/products";
import { defaultLocale, isLocale, localizePath, type Locale } from "./config";

const chromeExtensionHref = whereWasI.chromeWebStoreUrl || whereWasI.chromeExtensionPageUrl;

export const dictionaries = {
  en: {
    localeName: "English",
    languageToggle: "中文",
    languageToggleLabel: "Switch language",
    ecosystem: {
      name: "Memory Trails",
      tagline: "Browser memory tools for reading, research, and context trails.",
      description:
        "Memory Trails is a product ecosystem for lightweight browser memory, reading continuity, and research path recovery.",
    },
    nav: {
      primary: "Primary",
      featured: "Featured",
      products: "Products",
      whereWasI: "Where Was I",
      privacy: "Privacy",
    },
    home: {
      metadataTitle: "Memory Trails - Browser memory tools",
      metadataDescription:
        "Memory Trails helps recover reading positions, research paths, and useful browser context.",
      eyebrow: "Free browser memory tools",
      heroCopy:
        "Memory Trails helps recover what the browser usually forgets: where you stopped reading, what led you to a page, and which research threads are worth reopening.",
      primaryCta: howDidIGetHere.cta,
      secondaryCta: "See all tools",
      heroPreviewLabel: "How Did I Get Here product preview",
      featuredLink: "Read product notes",
      productsTitle: "Two small tools, one memory system.",
      productsIntro:
        "Memory Trails products stay narrow on purpose. One tool resumes the page, the other recovers the path.",
      productsLabel: "Memory Trails products",
      workflowTitle: "From scattered tabs to a recoverable research path.",
      workflowIntro:
        "How Did I Get Here? is built around the shape of real browsing: sources, branches, unread pages, and topic clusters.",
      localizationTitle: "Research tools should feel local to the work.",
      localizationIntro:
        "The new product already carries English and Chinese product surfaces. The homepage supports bilingual research habits across the ecosystem.",
      privacyTitle: "Private by default, explicit when AI is involved.",
      privacyIntro:
        "The ecosystem avoids account-first workflows. How Did I Get Here? stores its working data locally, skips sensitive categories, and uses AI grouping only after authorization.",
      finalTitle: "Recover the browser context you meant to keep.",
      finalCopy:
        "Explore the tools now. Memory Trails has no paid content, no subscription, and no account requirement in the current plan.",
      finalSecondaryCta: "Get Where Was I",
      footer:
        "Free browser memory tools for reading continuity, navigation recall, and recoverable research paths.",
      workflow: [
        {
          title: "Capture the trail",
          body: "The extension records normal HTTP and HTTPS pages, then keeps the page nodes and source relationships in local browser storage.",
        },
        {
          title: "Group the research",
          body: "Local rules can create topics without a backend. Authorized AI grouping can refresh topics when the user chooses to enable it.",
        },
        {
          title: "Return to the work",
          body: "The side panel shows topic cards, relationship clues, core pages, and to-read pages so a research session can be reopened.",
        },
      ],
      productPair: [
        {
          name: whereWasI.name,
          label: "Resume where you stopped",
          body: whereWasI.description,
          href: chromeExtensionHref,
          logo: {
            src: "/brand/logo.png",
            alt: "Where Was I product mark",
            width: 96,
            height: 96,
          },
        },
        {
          name: howDidIGetHere.name,
          label: "Recover how you arrived",
          body: howDidIGetHere.description,
          href: howDidIGetHere.href,
          logo: {
            src: howDidIGetHere.assets.logo.src,
            alt: howDidIGetHere.assets.logo.alt,
            width: 96,
            height: 96,
          },
        },
      ],
    },
    products: {
      howDidIGetHere: {
        title: "How Did I Get Here? - Memory Trails",
        description: howDidIGetHere.description,
        longDescription: howDidIGetHere.longDescription,
        intro:
          "It is designed for the moment when a useful page is open, but the chain of clicks, searches, and references that made it useful has faded.",
        statusHeading: "Status",
        statusCopy:
          "This product is a local MVP. The current Memory Trails plan has no paid content, no subscription, and no account requirement.",
        featuresHeading: "What it does",
        privacyHeading: "Privacy stance",
        features: [...howDidIGetHere.features],
        privacyNotes: [...howDidIGetHere.privacyNotes],
      },
    },
    privacy: {
      title: "Privacy - Where Was I?",
      description: "Privacy notes for the Where Was I? Chrome extension.",
      heading: "Privacy notes",
      intro:
        "Where Was I? is designed to remember reading position without turning your reading into an account, feed, or cloud profile.",
      currentHeading: "Current v0.1 behavior",
      storedHeading: "What is stored",
      storedCopy:
        "The extension stores page URL, normalized URL, title, domain, a lightweight heading outline, scroll position, reading percentage, and update time. This helps the popup show recent pages and lets the prompt scroll back to the saved place.",
      excludedHeading: "What is not included",
      excludedCopy:
        "The v0.1 extension does not add login, cloud sync, AI summaries, notes, highlights, PDF tracking, or video tracking. Any future sync or account behavior should be documented before it is enabled.",
    },
    install: {
      title: "Chrome extension - Where Was I?",
      description: "Get the Where Was I? Chrome extension.",
      heading: "Get the Chrome extension",
      intro:
        "Where Was I? is currently planned as a free Chrome extension. After the Chrome Web Store listing is live, this page should send readers directly to the official extension page.",
      cta: "Open Chrome extension page",
      testingHeading: "Temporary local testing",
      testingCopy: "These steps are only for development builds before the Chrome Web Store listing is available.",
      steps: [
        <>Run <code>npm run build:extension</code> from the monorepo root.</>,
        <>Open <code>{installPaths.chromeExtensionsUrl}</code> in Chrome.</>,
        <>Enable Developer Mode.</>,
        <>Choose Load unpacked.</>,
        <>Select <code>{installPaths.extensionBuildDirectory}</code>.</>,
        <>Pin {whereWasI.shortName} from the Chrome extensions menu.</>,
      ],
    },
    changelog: {
      title: "Changelog - Where Was I?",
      description: "Release notes for the Where Was I? Chrome extension.",
      heading: "Changelog",
      releases: [
        {
          version: "v0.1.0",
          notes: [
            "Saved latest reading position for eligible webpages.",
            "Added a popup with recent reading records.",
            "Added a top fixed Continue Prompt with Continue and Ignore actions.",
            "Kept data local in Chrome storage for the MVP.",
          ],
        },
      ],
    },
  },
  "zh-CN": {
    localeName: "简体中文",
    languageToggle: "English",
    languageToggleLabel: "切换语言",
    ecosystem: {
      name: "Memory Trails",
      tagline: "为阅读、研究和上下文路径准备的浏览器记忆工具。",
      description: "Memory Trails 是一组轻量的浏览器记忆工具，用来延续阅读、找回路径和恢复研究上下文。",
    },
    nav: {
      primary: "主导航",
      featured: "主打产品",
      products: "产品",
      whereWasI: "Where Was I",
      privacy: "隐私",
    },
    home: {
      metadataTitle: "Memory Trails - 浏览器记忆工具",
      metadataDescription: "Memory Trails 帮你找回阅读位置、研究路径和有价值的浏览器上下文。",
      eyebrow: "免费的浏览器记忆工具",
      heroCopy:
        "Memory Trails 帮你找回浏览器常常遗忘的内容：读到哪里、怎么来到某个页面，以及哪些研究线索值得重新打开。",
      primaryCta: "了解 How Did I Get Here?",
      secondaryCta: "查看全部工具",
      heroPreviewLabel: "How Did I Get Here 产品预览",
      featuredLink: "阅读产品说明",
      productsTitle: "两个小工具，一套记忆系统。",
      productsIntro: "Memory Trails 的产品刻意保持克制。一个帮你续读页面，另一个帮你找回路径。",
      productsLabel: "Memory Trails 产品",
      workflowTitle: "从散乱标签页，到可恢复的研究路径。",
      workflowIntro: "How Did I Get Here? 围绕真实浏览的形状构建：来源、分支、未读页面和主题簇。",
      localizationTitle: "研究工具应该贴近你的工作语言。",
      localizationIntro: "新产品已经提供英文和中文产品界面。这个官网也支持双语研究习惯。",
      privacyTitle: "默认本地私有，涉及 AI 时明确授权。",
      privacyIntro:
        "这套生态避免账号优先的工作流。How Did I Get Here? 将工作数据保存在本地，默认跳过敏感类别，只有授权后才使用 AI 分组。",
      finalTitle: "找回你原本想保留的浏览器上下文。",
      finalCopy: "现在就看看这些工具。当前计划没有付费内容、没有订阅，也不要求账号。",
      finalSecondaryCta: "获取 Where Was I",
      footer: "免费的浏览器记忆工具，用于延续阅读、回忆导航路径和恢复研究上下文。",
      workflow: [
        {
          title: "捕捉路径",
          body: "扩展会记录普通 HTTP 和 HTTPS 页面，并把页面节点与来源关系保存在浏览器本地存储中。",
        },
        {
          title: "整理研究主题",
          body: "本地规则可以在没有后端的情况下创建主题。用户授权后，也可以用 AI 分组刷新主题。",
        },
        {
          title: "回到工作现场",
          body: "侧边栏展示主题卡片、关系线索、核心页面和待读页面，让一次研究会话可以重新打开。",
        },
      ],
      productPair: [
        {
          name: whereWasI.name,
          label: "从停下的位置继续",
          body: "一个轻量 Chrome 扩展，记住普通网页的最新阅读位置，方便稍后回到那里。",
          href: chromeExtensionHref,
          logo: {
            src: "/brand/logo.png",
            alt: "Where Was I 产品标识",
            width: 96,
            height: 96,
          },
        },
        {
          name: howDidIGetHere.name,
          label: "找回你如何来到这里",
          body: "一个 Chrome 扩展，在浏览器中记录研究路径，并把普通页面访问整理成稍后可重开的主题。",
          href: howDidIGetHere.href,
          logo: {
            src: howDidIGetHere.assets.logo.src,
            alt: "How Did I Get Here 产品标识",
            width: 96,
            height: 96,
          },
        },
      ],
    },
    products: {
      howDidIGetHere: {
        title: "How Did I Get Here? - Memory Trails",
        description: "一个 Chrome 扩展，在浏览器中记录研究路径，并把页面访问整理成可恢复的研究主题。",
        longDescription: "How Did I Get Here? 会在普通网页研究发生时记录路径，记住页面关系，并帮助你找回让某个主题变得有用的页面链条。",
        intro: "它为这样的时刻而设计：有用的页面还开着，但让它变得有用的点击、搜索和引用链条已经模糊。",
        statusHeading: "状态",
        statusCopy: "这个产品目前是本地 MVP。当前 Memory Trails 计划没有付费内容、没有订阅，也不要求账号。",
        featuresHeading: "它能做什么",
        privacyHeading: "隐私立场",
        features: [
          "记录普通 HTTP 和 HTTPS 页面访问。",
          "使用打开来源标签页和 referrer 推断来源关系。",
          "通过本地规则或授权后的 AI 将页面节点整理为研究主题。",
          "在侧边栏展示主题卡片、主题树、页面详情和关系线索。",
          "通过 Continue research 重新打开核心页面和待读页面。",
        ],
        privacyNotes: [
          "将页面节点、边、主题、设置、黑名单和 AI 授权保存在 chrome.storage.local。",
          "默认跳过敏感网站类别。",
          "支持自定义域名黑名单。",
          "只有在用户授权后才使用 AI 分组。",
        ],
      },
    },
    privacy: {
      title: "隐私 - Where Was I?",
      description: "Where Was I? Chrome 扩展的隐私说明。",
      heading: "隐私说明",
      intro: "Where Was I? 只想记住阅读位置，而不是把你的阅读变成账号、信息流或云端画像。",
      currentHeading: "当前 v0.1 行为",
      storedHeading: "会保存什么",
      storedCopy:
        "扩展会保存页面 URL、归一化 URL、标题、域名、轻量标题大纲、滚动位置、阅读百分比和更新时间。这些数据用于在弹窗中展示最近页面，并让提示条滚回保存的位置。",
      excludedHeading: "不会包含什么",
      excludedCopy:
        "v0.1 扩展不包含登录、云同步、AI 摘要、笔记、高亮、PDF 跟踪或视频跟踪。未来如果加入同步或账号行为，应该在启用前清楚说明。",
    },
    install: {
      title: "Chrome 扩展 - Where Was I?",
      description: "获取 Where Was I? Chrome 扩展。",
      heading: "获取 Chrome 扩展",
      intro: "Where Was I? 当前作为免费 Chrome 扩展提供。Chrome Web Store 列表上线后，此页会直接指向官方扩展页面。",
      cta: "打开 Chrome 扩展页面",
      testingHeading: "临时本地测试",
      testingCopy: "以下步骤仅用于 Chrome Web Store 上线前的开发构建。",
      steps: [
        <>在 monorepo 根目录运行 <code>npm run build:extension</code>。</>,
        <>在 Chrome 中打开 <code>{installPaths.chromeExtensionsUrl}</code>。</>,
        <>启用开发者模式。</>,
        <>选择“加载已解压的扩展程序”。</>,
        <>选择 <code>{installPaths.extensionBuildDirectory}</code>。</>,
        <>从 Chrome 扩展菜单固定 {whereWasI.shortName}。</>,
      ],
    },
    changelog: {
      title: "更新日志 - Where Was I?",
      description: "Where Was I? Chrome 扩展的发布说明。",
      heading: "更新日志",
      releases: [
        {
          version: "v0.1.0",
          notes: [
            "为符合条件的网页保存最新阅读位置。",
            "新增展示最近阅读记录的弹窗。",
            "新增顶部固定 Continue Prompt，包含 Continue 和 Ignore 操作。",
            "MVP 阶段将数据保存在 Chrome 本地存储中。",
          ],
        },
      ],
    },
  },
} as const;

export function getDictionary(locale: string | undefined) {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export function getLocalizedProductPath(locale: Locale, href: string) {
  if (href.startsWith("http")) {
    return href;
  }

  return localizePath(locale, href);
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh-CN" : "en";
}

export function getLocalizedPath(locale: Locale, segments?: string[]) {
  const path = segments?.length ? `/${segments.join("/")}` : "/";
  return localizePath(locale, path);
}
