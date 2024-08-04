import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "ru-RU",
  title: "IT Истории",
  description: "A blog demo for vuepress-theme-hope",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
