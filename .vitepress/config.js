import { metaData } from "./config/constants.js";
import head from "./config/head.js";
import getTags from "vitepress-tags";

import mdLinks from "markdown-it-external-links";
import mdClass from "markdown-it-classy";
import mdContainer from "markdown-it-container";

export const pages = getTags("./");

export default {
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
      md.use(mdClass);
      md.use(mdContainer, "card");
      md.use(mdLinks, {
        internalDomains: ["localhost", "frkt.ru"],
      });
    },
  },
};
