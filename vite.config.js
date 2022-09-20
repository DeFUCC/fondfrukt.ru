import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import { ViteAliases } from 'vite-aliases'
import Pages from "vite-plugin-pages";
import { extendRoutes } from "vitepress-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'

// import transformerDirective from '@unocss/transformer-directives'
// import Unocss from 'unocss/vite'
// import { presetUno, presetWind, presetIcons } from 'unocss'
// import extractorPug from '@unocss/extractor-pug'
// import { extractorSplit } from '@unocss/core'
// import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  base: './',
  server: {
    port: 3442,
  },
  plugins: [
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        'vue',
      ],
    }),
    Pages({
      dirs: [
        { dir: ".", baseRoute: "." },
      ],
      exclude: ['**/node_modules/**/*.*', '**/!(index).md'],
      extensions: ['md'],
      ...extendRoutes(),
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname: 'https://fondfrukt.ru/' })),
    }),
    ViteAliases({
      dir: '.vitepress',
      deep: false,
      adjustDuplicates: true,
    }),
    Components({
      dirs: [
        '.vitepress/theme/components',
        '.vitepress/comps',
      ],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress', './'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts', 'md'],
      },
    }),
    // Unocss({
    //   transformers: [
    //     transformerDirective(),
    //     transformerVariantGroup(),
    //   ],
    //   presets: [
    //     presetIcons(),
    //     presetUno(),
    //     presetWind()
    //   ],
    //   extractors: [
    //     extractorPug(),
    //     extractorSplit,
    //   ],
    // })
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core'
    ],
  },
  ssr: {
    noExternal: ["ol"],
  },
})


