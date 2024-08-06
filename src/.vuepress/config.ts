import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/it-stories/",

  lang: "ru-RU",
  title: "IT Истории",
  description: "A blog demo for vuepress-theme-hope",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  //
  alias: {
    "@theme-hope/modules/blog/components/BlogHomePage": path.resolve(
      __dirname,
      "./components/BlogHomePage.vue",
    ),
    "@theme-hope/modules/blog/layouts/BlogCategory": path.resolve(
      __dirname,
      "./components/BlogCategory.vue",
    ),
  },
});
