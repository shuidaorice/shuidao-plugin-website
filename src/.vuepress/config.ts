import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "水稻插件",
  description: "deanqwq233-plugin docs",
  
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        codetabs: true,
        container: true,
      },
    },
  }),
  
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
