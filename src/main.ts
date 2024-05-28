import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
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

const app = createApp(App)

app.use(router)

app.mount('#app')
