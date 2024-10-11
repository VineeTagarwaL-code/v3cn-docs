import { SITE } from "./config";
import { useConfig } from "nextra-theme-docs";

import Footer from "./components/Footer";
import Logo from "./components/Logo.svg";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <Logo />,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: `${SITE.github}/docs/tree/main`,
  project: {
    link: SITE.github,
  },
  chat: {
    link: SITE.discord,
  },
  footer: {
    text: <Footer />,
  },
  navigation: {
    prev: false,
    next: false,
  },
  feedback: {
    useLink: () => SITE.github,
  },
  head: null,
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/favicon-light.png",
          rel: "icon",
        },
      ],
      titleTemplate: "%s - OpenNext",
      description:
        frontMatter.description || "Open-source Next.js adapters",
      openGraph: {
        titleTemplate: "%s - OpenNext",
        images: [
          {
            url: frontMatter.image || "/share.png",
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: SITE.url,
      },
    };
  },
};
