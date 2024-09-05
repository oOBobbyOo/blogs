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
    name: 'Vite',
    link: 'https://cn.vitejs.dev/',
    desc: '下一代的前端工具链',
    icon: 'i-logos-vitejs',
  },
  {
    name: 'Vitest',
    link: 'https://cn.vitest.dev/',
    desc: '下一代测试框架，一个原生支持 Vite 的测试框架',
    icon: 'i-logos-vitest',
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
  {
    name: 'Rolldown',
    link: 'https://rolldown.rs/',
    desc: '基于 Rust 的 JavaScript 快速打包器',
    icon: 'https://rolldown.rs/rolldown-round.svg',
  },
  {
    name: 'Element Plus',
    link: 'https://element-plus.org/zh-CN/',
    desc: '基于 Vue 3，面向设计师和开发者的组件库',
    icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
  },
  {
    name: 'Ant Design Vue',
    link: 'https://www.antdv.com/',
    desc: 'Ant Design 的 Vue 实现，用于构建企业级后台产品',
    icon: 'https://next.antdv.com/assets/logo.1ef800a8.svg',
  },
  {
    name: 'Arco Design Vue',
    link: 'https://arco.design/vue/docs/start',
    desc: '字节跳动出品的企业级设计系统',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
  },
  {
    name: 'TDesign Vue Next',
    link: 'https://tdesign.tencent.com/vue-next/overview',
    desc: 'TDesign 适配桌面端的组件库',
    icon: 'https://cdc.cdn-go.cn/tdc/latest/images/tdesign.svg',
  },
  {
    name: 'Naive UI',
    link: 'https://www.naiveui.com/zh-CN/os-theme',
    desc: '一个 Vue 3 组件库，提供了一套美观、易用、高性能的组件',
    icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
  },
  {
    name: 'DevUI',
    link: 'https://devui.design/',
    desc: '面向企业中后台产品的开源前端解决方案',
    icon: 'https://devui.design/assets/img/footer/logo.svg',
  },
  {
    name: 'Vuetify',
    link: 'https://vuetifyjs.com/zh-Hans/',
    desc: '基于 Vue.js 3 的 Material Design 组件框架',
    icon: 'https://vuetifyjs.com/favicon.ico',
  },
  {
    name: 'View UI Plus',
    link: 'https://www.iviewui.com/',
    desc: '基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案',
    icon: 'https://file.iviewui.com/view-design-logo.png',
  },
  {
    name: 'Vant',
    link: 'https://vant-ui.github.io/vant/#/zh-CN',
    desc: '轻量、可定制的移动端 Vue 组件库',
    icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  },
  {
    name: 'NutUI',
    link: 'https://nutui.jd.com/#/zh-CN',
    desc: '京东风格的轻量级移动端 Vue 组件库',
    icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
  },
  {
    name: 'Cube UI',
    link: 'https://didi.github.io/cube-ui/#/zh-CN',
    desc: '滴滴开源的基于 Vue.js 的移动端组件库',
    icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
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
    icon: 'https://docs.pmnd.rs/_next/static/media/zustand-icon.8507f6a0.png',
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
  {
    name: 'NextUI',
    link: 'https://nextui.org/',
    desc: 'NextUI 是 React 的 UI 库，可帮助您构建美观且易于访问的用户界面。在 Tailwind CSS 和 React Aria 之上创建。NextUI 的主要目标是简化开发流程，提供美观且适应性强的系统设计，以增强用户体验。',
    icon: 'https://nextui.org/favicon.ico',
  },
  {
    name: 'Antd Design',
    link: 'https://ant.design/',
    desc: 'Ant Design 是一套企业级 UI 设计语言和 React 组件库',
    icon: 'i-devicon-antdesign',
  },
  {
    name: 'Ant Design Mobile',
    link: 'https://mobile.ant.design/',
    desc: '探索移动端 Web 的极致体验',
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  },
  {
    name: 'Semi Design',
    link: 'https://semi.design/',
    desc: 'Semi Design 是一个设计系统，它定义了一套中后台设计与前端基础组件，帮助我们更容易地创造更加一致的用户体验。',
    icon: 'https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico',
  },
  {
    name: 'Arco Design React',
    link: 'https://arco.design/react',
    desc: '字节跳动出品的企业级设计系统',
    icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
  },
]

const css: Nav[] = [
  {
    name: 'UnoCSS',
    link: 'https://unocss.dev/',
    desc: 'Unocss 是一个基于原子类的即时原子化 CSS 引擎',
    icon: 'i-logos-unocss',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架',
    icon: 'i-logos-tailwindcss-icon',
  },
  {
    name: 'Windi CSS',
    link: 'https://windicss.org/',
    desc: 'Windi CSS 是下一代实用型 CSS 框架。',
    icon: 'i-logos-windi-css',
  },
  {
    name: 'Panda CSS',
    link: 'https://panda-css.com/',
    desc: 'Panda CSS是一个样式引擎，它生成样式基元，以类型安全且可读的方式编写原子 CSS 和配方。',
    icon: 'i-logos-pandacss-icon',
  },
  {
    name: 'Styled Components',
    link: 'https://styled-components.com/',
    desc: 'Styled Components 是一个用于构建可重用、可组合的样式组件的库。',
    icon: 'https://styled-components.com/favicon.png',
  },
]

const icons: Nav[] = [
  {
    name: 'Icones',
    link: 'https://icones.netlify.app/',
    desc: '具有即时搜索功能的图标资源管理器',
    icon: 'icones',
  },
  {
    name: 'Iconify',
    link: 'https://iconify.design/',
    desc: 'Iconify 是一个开源的图标库，它支持 SVG、字体和多种框架。',
    icon: 'https://iconify.design/favicon.svg',
  },
  {
    name: 'IconPark',
    link: 'https://iconpark.oceanengine.com/official',
    desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库。',
    icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
  },
  {
    name: 'Iconfont',
    link: 'https://www.iconfont.cn/',
    desc: '阿里巴巴矢量图标库',
    icon: 'https://www.iconfont.cn/favicon.ico',
  },
  {
    name: 'Animated icons',
    link: 'https://unicornicons.com/icons',
    desc: '自带动画的图标库',
    icon: 'https://unicornicons.com/logo.svg',
  },
  {
    name: 'Lucide',
    link: 'https://lucide.dev/icons/',
    desc: '美丽的＆一致的图标',
    icon: 'https://lucide.dev/logo.light.svg',
  },
  {
    name: 'Remix Icon',
    link: 'https://remixicon.com/',
    desc: '简单令人愉快的图标系统',
    icon: 'https://remixicon.com/favicon.ico',
  },
  {
    name: 'Tabler Icons',
    link: 'https://tablericons.com/',
    desc: 'Tabler Icons 是一个开源的图标库，它支持 SVG、字体和多种框架。',
    icon: 'https://tablericons.com/favicon.ico',
  },
]

const charts: Nav[] = [
  {
    name: 'Echarts',
    link: 'https://echarts.apache.org/zh/index.html',
    desc: 'ECharts 一个基于 JavaScript 的开源可视化图表库',
    icon: 'https://echarts.apache.org/zh/images/favicon.png',
  },
  {
    name: 'Antv',
    link: 'https://antv.vision/zh',
    desc: 'AntV 是一个数据可视化解决方案，它包含多个产品，例如 AntV G2、AntV G6、AntV L7、AntV X6 等。',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
  },
  {
    name: 'VisActor',
    link: 'https://www.visactor.io/vchart',
    desc: '开箱即用的多端图表库，生动灵活的数据故事讲述者。',
    icon: 'visactor',
  },
  {
    name: 'D3.js',
    link: 'https://d3js.org/',
    desc: 'D3.js 一个基于 web 标准的 JavaScript 可视化库',
    icon: 'https://d3js.org/logo.svg',
  },
]

const ai: Nav[] = [
  {
    name: 'ChatGPT',
    link: 'https://chat.openai.com/chat',
    desc: 'ChatGPT，全称聊天生成预训练转换器，是OpenAI开发的人工智能聊天机器人程序，该程序使用基于GPT-3.5、GPT-4、GPT-4o架构的大型语言模型并以强化学习训练。',
    icon: 'chatgpt',
  },
  {
    name: '问心一言',
    link: 'https://yiyan.baidu.com/',
    desc: '文心一言是由百度公司开发的聊天机器人，能够与人交互、回答问题及协作创作。',
    icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
  },
  {
    name: '通义千问',
    link: 'https://tongyi.aliyun.com/qianwen/',
    desc: '通义千问是由阿里巴巴集团旗下的云端运算服务的科技公司阿里云开发的聊天机器人，能够与人交互、回答问题及协作创作。',
    icon: 'https://acd-assets.alicdn.com/acd_work/tongyi-portal/assets/logo.svg',
  },
  {
    name: '豆包AI',
    link: 'https://www.doubao.com/chat/',
    desc: '豆包是字节跳动公司基于云雀模型开发的AI 工具，提供聊天机器人、写作助手以及英语学习助手等功能。',
    icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/static/image/OnboardingAvatar.bb1504ee.webp',
  },
]

const navigator: Navigator = {
  'Vue Ecosystem': vue,
  'React Ecosystem': react,
  'CSS': css,
  'Icons': icons,
  'Charts': charts,
  'AI': ai,
}

export default navigator
