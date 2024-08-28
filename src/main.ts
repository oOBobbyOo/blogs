import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import { setupRouterScroller } from 'vue-router-better-scroller'
import NProgress from 'nprogress'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@/styles/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  ({ router, app, isClient }) => {
    app.use(createPinia())

    if (isClient) {
      const html = document.querySelector('html')!
      setupRouterScroller(router, {
        selectors: {
          html(ctx) {
            // only do the sliding transition when the scroll position is not 0
            // Disable sliding transition on Dev Mode
            if (ctx.savedPosition?.top || import.meta.hot)
              html.classList.add('no-sliding')
            else
              html.classList.remove('no-sliding')
            return true
          },
        },
        behavior: 'auto',
      })

      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
)
