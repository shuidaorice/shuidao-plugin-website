import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "功能列表",
      icon: "laptop-code",
      prefix: "demo/",
      children: "structure",
    },
    {
      text: "部署文档",
      icon: "book",
      prefix: "deploy/",
      children: "structure",
    },
  ],
});
