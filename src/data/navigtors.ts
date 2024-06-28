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
    name: 'Nuxt',
    link: 'https://nuxt.com/',
    desc: 'Nuxt是一个 开源框架 ，使得Web开发变得直观且强大。可以自信地创建高性能和生产级别的全栈Web应用和网站。',
    icon: 'i-logos-nuxt-icon',
  },
  {
    name: 'VueUse',
    link: 'https://vueuse.org/',
    desc: 'Vue Composition API 的实用程序',
    icon: 'i-logos-vueuse',
  },
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
  },
  {
    name: 'Next.js',
    link: 'https://nextjs.org/',
    desc: 'React 服务端渲染应用框架',
    icon: 'i-logos-nextjs-icon',
  },
  {
    name: 'Remix',
    link: 'https://remix.run/',
    desc: 'Remix 是一个基于 React 的框架，用于创建服务器渲染的应用程序。',
    icon: 'i-simple-icons-remix',
  },
  {
    name: 'React Query',
    link: 'https://tanstack.com/query/v4',
    desc: 'React 应用的轻量级数据查询库',
    icon: 'i-logos-react-query-icon',
  },
  {
    name: 'React Hook Form',
    link: 'https://react-hook-form.com/',
    desc: 'React 应用的表单状态管理库',
    icon: 'https://react-hook-form.com/images/logo/react-hook-form-logo-only.png',
  },
  {
    name: 'ahooks',
    link: 'https://ahooks.js.org/',
    desc: '一个高质量和可靠的React Hooks库',
    icon: 'https://ahooks.js.org/simple-logo.svg',
  },
  {
    name: 'Zustand',
    link: 'https://zustand-demo.pmnd.rs/',
    desc: 'Zustand 是一个用于构建快速、可扩展的状态管理的 React Hook',
    icon: 'https://docs.pmnd.rs/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzustand-icon.8507f6a0.png&w=750&q=75',
  },
  {
    name: 'Jotai',
    link: 'https://jotai.org/',
    desc: 'React 原始而灵活的状态管理',
    icon: 'https://cdn.candycode.com/jotai/jotai-mascot.png',
  },
  {
    name: 'Recoil',
    link: 'https://recoiljs.org/',
    desc: 'React 应用的状态管理库',
    icon: 'i-simple-icons-recoil',
  },
  {
    name: 'Mobx',
    link: 'https://mobx.js.org/',
    desc: 'MobX 是一个简单、可扩展的状态管理库',
    icon: 'i-logos-mobx',
  },
  {
    name: 'Redux Toolkit',
    link: 'https://redux-toolkit.js.org/',
    desc: 'Redux 应用的实用工具库',
    icon: 'i-logos-redux',
  },
  {
    name: 'React sping',
    link: 'https://react-spring.io/',
    desc: 'React Spring 是一个用于构建交互式、数据驱动和动画 UI 组件的库',
    icon: 'i-logos-react-spring',
  },
  {
    name: 'Framer Motion',
    link: 'https://motionone.org/',
    desc: 'Framer Motion 是为React 提供的动作库',
    icon: 'https://www.framer.com/images/favicons/iOS/120.png',
  },
  {
    name: 'React Transition Group',
    link: 'https://reactcommunity.org/react-transition-group/',
    desc: 'React 动画库',
    icon: 'i-logos-react',
  },
]

const navigtor: Navigator = {
  'Vue Ecosystem': vue,
  'React Ecosystem': react,
}

export default navigtor
