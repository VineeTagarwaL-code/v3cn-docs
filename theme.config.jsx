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

  footer: {
    text: <Footer />,
  },
  navigation: {
    prev: true,
    next: true,
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
      titleTemplate: "%s - V3cn",
      description:
        frontMatter.description || "V3cn a modern portfolio component ui library",
      openGraph: {
        titleTemplate: "%s - V3cn",
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