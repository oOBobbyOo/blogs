import type { Nav } from '@/types'

type Navigator = Record<string, Nav[]>

const vue: Nav[] = [
  {
    name: 'Vue',
    link: 'https://cn.vuejs.org/',
    desc: '渐进式 JavaScript 框架',
    icon: 'i-logos-vue',
  },
  {
    name: 'Vue Router',
    link: 'https://next.router.vuejs.org/zh/',
    desc: '为 Vue.js 提供富有表现力、可配置的、方便的路由',
    icon: 'i-logos-vue',
  },
  {
    name: 'Pinia',
    link: 'https://pinia.vuejs.org/zh/',
    desc: '符合直觉的 Vue.js 状态管理库',
    icon: 'i-logos-pinia',
  },
  {
    name: 'VueUse',
    link: 'https://vueuse.org/',
    desc: 'Vue Composition API 的实用程序',
    icon: 'i-logos-vueuse',
  }
]

const react: Nav[] = [
  {
    name: 'React',
    link: 'https://zh-hans.react.dev/',
    desc: '用于构建 Web 和原生交互界面的库',
    icon: 'i-logos-react',
  },
  {
    name: 'React Router',
    link: 'https://reactrouter.com/en/main',
    desc: 'React 路由库',
    icon: 'i-logos-react-router',
  }
]

const navigtor: Navigator = {
  'Vue Ecosystem': vue,
  'React Ecosystem': react,
}

export default navigtor