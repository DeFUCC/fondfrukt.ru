import { defineConfig } from "vitepress"
import mdLinks from "markdown-it-external-links"
import mdContainer from "markdown-it-container"

import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

const links = []

export const metaData = {
  title: "Фонд ФРУКТ",
  description: "Фонд Развития Универсализации, Кооперации и Творчества",
  site: "fondfrukt.ru",
  url: "https://fondfrukt.ru/",
  locale: "ru-RU",
  icon: "/media/logo/sq-round.svg",
  logo: "/media/logo/logo_stencil.svg",
  image: "media/og.png",
  author: "davay42",
  tags: "фонд, развитие, универсализация, кооперация, творчество, дарономика, социокультурные проекты",
};

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
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
  head: [
    ["meta", { name: "author", content: metaData?.author }],
    ["meta", { name: "keywords", content: metaData?.tags }],
    ["link", { rel: "icon", type: "image/svg+xml", href: metaData.icon }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "white-translucent", },],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    ["meta", { name: "theme-color", content: "#F26724" }],

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: metaData?.site }],
    ["meta", { name: "twitter:title", value: metaData?.title }],
    ["meta", { name: "twitter:description", value: metaData.description }],
    //@ts-ignore
    ["meta", { name: "twitter:image", content: metaData?.image }],

    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: metaData.locale }],
    ["meta", { property: "og:site", content: metaData.site }],
    ["meta", { property: "og:site_name", content: metaData.title }],
    ["meta", { property: "og:title", content: metaData.title }],
    //@ts-ignore
    ["meta", { property: "og:image", content: metaData?.image }],
    ["meta", { property: "og:description", content: metaData.description }],
  ],
  transformHead(ctx) {
    const url = ctx.pageData.relativePath.split('index.md')[0]
    let image = metaData?.image
    if (ctx.pageData.frontmatter?.cover) {
      image = 'media_files/cover/' + url.split('/').join('-') + ctx.pageData.frontmatter?.cover
    }
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": "5d35de7c-0ec7-48ea-b8cd-5934c4486a6d", src: "https://stats.defucc.me/umami.js" }] : null,
      ['meta', { property: 'og:title', content: `${ctx.pageData.title} | ${metaData.title}` }],
      ['meta', { property: 'og:description', content: ctx.pageData.description }],
      ['meta', { property: 'og:url', content: metaData.url + url }],
      ['meta', { property: 'og:image', content: metaData.url + image }],
      ['meta', { name: 'twitter:title', content: `${ctx.pageData.title} | ${metaData.title}` }],
      ['meta', { name: 'twitter:description', content: ctx.pageData.description }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: `@${metaData.author}` }],
      ['meta', { name: 'twitter:creator', content: `@${metaData.author}` }],
      ['meta', { name: 'twitter:image', content: metaData.url + image }],
    ]
  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath?.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData?.lastUpdated,
        changefreq: 'weekly'
      })
  },
  buildEnd: async ({ outDir }) => {
    //SECTION - Sitemap
    const sitemap = new SitemapStream({ hostname: metaData.url })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
});
