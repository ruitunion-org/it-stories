import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // Basic configs
  // See: https://theme-hope.vuejs.press/config/theme/basic.html

  hostname: "https://ruitunion-org.github.io",

  author: {
    name: "Профсоюз работников IT",
    url: "https://ruitunion.org",
  },

  // Layout configs
  // See: https://theme-hope.vuejs.press/config/theme/layout.html
  logo: "/logo.svg",

  navbar,
  sidebar,

  repo: "ruitunion-org/it-stories",
  docsDir: "src",

  hideSiteNameOnMobile: false,

  copyright: "© CC BY Профсоюз работников ИТ.",
  displayFooter: true,

  // Apearence
  // See: https://theme-hope.vuejs.press/config/theme/appearance.html
  iconAssets: "fontawesome-with-brands",
  darkmode: "toggle",

  // Features configs
  // See: https://theme-hope.vuejs.press/config/theme/feature.html
  blog: {
    // See: https://theme-hope.vuejs.press/config/theme/feature.html#blog-medias
    medias: {
      Telegram: "https://example.com",
      Discord: "https://example.com",
      Email: "mailto:info@example.com",
      GitHub: "https://example.com",
      Rss: "https://example.com",
    },
  },

  metaLocales: {
    editLink: "Изменить страницу на GitHub",
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    search: {
      getExtraFields: (page) => {
        return [page.frontmatter.tags];
        // return page.frontmatter.tags ?? [page.contentRendered];
      },
    },

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // Only enable features you need here
    // See: https://theme-hope.vuejs.press/guide/markdown/
    mdEnhance: {
      // align: true,
      // attrs: true,
      // codetabs: true,
      // component: true,
      // demo: true,
      figure: true,
      // imgLazyload: true,
      // imgSize: true,
      // include: true,
      // mark: true,
      // plantuml: true,
      // spoiler: true,
      /*
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em") {
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
            }
          },
        },
      ],
      */
      // sub: true,
      // sup: true,
      // tabs: true,
      // tasklist: true,
      // vPre: true,
      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
