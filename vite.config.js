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
        { dir: "designs", baseRoute: "designs" },
        { dir: "discourse", baseRoute: "discourse" },
        { dir: "frukt", baseRoute: "frukt" },
        { dir: "giftonomy", baseRoute: "giftonomy" },
        { dir: "people", baseRoute: "people" },
        { dir: "research", baseRoute: "research" },
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
        dirs: ['.vitepress'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),

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


