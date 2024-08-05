import { ViteSSG } from 'vite-ssg'
import { setupRouterScroller } from 'vue-router-better-scroller'
import NProgress from 'nprogress'
import { UAParser } from 'ua-parser-js'
import { computed, createVNode, defineComponent, mergeProps, resolveComponent, unref, useSSRContext, withCtx } from 'vue'
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer'
import { useMouse, useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import 'unplugin-vue-router/runtime'
import 'unplugin-vue-router/data-loaders/basic'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('./assets/index-D_Jt7Dnf.js'),
    /* no children */
    meta: {
      frontmatter: {
        title: 'Henry Bobby',
        description: 'Henry Bobby\'s Profile',
        art: 'random',
      },
    },
  },
  {
    path: '/:404(.*)',
    name: '/[...404]',
    component: () => import('./assets/_...404_-B9XxCgDR.js'),
    /* no children */
    meta: {
      frontmatter: {},
    },
  },
  {
    path: '/navigator',
    name: '/navigator',
    component: () => import('./assets/navigator-CozwjOJa.js'),
    /* no children */
    meta: {
      frontmatter: {
        title: 'Navigator - Henry Bobby',
        display: 'Navigator',
        description: 'Front-end navigation.',
        wrapperClass: 'text-center',
        art: 'dots',
      },
    },
  },
  {
    path: '/posts',
    /* internal name: '/posts' */
    /* no component */
    children: [
      {
        path: '',
        name: '/posts/',
        component: () => import('./assets/index-BkJMuQph.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: 'Blog - Henry Bobby',
            display: '',
            art: 'plum',
          },
        },
      },
      {
        path: 'browser-cache',
        name: '/posts/browser-cache',
        component: () => import('./assets/browser-cache-MtdowBdE.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: '强缓存和协商缓存',
            description: '详解浏览器中的强缓存和协商缓存',
            date: '2022-07-05T03:44:00.000Z',
            lang: 'zh',
            duration: '10min',
            art: 'particles',
          },
        },
      },
      {
        path: 'git-commands',
        name: '/posts/git-commands',
        component: () => import('./assets/git-commands-DtBfjwQa.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: 'Git Commands',
            date: '2023-06-25T05:00:00.000Z',
            lang: 'zh',
            duration: '15min',
            art: 'particles',
          },
        },
      },
      {
        path: 'set-map',
        name: '/posts/set-map',
        component: () => import('./assets/set-map-DOc7c_N7.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: 'Set、Map、WeakSet、WeakMap',
            description: 'Set、Map、WeakSet 和 WeakMap 的区别',
            date: '2023-07-09T03:55:00.000Z',
            lang: 'zh',
            duration: '6min',
            art: 'particles',
          },
        },
      },
      {
        path: 'vue-react-perf',
        name: '/posts/vue-react-perf',
        component: () => import('./assets/vue-react-perf-2jAOaV6B.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: 'Vue 和 React 如何性能优化',
            date: '2023-07-10T07:50:00.000Z',
            lang: 'zh',
            duration: '15min',
            art: 'particles',
          },
        },
      },
      {
        path: 'web-storage',
        name: '/posts/web-storage',
        component: () => import('./assets/web-storage-Ca6Y1XFd.js'),
        /* no children */
        meta: {
          frontmatter: {
            title: 'Web Storage',
            description: 'Cookies、localStorage、sessionStorage 本地存储的区别',
            date: '2022-07-03T02:48:00.000Z',
            lang: 'zh',
            duration: '5min',
            art: 'particles',
          },
        },
      },
    ],
  },
  {
    path: '/projects',
    name: '/projects',
    component: () => import('./assets/projects-CTVzidv3.js'),
    /* no children */
  },
]
const ua = navigator == null ? void 0 : navigator.userAgent
const parser = new UAParser(ua)
parser.getBrowser()
parser.getCPU()
parser.getEngine()
const uaDevice = parser.getDevice()
parser.getOS()
parser.getResult()
const isMobile = uaDevice.type === 'mobile'
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: 'CustomPointer',
  __ssrInlineRender: true,
  setup(__props) {
    const { x, y } = useMouse({ type: 'client' })
    const pointStyles = computed(() => ({
      transform: `translate3d(calc(${x.value}px - 50%), calc(${y.value}px - 50%), 0)`,
    }))
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`)
      if (!('isMobile' in _ctx ? _ctx.isMobile : unref(isMobile))) {
        _push(`<div class="cursor" style="${ssrRenderStyle(unref(pointStyles))}" data-v-79e8dbb5></div>`)
      }
      else {
        _push(`<!---->`)
      }
      if (!('isMobile' in _ctx ? _ctx.isMobile : unref(isMobile))) {
        _push(`<div class="pointer" style="${ssrRenderStyle(unref(pointStyles))}" data-v-79e8dbb5></div>`)
      }
      else {
        _push(`<!---->`)
      }
      _push(`<!--]-->`)
    }
  },
})
function _export_sfc(sfc, props) {
  const target = sfc.__vccOpts || sfc
  for (const [key, val] of props) {
    target[key] = val
  }
  return target
}
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/components/CustomPointer.vue')
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [['__scopeId', 'data-v-79e8dbb5']])
const _sfc_main$4 = {}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: 'slide-enter m-auto mb-6 mt-10 flex prose animate-delay-1200!' }, _attrs))}><span class="text-sm op50"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="${ssrRenderStyle({ color: 'inherit' })}">CC BY-NC-SA 4.0</a> 2022-PRESENT © Henry Bobby</span><div class="flex-auto"></div></div>`)
}
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/components/Footer.vue')
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['ssrRender', _sfc_ssrRender$2]])
const _sfc_main$3 = {}
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: 'select-none',
    title: 'Toggle Dark Mode',
  }, _attrs))}><div i-ri-sun-line dark:i-ri-moon-line></div></a>`)
}
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/components/DarkMode.vue')
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['ssrRender', _sfc_ssrRender$1]])
const _sfc_main$2 = {}
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 100 100',
  }, _attrs))} data-v-b32a207b><title data-v-b32a207b>Henry Bobby</title><g data-v-b32a207b><path class="path1" d="M16.875 68.8v-.25q.55-.45 1.125-.875t1.125-.825q1.2-.9 2.1-1.85.6-.7 1.15-1.425.55-.725 1.05-1.525.5-.8 1.075-1.475t1.225-1.325q.05-.65.6-1.575.55-.925 1.25-1.925t1.225-1.9q.525-.9.525-1.5.1-.1.175-.275.075-.175.125-.375.1-.3.4-.4 0-.5.2-.9.1-.25.125-.475.025-.225.025-.425v-.05q-.6-.25-1.2-.25-1.25 0-2.95.45-1.7.45-3.5 1.05-1.8.6-3.35 1.1-.25-.1-.3-.45-.05-.35-.05-.6 0-1 .65-1.8.2-.05.2-.15 1.75-.4 3.5-.65t3.5-.25q1.1 0 2.2-.4 1-.35 2.2-.35.4-.25.95-1.45.55-1.2 1.1-2.6.55-1.4.9-2.3.4-.95.925-2.45.525-1.5 1.025-2.875.5-1.375.7-1.875-.9-.4-.9-1.3 0-.4.425-1.175t.95-1.575q.525-.8.775-1.25-.45-.3-.5-.5-.05-.2-.1-.3-.05-.1-.65-.1h-.8q-.2.05-.425.05H34.75q-.225 0-.325-.05-1.15-.3-2.15-.375-1-.075-2.2-.075h-1.2l.1-.15-.4-.05-.05.15q-.2 0-.2.1t.2.05q.2 0 .25.05.35 0 .25.3-.2 0-.875-.125t-.825-.125q-.3.1-.3.3l-1-.05-.2-.15q-.05.05-.15.25-.05.2-.25.2-.1 0-.3-.1-.2-.1-.35-.1-.2 0-.2.15 0 .2.05.25l-.95.05q.05-.1.1-.125.05-.025.1-.075l.2-.15-.05-.05-.75.45-.15-.1.3-.1-2.7.05q-.1-.1-.2-.1t-.25.1q-.15.1-.15.2t.2.1l.2-.15q.05-.05.25-.05.05 0 .225.025t.225.075v-.15l.5.15-.75.15-.05.15h.15l.75-.15.05-.15.3.25-1.45.2-.4.35-.45-.4-1.45.4-.05.1.1.05v-.05l1.35-.25.05.15-.7.3h-.05l.35.05-3.9 1.4-.2-.05-1.1.65-.15-.1-.7.5-.7.5-.55-.05-1.25.85.15.05-.65.55.05-.25-.275.375q-.275.375-.55.775t-.375.5l.05.05.3-.45v.05q-.45.65-.45 1.35 0 .45.625 1t1.225 1.075q.6.525.6.825 0 .05-.05.05-.65 0-1.35-.45l-1.25-.75q-.95-.6-1.525-.925-.575-.325-.95-.825-.375-.5-.825-1.6.15-.05.15.25.2 0 .2-.35 0-.25-.15-.25l-.15.25v-.05l.15-.85h.15q.1 0 .2-.25.1-.3.15-.35l-.1.1q-.05.05-.1.05h-.05l.55-1.05.1.05 1.5-1.65.1.05.05-.15.05.05q.35 0 .45-.25.1 0 .2-.05h.2q.2 0 .3-.05 0-.05-.05-.05v-.4l-.05-.05q.05.05.15.05l.1.1q.1-.1.4-.25.3-.15.3-.25 0-.05-.05-.05t-.05-.05h.2q.05.05.15.05.3 0 .85-.4t.85-.4q.15 0 .05.15l.45-.2v-.1h.25l1.1-.5q-.15-.05-.25-.1l-.2-.1.45-.1v-.05l.6-.1.6-.1 1.2-.15v-.05l2.3-.5q.65-.15 1.225-.175.575-.025 1.075.025.55-.25.65-.35.85.15 1.6.15l-1.05-.2 1.6-.15.05.05 3.65-.45.2.1 1.2-.15q.25-.05.55-.05h.6q.45 0 .6.05l.05.05 2.65.05q.05 0 .05-.05h.25q.65 0 1-.05.3-.05.6-.05h.65q.65 0 1.325.15.675.15 1.075.75.1-.25.15-.5l.1-.5q1 .05 2.075.25 1.075.2 1.825.725.75.525.75 1.675 0 .4-.275 1.25t-.65 1.825q-.375.975-.725 1.775-.35.75-.825 1.725-.475.975-.9 1.75-.425.775-.725 1.075-.15.65-.675 1.8t-1.25 2.5Q36.725 42.6 36 43.9q-.725 1.3-1.175 2.25-.1.1-.1.25l.05.05q.6 0 1.1-.15.45-.15 1.05-.05v-.05q3.25-.85 6.625-.95 3.375-.1 6.675-.1.1 0 .275-.025.175-.025.375-.075.15-.05.5-.75t.725-1.625q.375-.925.65-1.625t.325-.75l1.75-3.4q.35-.7.725-1.375t.725-1.325q.35-.65.675-1.325.325-.675.625-1.375.1-.25.2-.525t.15-.575q.05-.55.35-1h.1q.5 0 1.2.2t1.275.575q.575.375.575.875 0 .75-.575 1.475-.575.725-1.275 1.425-.7.7-1.2 1.4-.8 1.15-1.475 2.375T55.625 40.2l-2.5 5.1h.05q.15 0 .05.1.15-.05.4-.05h.4q.55 0 1.675.175t2.225.425q1.1.25 1.45.55.05 0 .05.1 0 .15-.4.25-.2.05-.325.05t-.175.05q-.7-.2-1.35-.275-.65-.075-1.35-.125-.25-.05-.525-.05h-.525q-.25 0-.525-.025t-.525-.075q-.15.05-.3.075-.15.025-.3-.025-.35-.05-.6.2-.15.1-.525.975t-.75 1.875q-.375 1-.575 1.6-.2.65-.575 1.675-.375 1.025-.675 1.95-.3.925-.3 1.275h-.1q-.25.4-.6 1.55t-.575 2.325q-.225 1.175-.225 1.725 0 .5.425.825.425.325.425.925 0 .5-.575 1.225-.575.725-1.325 1.275-.75.55-1.3.55-.5 0-.75-.8t-.35-1.9q-.1-1.1-.2-2.1t-.25-1.35q-.3-.7-1.25-1.9T40.2 55.825Q38.875 54.5 37.45 53.3t-2.65-1.95q-1.225-.75-1.975-.75-.1.15-.25.25-.2.2-.25.3-.35.45-.625.95-.275.5-.475 1.05-.2.55-.45 1.075-.25.525-.5 1.025-2.1 3.65-4.675 6.65-2.575 3-6.175 5.35-.45.25-1.25.85t-1.3.7zm6-40.45q-.15 0-.2-.05h-.25l-.15-.1q.1 0 .25-.05t.3-.05l.25.2h-.1q-.05.05-.1.05zm-8.9 41.25q-2.5 0-4.425-1.15-1.925-1.15-2.975-3.15t-1.05-4.5q0-1.95.75-3.65.4-.85.75-1.725.35-.875.7-1.725l-.2-.45q.4-.45.6-.9l.45-.95q.2-.4.475-.775.275-.375.625-.725.65-.6 1.05-1.45l.35-.2q.25-.4.875-1.125t1.375-1.475q.75-.75 1.425-1.275.675-.525 1.125-.575l-.1-.4 1.05-.75.55.3q-1.25.85-2.575 2.55-1.325 1.7-2.575 3.85-1.25 2.15-2.275 4.425t-1.625 4.35q-.6 2.075-.6 3.625 0 3.35 1.65 5.15 1.65 1.8 4.8 1.8.5 0 1.025-.025.525-.025.975-.175l-.1.45q-.6.05-1 .4-.4.25-1.1.25zm31.65-10.05q.65-.95.8-2.1l.2-1.1q.1-.55.3-1.05.7-2.25 1.65-4.3.45-1.05.875-2.1t.775-2.15l-.1-.15-1.1.15q-.3.05-.6.075-.3.025-.6.025l-.1-.1v-.2h.2v-.15h-.35q-.7.4-1.9.55-1.2.15-2.475.2-1.275.05-2.125.2l-.15-.3q-.35.3-1.275.425-.925.125-2.025.225-1.1.1-2.125.275-1.025.175-1.625.475-.2.25-.375.525t-.325.575q.4.7 1.2 1 .7.25 1.45.75 1.35.85 2.625 1.85t2.425 2.1q1.15 1.1 2.325 2.175 1.175 1.075 2.425 2.125zm-25.85-9.65h.15l.6-.05q.85-.5 1.9-.65.9-.15 1.9-.55h.05l.05-.05-.95-.1q-.65.2-1.525.25-.875.05-1.525.25-.65.2-.65.9zm47.45 17.2q-.3-.15-.65-.15h-.7l-.05-.15v.05l-.75-.25-.25.2-.85-.3.05.05q-.85-.25-1.1-.65-.25-.4-.25-1.35 0-.4.075-.95.075-.55.275-.95.25-.25.925-.975t.975-.875l1.05-.45q.25-.1.525-.2t.525-.2q1.15-.5 2.35-.975 1.2-.475 2.4-.925l1.65-.6q-.05.05-.05.35v.05q0 .05.05.05.1 0 .3-.3.1-.1.175-.2.075-.1.125-.15l.4-.1v-.05q.85-.3 1.8-.425.95-.125 1.85-.225l.15-.55.95-.2q.35-.05.575-.075.225-.025.325.025 1.9-.55 3.8-1.025 1.9-.475 3.8-.875.45-.35.8-.8l.7-.9q.05-.1.1-.175.05-.075.1-.175l.2-.3.15-.25.05-.05q.15-.15.275-.675.125-.525.2-1.125.075-.6.075-.85 0-1.4-.75-2.8t-2.05-2.1q-.55-.25-1-.4-.65-.2-.95-.5h.05q-.5-.1-.9-.3-.35.35-.75.6-.45.25-.8.55-.35.25-.8.35-.4.05-.8.3-1.3 1-2.875 1.675t-3.225.675q-.9 0-1.65-.3l-8.4 12.45q-.65.95-1.275 1.85-.625.9-1.275 1.8-.1.2-.25.4t-.25.45q-.35.5-.65.75-.9.8-2 1.5l-.05.1q-.4.35-1 .5-.6.15-1.15.15-.55 0-1.25-.25t-.7-1.05v-.2q.15-.1.375-.225t.425-.125l.05.05h.1v-.15l.1-.1h-.05l.525-.75q.525-.75 1.3-1.85t1.6-2.225q.825-1.125 1.425-1.925.6-.8.75-.85l.1-.6q.05-.1.5-.575t1-1.075q.55-.6 1-1.125.45-.525.5-.675.05-.05.05-.1l.05-.05q.55-.85 1.05-1.95l.95-1.95 1.35-2.6q.35-.65.675-1.275.325-.625.625-1.275.15-.3.475-1.125.325-.825.725-1.8.4-.975.75-1.775.35-.8.55-1l.05-.45.6-.85-.2-.55.05-.05v-.15q.1-.05.225-.85.125-.8.25-1.575.125-.775.225-.775l.15-1.2q.05-.3.05-.6v-.6q0-1.3-.475-2.425-.475-1.125-1.875-1.125-1.2 0-2.825.75-1.625.75-3.15 1.775t-2.475 1.775l-.75.7q-.2.2-.375.35-.175.15-.375.3-.15.15-.45.35-.1.1-.25.2t-.25.2h.2q-.2.3-.9.725t-1.05.425l-.05.3h.1v.15l.3-.15v.3h-.2l-1.95 2.5h-.1v.25h.25q.15 0 .15.15-.55.35-.85 1.225-.3.875-.3 1.475 0 .3.1.625t.5.325v.15q-.7-.05-1.15-.45-.45-.4-.4-1.1v-.2l.35-.3q-.05-.2-.075-.375-.025-.175-.025-.275 0-.2.1-.2l.05.4h.1v-.5q-.05-.1-.05-.25v-.25q0-.1.025-.2t.075-.25q.05-.05.125-.05t.125-.05q.15 0 .2-.15h.2l-.1-.15v-.2q0-.1.15-.1v-.15h-.1v.15l-.25.3h-.1v-.2q0-.1.1-.1l.5-.45.05-1 .15-.15h.2l.2.3 1.05-1.35.05-.3h-.35q-.2 0-.2-.1h.1l.05-.15q.65-.55 1.25-1.15l1.2-1.2q.2-.15.375-.325l.375-.375q.15-.05.35-.25l.05-.05h.15q.15-.75.9-.75l.3-.75.7-.35q.6-.3 1.175-.675.575-.375.575-.575.1.3.5.45v-.4l.35-.35.25-.1v.1q.2-.1.4-.275.2-.175.4-.375.4-.35.95-.35l.3-.15q.05-.05.25-.15l.15-.1.1-.1V25h.3q.8-.7 1.75-.7.4-.25.85-.35.45-.1.9-.1v-.15l.3-.15q1.8.15 2.875 1.225 1.075 1.075 1.825 2.575-.05.05-.05.35 0 .9.3 1.75.3.9.25 1.75v.1q-.25.15-.35.575-.1.425-.175.8-.075.375-.375.375l-.25 1.15q-.15.2-.2.525-.05.325-.1.625h-.2v.15q-.3 0-.3.3v.05q0 .1.15.1v-.15l.35-.45q-.05.45-.15.825-.1.375-.5.375v.15q.4.1.4.4-.1.05-.325.25t-.225.3q0 .05.05.05-.3.25-.55.8-.1.25-.225.5l-.225.45-.3-.3q-.05.25-.3.5-.2.2-.3.55h-.1l.25.55h-.1v.15l-.7.45q.25.1.25.3 0 .25-.175.6t-.325.6q.5-.25.95-.45.45-.2 1-.3 1.3-2.05 2.7-4.225 1.4-2.175 2.85-4.075 1.05-1.4 2.425-3.05 1.375-1.65 2.95-3.25 1.575-1.6 3.225-2.9 1.65-1.3 3.2-1.95.05-.05.2-.05l.1-.1.25.05q.25-.2.65-.25.4-.05.7-.05 1 0 1.45.75.45.75.45 1.65 0 1.35-.55 2.75t-1.1 2.65q-.05.1-.1.225t-.1.225q-.15.25-.25.5-.35.2-.625.725-.275.525-.375.875-.35.15-.55.65-.2.5-.6.5l.1-.55h-.05v.05h-.1q-.1.45-.275 1.125-.175.675-.775.675h-.05q0 .05-.05.05l-.05.35-.35.5-.55.1q-.2.2-.775.85-.575.65-.575.9.05.05.05.15 0 .4-.6 1.125T86.85 40.4q-.725.6-1.125.6-.05.1-.175.325-.125.225-.225.275l2.3.6q1.05.3 2.2.85.05 0 .1-.05h.1q.35 0 .7.3l.15.1.1.1q0 .05.1.05.05.05 0 .05.3.1.45.2.2.2.4.3 1.95 1.65 1.95 4.25 0 1.2-.425 2.35-.425 1.15-1.025 2.2.9-.15 1.8-.25t1.8-.1q.1 0 .525.025.425.025.425.175l-.05.1q-.65.1-1.25.175-.6.075-1.2.175l-2.45.45q-1.3 1.95-2.575 3.175-1.275 1.225-2.8 2.2-1.525.975-3.675 2.275l-.05-.05q-.35.15-1.25.625t-1.75.85q-.85.375-1.15.275-.05.05-.05.3-.05 0-.7.325-.65.325-1.275.6-.625.275-.775.225l-.3.45-1.95.5-.05-.15-.05-.05-1.15.25-.05.1.15.15q.1.1.1.15 0 .05-.1.15l-.85-.05V66l-.75.35-.1.2-.6-.65-.35.85-1.05-.1-.1.2h-.35q-.3 0-.625.05t-.575.2zm9.65-25.4q.75-.2 1.95-.2.75 0 1.4-.15.35-.05.7-.075.35-.025.7-.025t.4.05h.3q3.15-2.5 5.575-5.625 2.425-3.125 4.525-6.475.4-.6.925-1.475.525-.875.9-1.8t.375-1.625q0-.15-.025-.35-.025-.2-.125-.3-.05-.05-.3-.05-.5 0-1.15.45-.65.45-1.35 1.05-.7.6-1.3 1.05-.6.45-1 .45 0 .2-.65.85-.65.65-1.375 1.275-.725.625-.875.775-.95.95-2.35 2.475-1.4 1.525-2.675 3.1-1.275 1.575-2.025 2.725-.3.5-.6.975t-.65.975l-1.3 1.95zm.7-13.05l.2-.3h-.1l-.1.3zm-17.65 4.4l.15-.15q0-.05.1-.15h-.1l-.15.3zm16.75 1.45h.35v-.3h-.2v.15l-.15.15zm-18.15.3l.1-.3h-.2v.15h.1v.15zm-1.5 1.3h.2v-.15h.25v-.3h-.1v.15q-.05.05-.2.05-.15.05-.15.25zm17.9 2.6l.15-.1q0-.05.1-.15h-.1l-.15.25zm-18.7.3q-.05-.05-.05-.2-.05-.05-.05-.1t-.05-.1v.25q0 .15.15.15zm18.6 6.2q.75 0 2.075-.575 1.325-.575 2.6-1.325 1.275-.75 1.875-1.25l-2.55.15q-1.35.05-2.6.4l-1.7 2.6h.3zm-1.35-.35l1.05-1.55q-.4.25-.775.5t-.675.65q.15.25.4.4zm-8.05 12q.9-1.45 1.85-2.85l1.9-2.8 1.9-2.8 1.9-2.8-.4-.35h-.1q-.25 0-.1-.15v-.05q-.05-.05-.15-.25l-.2-.2q-.05.05-.475.575-.425.525-.425.675l-1.6 2.35v.45l-.55.3q-.05.5-.45.75t-.35.75q-.2.25-.35.475-.15.225-.35.475-.2.2-.375.45t-.325.5q-.1.15-.325.7-.225.55-.425 1.125-.2.575-.3.925-.15.45-.1.85 0 .5-.2.9zm4.6-9.5v-.1q0-.05.05-.05v-.3q-.1.3-.1.35l.05.1zm-1.85 3.35v-.25l.35-.35-.35.6zm-2.25 13.5q.45 0 .8-.225.35-.225.7-.475 0 .1-.05.15l-.1.15h.65v-.35l.45.2q.25.15.35.15h.2l.15-.15.15-.2h.95l-.05-.05q0-.05.05-.05l1.35-.55.4-.05q.45-.3 1.05-.275.6.025.6-.675.25-.1.625-.3.375-.2.825-.4.9-.4 1.4-.4h.2q.05.05.15.05.1 0 .25-.15.1-.2.2-.1.1-.4.775-.8t.975-.6l2.65-1.45-.05.05q.2-.2.35-.3v.05l.9-.4.15-.5.15-.1q.1-.1.2-.1.45 0 .85.25l-.3-.9q.05.05.2.05l.15.1.3-.1q.25 0 .35.05.2.1.3.1.25 0 .725-.475l.675-.675-1.5.3q-.35.1-.725.175-.375.075-.775.175l-1.8.45q-.45.1-.9.25t-.9.25q-.65.2-1.725.625-1.075.425-2.225.9-1.15.475-2.1.75-.95.275-1.35.175v.1l-.3.3q-.15 0-.15-.2l-.05.05-1 .4q-.5.2-1.05.4-.5.2-1.025.375-.525.175-1.025.425v.15q-.1.1 0 .2l-.6.05q-.1.25-.2.3-.15.1-.25.25-1 .2-1.85 1.05-.05.2-.075.375-.025.175-.025.275 0 .9.95.9zm17.95-8.5q-.05 0-.225-.1t-.075-.2q.25.05.3.3z" fill="#3D3D3D" data-v-b32a207b></path></g></svg>`)
}
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/components/logo.vue')
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [['ssrRender', _sfc_ssrRender], ['__scopeId', 'data-v-b32a207b']])
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'NavBar',
  __ssrInlineRender: true,
  setup(__props) {
    const { y: scroll } = useWindowScroll()
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent('RouterLink')
      const _component_Logo = __unplugin_components_0$1
      const _component_DarkMode = __unplugin_components_1
      _push(`<header${ssrRenderAttrs(mergeProps({ class: 'header z-9' }, _attrs))} data-v-215bdc74>`)
      _push(ssrRenderComponent(_component_RouterLink, {
        class: 'absolute m-5 h-15 w-15 select-none outline-none xl:fixed',
        to: '/',
        focusable: 'false',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId))
          }
          else {
            return [
              createVNode(_component_Logo),
            ]
          }
        }),
        _: 1,
      }, _parent))
      _push(`<button title="Scroll to top" fixed bottom-3 right-3 z-100 h-10 w-10 rounded-full transition duration-300 print:hidden hover-bg-hex-8883 hover:op100 class="${ssrRenderClass(unref(scroll) > 300 ? 'op30' : 'op0! pointer-events-none')}" data-v-215bdc74><div i-ri-arrow-up-line data-v-215bdc74></div></button><nav class="nav" data-v-215bdc74><div class="spacer" data-v-215bdc74></div><div class="right" flex items-center print:op0 data-v-215bdc74>`)
      _push(ssrRenderComponent(_component_RouterLink, {
        to: '/posts',
        title: 'Blog',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="lt-md:hidden" data-v-215bdc74${_scopeId}>Blog</span><div i-ri-article-line md:hidden data-v-215bdc74${_scopeId}></div>`)
          }
          else {
            return [
              createVNode('span', { class: 'lt-md:hidden' }, 'Blog'),
              createVNode('div', {
                'i-ri-article-line': '',
                'md:hidden': '',
              }),
            ]
          }
        }),
        _: 1,
      }, _parent))
      _push(ssrRenderComponent(_component_RouterLink, {
        to: '/projects',
        title: 'Projects',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="lt-md:hidden" data-v-215bdc74${_scopeId}>Projects</span><div i-ri-lightbulb-line class="md:hidden" data-v-215bdc74${_scopeId}></div>`)
          }
          else {
            return [
              createVNode('span', { class: 'lt-md:hidden' }, 'Projects'),
              createVNode('div', {
                'i-ri-lightbulb-line': '',
                'class': 'md:hidden',
              }),
            ]
          }
        }),
        _: 1,
      }, _parent))
      _push(ssrRenderComponent(_component_RouterLink, {
        to: '/navigator',
        title: 'Navigator',
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-iconoir-navigator-alt data-v-215bdc74${_scopeId}></div>`)
          }
          else {
            return [
              createVNode('div', { 'i-iconoir-navigator-alt': '' }),
            ]
          }
        }),
        _: 1,
      }, _parent))
      _push(`<a href="https://github.com/oOBobbyOo" target="_blank" title="GitHub" class="lt-md:hidden" data-v-215bdc74><div i-uil-github-alt data-v-215bdc74></div></a>`)
      _push(ssrRenderComponent(_component_DarkMode, null, null, _parent))
      _push(`</div></nav></header>`)
    }
  },
})
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/components/NavBar.vue')
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-215bdc74']])
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'App',
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute()
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __unplugin_components_0
      const _component_RouterView = resolveComponent('RouterView')
      const _component_Footer = __unplugin_components_1$1
      const _component_CustomPointer = __unplugin_components_2
      _push(`<!--[-->`)
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent))
      _push(`<main class="of-x-hidden px-7 py-10">`)
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent))
      _push(ssrRenderComponent(_component_Footer, {
        key: unref(route).path,
      }, null, _parent))
      _push(`</main>`)
      _push(ssrRenderComponent(_component_CustomPointer, null, null, _parent))
      _push(`<!--]-->`)
    }
  },
})
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/App.vue')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const createApp = ViteSSG(
  _sfc_main,
  {
    routes,
    base: '/blogs/',
  },
  ({ router, isClient }) => {
    if (isClient) {
      const html = document.querySelector('html')
      setupRouterScroller(router, {
        selectors: {
          html(ctx) {
            let _a
            if (((_a = ctx.savedPosition) == null ? void 0 : _a.top) || void 0)
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
export {
  _export_sfc as _,
  createApp,
}
