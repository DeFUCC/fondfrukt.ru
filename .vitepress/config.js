import { defineConfig } from "vitepress"

import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'

import generateMeta from 'vitepress-pages/head'

const links = []

export const metaData = {
  title: "Фонд ФРУКТ",
  description: "Фонд Развития Универсализации, Кооперации и Творчества",
  site: "fondfrukt.ru",
  url: "https://fondfrukt.ru/",
  repo: "https://github.com/DeFUCC/fondfrukt.ru",
  locale: "ru",
  icon: "media/logo/sq-round.svg",
  logo: "media/logo/logo_stencil.svg",
  image: "media/og.png",
  color: '#cccccc',
  mediaFolder: 'media_files',
  author: "davay42",
  tags: "фонд, развитие, универсализация, кооперация, творчество, дарономика, социокультурные проекты",
  umamiId: "2565bd09-cf58-494f-a5bf-8ed4c9e57346",
  umamiScript: "https://stat.defucc.me/script.js"
};

export default defineConfig({
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  outDir: "_dist",
  themeConfig: {
    repo: metaData.repo,
    logo: metaData.logo,
    color: metaData.color
  },
  transformHead: generateMeta(metaData),
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath?.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData?.lastUpdated,
        changefreq: 'weekly'
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: metaData.url })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
});
