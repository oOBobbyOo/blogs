import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createHead } from '@unhead/vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@/styles/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    return routes
  },
})


async function bootstrap() {
  const app = createApp(App)

  const head = createHead()

  app.use(head)

  app.use(router)

  app.mount('#app')
}

bootstrap()
