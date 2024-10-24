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
  head: (
    <script defer src="https://unmani-vercel.vercel.app/script.js" data-website-id="5aa79a6c-9caf-4649-a641-512c273fbe98"></script>
  ),
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/V-removebg-preview.png",
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
            url: frontMatter.image || "/V.png",
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
