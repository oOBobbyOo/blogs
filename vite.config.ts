import { resolve } from 'node:path'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
import Markdown from 'unplugin-vue-markdown/vite'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import MarkdownItShiki from '@shikijs/markdown-it'
import MarkdownItMagicLink from 'markdown-it-magic-link'
import { rendererRich, transformerTwoslash } from '@shikijs/twoslash'
import Inspect from 'vite-plugin-inspect'
import { slugify } from './scripts/slugify'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blogs/',
  plugins: [
    UnoCSS(),

    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts',
      logs: false,
      extendRoute(route) {
        const path = route.components.get('default')
        if (!path)
          return

        if (!path.includes('projects.md') && path.endsWith('.md')) {
          const { data } = matter(fs.readFileSync(path, 'utf-8'))
          route.addToMeta({
            frontmatter: data,
          })
        }
      },
    }),

    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    AutoImport({
      imports: ['vue', '@vueuse/core', VueRouterAutoImports, unheadVueComposablesImports],
      dirs: ['src/composables'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),

    Markdown({
      wrapperComponent: 'WrapperPost',
      wrapperClasses: (id, code) => code.includes('@layout-full-width')
        ? ''
        : 'prose m-auto slide-enter-content',
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      async markdownItSetup(md) {
        md.use(
          await MarkdownItShiki({
            defaultColor: false,
            themes: {
              light: 'vitesse-light',
              dark: 'vitesse-dark',
            },
            cssVariablePrefix: '--s-',
            transformers: [
              transformerTwoslash({
                explicitTrigger: true,
                renderer: rendererRich(),
              }),
            ],
          }),
        )

        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(MarkdownItMagicLink, {
          linksMap: {
            'React': 'https://github.com/facebook/react',
            'React Router': 'https://github.com/remix-run/react-router',
            'Next.js': 'https://github.com/vercel/next.js',
            'Zustand': 'https://github.com/pmndrs/zustand',
            'Recoil': 'https://github.com/facebookexperimental/Recoil',
            'Redux Toolkit': 'https://github.com/reduxjs/redux-toolkit',

            'Vue': 'https://github.com/vuejs/core',
            'Vue Router': 'https://github.com/vuejs/router',
            'Nuxt': 'https://github.com/nuxt/nuxt',
            'Pinia': 'https://github.com/vuejs/pinia',
            'VueUse': 'https://github.com/vueuse/vueuse',
            'Vitest': 'https://github.com/vitest-dev/vitest',

            'Vite': 'https://github.com/vitejs/vite',
            'Webpack': 'https://github.com/webpack/webpack',
            'Esbuild': 'https://github.com/evanw/esbuild',
            'Rollup': 'https://github.com/rollup/rollup',

            'Javascript': 'https://github.com/tc39',
            'TypeScript': 'https://github.com/microsoft/TypeScript',

            'UnoCSS': 'https://github.com/unocss/unocss',
            'TailwindCSS': 'https://github.com/tailwindlabs/tailwindcss',
            'Styled Components': 'https://github.com/styled-components/styled-components',

            'Sass': 'https://github.com/sass/sass',
            'Less': 'https://github.com/less/less.js',
            'Stylus': 'https://github.com/stylus/stylus',
            'CSS Modules': 'https://github.com/css-modules/css-modules',

            'Pnpm': 'https://github.com/pnpm/pnpm',
            'Git': 'https://github.com/git/git',
            'Eslint': 'https://github.com/eslint/eslint',
            'Prettier': 'https://github.com/prettier/prettier',
            'Husky': 'https://github.com/typicode/husky',
            'Lint-staged': 'https://github.com/okonet/lint-staged',
            'Commitlint': 'https://github.com/conventional-changelog/commitlint',

          },
          imageOverrides: [
            ['https://github.com/facebook/react', 'https://react.dev/favicon-16x16.png'],
            ['https://github.com/remix-run/react-router', 'https://reactrouter.com/favicon-light.png'],
            ['https://github.com/facebookexperimental/Recoil', 'https://recoiljs.org/img/favicon.png'],
            ['https://github.com/vuejs/core', 'https://vuejs.org/logo.svg'],
            ['https://github.com/nuxt/nuxt', 'https://nuxt.com/assets/design-kit/icon-green.svg'],
            ['https://github.com/vuejs/pinia', 'https://pinia.vuejs.org/logo.svg'],
            ['https://github.com/vitejs/vite', 'https://vitejs.dev/logo.svg'],
          ],
        })
      },
    }),

    Inspect(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
