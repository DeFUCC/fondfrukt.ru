import { metaData } from "./constants.js";
import head from "./head.js";
import getTags from "vitepress-tags";

export const pages = getTags("./");

const config = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  themeConfig: {
    pages,
    repo: "",
    logo: metaData.logo,
  },
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-classy"));
      md.use(require("markdown-it-container"), "card");
      md.use(require("markdown-it-external-links"), {
        internalDomains: ["localhost", "frkt.ru"],
      });
    },
  },
};

export default config;
