import { metaData } from './constants.js'
import head from './head.js'
import getTags from 'vitepress-tags'

export const pages = getTags('./')

const config = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  locales: {
    '/': {
      lang: 'ru-RU',
      title: metaData.title,
      description: metaData.description,
    },
    '/en/': {
      lang: 'en-US',
      title: 'DeFUCC',
      description:
        'Development Foundation for Universalization, Cooperation and Creativity',
    },
  },
  themeConfig: {
    pages,
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'En',
        lang: 'en-US',
        title: 'DeFUCC',
        description:
          'Development Foundation for Universalization, Cooperation and Creativity',
      },
      '/': {
        label: 'Русский',
        selectText: 'Ru',
        lang: 'ru-RU',
        title: metaData.title,
        description: metaData.description,
      },
    },
    repo: '',
    logo: '/media/logo/sq-round.svg',
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-container'), 'card')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'frkt.ru'],
      })
    },
  },
}

export default config
