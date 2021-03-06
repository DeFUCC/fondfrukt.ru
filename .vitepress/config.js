import { defineConfig } from "vitepress";
import { metaData } from "./constants.js";
import head from "./head.js";

import mdLinks from "markdown-it-external-links";
import mdContainer from "markdown-it-container";

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  outDir: "_dist",
  themeConfig: {
    repo: "",
    logo: metaData.logo,
    color: "#ccc"
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 300000,
    },
  },
  markdown: {
    config: (md) => {
      // md.use(mdClass);
      md.use(mdContainer, "card");
      md.use(mdLinks, {
        internalDomains: ["localhost", "frkt.ru", "fondfrukt.ru"],
      });
    },
  },
});
