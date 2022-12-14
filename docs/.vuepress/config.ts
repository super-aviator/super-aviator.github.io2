import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
//import { webpackBundler } from "@vuepress/bundler-webpack";
//import { defineUserConfig } from "@vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { feedPlugin } from "vuepress-plugin-feed2";
import { path } from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
  //网站语言，默认为中文
  lang: "zh-CN",
  //网站标题
  title: "aviator",
  //网站描述
  description: "孤独飞行员",

  //网站路径，默认为 /，如果非主域名，需改为
  base: "/",

  theme,
  //是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  //修改页面模板，@vuepress-theme-hope/templates/index.build.html
  templateBuild: path.resolve(__dirname, "templateBuild.html"),

  plugins: [
    //docsearchPlugin({
      // 你的选项
    //}),
    searchPlugin({
      // 你的选项
    }),
    //谷歌分析 ID
    googleAnalyticsPlugin({

    }),
    //rss 订阅描述
    feedPlugin({
      hostname: "https://newzone.top",
      rss: false,
      count: 10,
    }),
  ],
});
