import { useSSRContext, mergeProps, defineComponent, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import { _ as _sfc_main$5 } from "./WrapperPost-bPrDeG4J.js";
import { useHead } from "@unhead/vue";
import "vite-ssg";
import "vue-router-better-scroller";
import "nprogress";
import "ua-parser-js";
import "@vueuse/core";
import "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "dayjs";
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/ChatGPT.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 26 26",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C20.1797 0 26 5.8203 26 13C26 14.1592 25.8483 15.283 25.5636 16.3525L18.2377 4.25581H18.2291C17.5709 3.254 16.4371 2.59256 15.1489 2.59256C13.8606 2.59256 12.7268 3.254 12.0686 4.25581H12.0599L11.9686 4.41693C11.951 4.44707 11.9337 4.47747 11.9169 4.50815L3.88731 18.6779C3.56947 19.2224 3.38736 19.8558 3.38736 20.5318C3.38736 21.1089 3.52009 21.655 3.75667 22.1412C1.43409 19.7928 0 16.5639 0 13C0 5.8203 5.8203 0 13 0ZM6.27755 24.1292C6.53287 24.1852 6.79812 24.2147 7.07026 24.2147C9.10427 24.2147 10.7532 22.5658 10.7532 20.5318C10.7532 19.8794 10.5835 19.2667 10.286 18.7353L10.2879 18.7345L8.49328 15.6288C7.52634 13.954 8.10016 11.8124 9.77496 10.8455C11.4498 9.87854 13.5913 10.4524 14.5582 12.1272L20.8887 22.8559L20.8912 22.8548C20.9571 22.962 21.0284 23.0655 21.1045 23.1651C18.8821 24.9394 16.0649 26 13 26C10.5397 26 8.23908 25.3166 6.27755 24.1292Z" fill="#0040FF"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/VisActor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 283.46 283.46",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-5f6777e2><path class="cls-1" d="M144.89,89.86c-33.46,0-54.44,14.56-66.14,26.76a86,86,0,0,0-23.69,58.94c0,22.64,8.81,43.48,24.8,58.67,15.7,14.92,36.9,23.14,59.68,23.14,23.81,0,46-8.49,62.49-23.91,17-15.9,26.37-37.93,26.37-62C228.4,120.37,185.94,89.86,144.89,89.86Zm.49,153.67a61.49,61.49,0,0,1-46.45-20.4c-12.33-13.76-18.85-32.64-18.85-54.62,0-20.7,6.07-37.67,17.57-49.07,10.11-10,24.39-15.62,40.19-15.74,19,0,35.22,6.56,46.76,19,12.6,13.58,19.27,34,19.27,58.95C203.87,224.39,174.49,243.53,145.38,243.53Z" data-v-5f6777e2></path><polygon class="cls-1" points="198.75 74.96 179.45 74.96 142.09 37.83 104.51 74.96 86.14 74.96 138.09 24.25 146.81 24.25 198.75 74.96" data-v-5f6777e2></polygon></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Icons/Icones.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5f6777e2"]]);
const isUrl = (url) => /^https?:\/\/.*/.test(url);
const vue = [
  {
    name: "Vue",
    link: "https://cn.vuejs.org/",
    desc: "渐进式 JavaScript 框架",
    icon: "i-logos-vue"
  },
  {
    name: "Vue Router",
    link: "https://next.router.vuejs.org/zh/",
    desc: "为 Vue.js 提供富有表现力、可配置的、方便的路由",
    icon: "i-logos-vue"
  },
  {
    name: "Pinia",
    link: "https://pinia.vuejs.org/zh/",
    desc: "符合直觉的 Vue.js 状态管理库",
    icon: "i-logos-pinia"
  },
  {
    name: "Nuxt",
    link: "https://nuxt.com/",
    desc: "Nuxt是一个 开源框架 ，使得Web开发变得直观且强大。可以自信地创建高性能和生产级别的全栈Web应用和网站。",
    icon: "i-logos-nuxt-icon"
  },
  {
    name: "VueUse",
    link: "https://vueuse.org/",
    desc: "Vue Composition API 的实用程序",
    icon: "i-logos-vueuse"
  }
];
const react = [
  {
    name: "React",
    link: "https://zh-hans.react.dev/",
    desc: "用于构建 Web 和原生交互界面的库",
    icon: "i-logos-react"
  },
  {
    name: "React Router",
    link: "https://reactrouter.com/en/main",
    desc: "React 路由库",
    icon: "i-logos-react-router"
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    desc: "React 服务端渲染应用框架",
    icon: "i-logos-nextjs-icon"
  },
  {
    name: "Remix",
    link: "https://remix.run/",
    desc: "Remix 是一个基于 React 的框架，用于创建服务器渲染的应用程序。",
    icon: "i-simple-icons-remix"
  },
  {
    name: "React Query",
    link: "https://tanstack.com/query/v4",
    desc: "React 应用的轻量级数据查询库",
    icon: "i-logos-react-query-icon"
  },
  {
    name: "React Hook Form",
    link: "https://react-hook-form.com/",
    desc: "React 应用的表单状态管理库",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png"
  },
  {
    name: "ahooks",
    link: "https://ahooks.js.org/",
    desc: "一个高质量和可靠的React Hooks库",
    icon: "https://ahooks.js.org/simple-logo.svg"
  },
  {
    name: "Zustand",
    link: "https://zustand-demo.pmnd.rs/",
    desc: "Zustand 是一个用于构建快速、可扩展的状态管理的 React Hook",
    icon: "https://docs.pmnd.rs/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzustand-icon.8507f6a0.png&w=750&q=75"
  },
  {
    name: "Jotai",
    link: "https://jotai.org/",
    desc: "React 原始而灵活的状态管理",
    icon: "https://cdn.candycode.com/jotai/jotai-mascot.png"
  },
  {
    name: "Recoil",
    link: "https://recoiljs.org/",
    desc: "React 应用的状态管理库",
    icon: "i-simple-icons-recoil"
  },
  {
    name: "Mobx",
    link: "https://mobx.js.org/",
    desc: "MobX 是一个简单、可扩展的状态管理库",
    icon: "i-logos-mobx"
  },
  {
    name: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
    desc: "Redux 应用的实用工具库",
    icon: "i-logos-redux"
  },
  {
    name: "React sping",
    link: "https://react-spring.io/",
    desc: "React Spring 是一个用于构建交互式、数据驱动和动画 UI 组件的库",
    icon: "i-logos-react-spring"
  },
  {
    name: "Framer Motion",
    link: "https://motionone.org/",
    desc: "Framer Motion 是为React 提供的动作库",
    icon: "https://www.framer.com/images/favicons/iOS/120.png"
  },
  {
    name: "React Transition Group",
    link: "https://reactcommunity.org/react-transition-group/",
    desc: "React 动画库",
    icon: "i-logos-react"
  }
];
const css = [
  {
    name: "UnoCSS",
    link: "https://unocss.dev/",
    desc: "Unocss 是一个基于原子类的即时原子化 CSS 引擎",
    icon: "i-logos-unocss"
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    desc: "Tailwind CSS 是一个功能类优先的 CSS 框架",
    icon: "i-logos-tailwindcss-icon"
  },
  {
    name: "Windi CSS",
    link: "https://windicss.org/",
    desc: "Windi CSS 是下一代实用型 CSS 框架。",
    icon: "i-logos-windi-css"
  },
  {
    name: "Panda CSS",
    link: "https://panda-css.com/",
    desc: "Panda CSS是一个样式引擎，它生成样式基元，以类型安全且可读的方式编写原子 CSS 和配方。",
    icon: "i-logos-pandacss-icon"
  },
  {
    name: "Styled Components",
    link: "https://styled-components.com/",
    desc: "Styled Components 是一个用于构建可重用、可组合的样式组件的库。",
    icon: "https://styled-components.com/favicon.png"
  }
];
const icons = [
  {
    name: "Icones",
    link: "https://icones.netlify.app/",
    desc: "具有即时搜索功能的图标资源管理器",
    icon: "icones"
  },
  {
    name: "Iconify",
    link: "https://iconify.design/",
    desc: "Iconify 是一个开源的图标库，它支持 SVG、字体和多种框架。",
    icon: "https://iconify.design/favicon.svg"
  },
  {
    name: "IconPark",
    link: "https://iconpark.oceanengine.com/official",
    desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库。",
    icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg"
  },
  {
    name: "Iconfont",
    link: "https://www.iconfont.cn/",
    desc: "阿里巴巴矢量图标库",
    icon: "https://www.iconfont.cn/favicon.ico"
  },
  {
    name: "Animated icons",
    link: "https://unicornicons.com/icons",
    desc: "自带动画的图标库",
    icon: "https://unicornicons.com/logo.svg"
  },
  {
    name: "Lucide",
    link: "https://lucide.dev/icons/",
    desc: "美丽的＆一致的图标",
    icon: "https://lucide.dev/logo.light.svg"
  },
  {
    name: "Remix Icon",
    link: "https://remixicon.com/",
    desc: "简单令人愉快的图标系统",
    icon: "https://remixicon.com/favicon.ico"
  },
  {
    name: "Tabler Icons",
    link: "https://tablericons.com/",
    desc: "Tabler Icons 是一个开源的图标库，它支持 SVG、字体和多种框架。",
    icon: "https://tablericons.com/favicon.ico"
  }
];
const charts = [
  {
    name: "Echarts",
    link: "https://echarts.apache.org/zh/index.html",
    desc: "ECharts 一个基于 JavaScript 的开源可视化图表库",
    icon: "https://echarts.apache.org/zh/images/favicon.png"
  },
  {
    name: "Antv",
    link: "https://antv.vision/zh",
    desc: "AntV 是一个数据可视化解决方案，它包含多个产品，例如 AntV G2、AntV G6、AntV L7、AntV X6 等。",
    icon: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png"
  },
  {
    name: "VisActor",
    link: "https://www.visactor.io/vchart",
    desc: "开箱即用的多端图表库，生动灵活的数据故事讲述者。",
    icon: "visactor"
  },
  {
    name: "D3.js",
    link: "https://d3js.org/",
    desc: "D3.js 一个基于 web 标准的 JavaScript 可视化库",
    icon: "https://d3js.org/logo.svg"
  }
];
const ai = [
  {
    name: "ChatGPT",
    link: "https://chat.openai.com/chat",
    desc: "ChatGPT，全称聊天生成预训练转换器，是OpenAI开发的人工智能聊天机器人程序，该程序使用基于GPT-3.5、GPT-4、GPT-4o架构的大型语言模型并以强化学习训练。",
    icon: "chatgpt"
  },
  {
    name: "问心一言",
    link: "https://yiyan.baidu.com/",
    desc: "文心一言是由百度公司开发的聊天机器人，能够与人交互、回答问题及协作创作。",
    icon: "https://nlp-eb.cdn.bcebos.com/logo/favicon.ico"
  },
  {
    name: "通义千问",
    link: "https://tongyi.aliyun.com/qianwen/",
    desc: "通义千问是由阿里巴巴集团旗下的云端运算服务的科技公司阿里云开发的聊天机器人，能够与人交互、回答问题及协作创作。",
    icon: "https://acd-assets.alicdn.com/acd_work/tongyi-portal/assets/logo.svg"
  },
  {
    name: "豆包AI",
    link: "https://www.doubao.com/chat/",
    desc: "豆包是字节跳动公司基于云雀模型开发的AI 工具，提供聊天机器人、写作助手以及英语学习助手等功能。",
    icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/static/image/OnboardingAvatar.bb1504ee.webp"
  }
];
const navigator = {
  "Vue Ecosystem": vue,
  "React Ecosystem": react,
  "CSS": css,
  "Icons": icons,
  "Charts": charts,
  "AI": ai
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigatorList",
  __ssrInlineRender: true,
  setup(__props) {
    function slug(name) {
      return name.toLowerCase().replace(/[\s\\/]+/g, "-");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icones = __unplugin_components_0;
      const _component_VisActor = __unplugin_components_1;
      const _component_ChatGPT = __unplugin_components_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "mx-auto": "",
        "max-w-300": ""
      }, _attrs))}><p mb5 mt--6 text-center text-lg italic op50> Front-end navigation. </p><!--[-->`);
      ssrRenderList(Object.keys(unref(navigator)), (key, cidx) => {
        _push(`<div slide-enter style="${ssrRenderStyle({ "--enter-stage": cidx + 1 })}"><div${ssrRenderAttr("id", slug(key))} slide-enter pointer-events-none relative h20 select-none style="${ssrRenderStyle({
          "--enter-stage": cidx - 2,
          "--enter-step": "60ms"
        })}"><span absolute left--1rem top-0rem text-5em color-transparent font-bold leading-1em text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20>${ssrInterpolate(key)}</span></div><div mx-auto max-w-500 w-max py-2 grid="~ cols-1 sm:cols-2 md:cols-2 gap-4 lg:cols-3 xl:cols-4"><!--[-->`);
        ssrRenderList(unref(navigator)[key], (item, idx) => {
          _push(`<a class="relative w-[300px] flex flex-col gap-2 rounded-md px-3 py-4 transition-colors duration-200 ease-in-out hover:bg-hex-8881 dark:hover:bg-hex-9991"${ssrRenderAttr("href", item.link)} target="_blank"${ssrRenderAttr("title", item.name)}><div flex="~ items-center justify-center"><div pr-3>`);
          if (item.icon === "icones") {
            _push(ssrRenderComponent(_component_Icones, { class: "text-4xl opacity-50" }, null, _parent));
          } else if (item.icon === "visactor") {
            _push(ssrRenderComponent(_component_VisActor, { class: "text-4xl opacity-50" }, null, _parent));
          } else if (item.icon === "chatgpt") {
            _push(ssrRenderComponent(_component_ChatGPT, { class: "text-4xl opacity-50" }, null, _parent));
          } else if (("isUrl" in _ctx ? _ctx.isUrl : unref(isUrl))(item.icon || "")) {
            _push(`<img${ssrRenderAttr("src", item.icon)} class="min-w-11 w-11 rd-50%"${ssrRenderAttr("alt", item.name)}>`);
          } else {
            _push(`<div class="${ssrRenderClass([item.icon || "i-carbon-unknown", "text-4xl opacity-50"])}"></div>`);
          }
          _push(`</div><div class="flex-auto"><div class="text-lg">${ssrInterpolate(item.name)}</div><div class="line-clamp-2 text-sm font-normal opacity-50">${item.desc ?? ""}</div></div></div></a>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavigatorList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "navigator",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "Navigator - Henry Bobby", "display": "Navigator", "description": "Front-end navigation.", "wrapperClass": "text-center", "art": "dots", "meta": [{ "property": "og:title", "content": "Navigator - Henry Bobby" }, { "name": "twitter:title", "content": "Navigator - Henry Bobby" }, { "name": "description", "content": "Front-end navigation." }, { "property": "og:description", "content": "Front-end navigation." }, { "name": "twitter:description", "content": "Front-end navigation." }] };
    const head = { "title": "Navigator - Henry Bobby", "meta": [{ "property": "og:title", "content": "Navigator - Henry Bobby" }, { "name": "twitter:title", "content": "Navigator - Henry Bobby" }, { "name": "description", "content": "Front-end navigation." }, { "property": "og:description", "content": "Front-end navigation." }, { "name": "twitter:description", "content": "Front-end navigation." }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$5;
      const _component_NavigatorList = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NavigatorList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NavigatorList)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/navigator.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
