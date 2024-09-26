import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "ru-RU",
  title: "IT Истории",
  description:
    "Как работается в айтишке — честно, без прикрас и названиями работодателей",

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
    "@theme-hope/modules/blog/components/BlogWrapper": path.resolve(
      __dirname,
      "./components/BlogWrapper.vue",
    ),
  },
});
