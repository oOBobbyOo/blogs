import { f as formatDate, i as isFuture, a as isSameYear, g as getYear, _ as _sfc_main$2 } from "./WrapperPost-bPrDeG4J.js";
import { defineComponent, computed, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderVNode, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import { useStorage } from "@vueuse/core";
import { useHead } from "@unhead/vue";
import "dayjs";
const englishOnly = useStorage("english-only", false);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostsList",
  __ssrInlineRender: true,
  props: {
    type: {},
    posts: {},
    extra: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const routes = router.getRoutes().filter((i) => i.path.startsWith("/posts") && i.meta.frontmatter.date && !i.meta.frontmatter.draft).filter((i) => !i.path.endsWith(".html") && (i.meta.frontmatter.type || "blog").split("+").includes(props.type)).map((i) => ({
      path: i.meta.frontmatter.redirect || i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      lang: i.meta.frontmatter.lang,
      duration: i.meta.frontmatter.duration,
      recording: i.meta.frontmatter.recording,
      upcoming: i.meta.frontmatter.upcoming,
      redirect: i.meta.frontmatter.redirect,
      place: i.meta.frontmatter.place
    }));
    const posts = computed(
      () => [...props.posts || routes, ...props.extra || []].sort((a, b) => +new Date(b.date) - +new Date(a.date)).filter((i) => !englishOnly.value || i.lang !== "zh")
    );
    function isSameGroup(a, b) {
      return isFuture(a.date) === isFuture(b == null ? void 0 : b.date) && isSameYear(a.date, b == null ? void 0 : b.date);
    }
    function getGroupName(p) {
      if (isFuture(p.date))
        return "Upcoming";
      return getYear(p.date);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ "pl-0": "" }, _attrs))}>`);
      if (!unref(posts).length) {
        _push(`<div py2 op50> { nothing here yet } </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(posts), (route, idx) => {
        _push(`<!--[-->`);
        if (!isSameGroup(route, unref(posts)[idx - 1])) {
          _push(`<div slide-enter pointer-events-none relative h20 select-none style="${ssrRenderStyle({
            "--enter-stage": idx - 2,
            "--enter-step": "60ms"
          })}"><span absolute left--3rem top--2rem text-8em color-transparent font-bold text-stroke-2 text-stroke-hex-aaa op10>${ssrInterpolate(getGroupName(route))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="slide-enter" style="${ssrRenderStyle({
          "--enter-stage": idx,
          "--enter-step": "60ms"
        })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(route.path.includes("://") ? "a" : "RouterLink"), mergeProps(
          { ref_for: true },
          route.path.includes("://") ? {
            href: route.path,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {
            to: route.path
          },
          { class: "item mb-6 mt-2 block font-normal no-underline" }
        ), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="no-underline" flex="~ col md:row gap-2 md:items-center"${_scopeId}><div class="title text-lg leading-1.2em" flex="~ gap-2 wrap"${_scopeId}>`);
              if (route.lang === "zh") {
                _push2(`<span flex-none align-middle class="my-auto ml--12 mr2 hidden rounded bg-zinc:15 px-1 py-0.5 text-xs text-zinc5 md:block"${_scopeId}> 中文 </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span align-middle${_scopeId}>${ssrInterpolate(route.title)}</span>`);
              if (route.redirect) {
                _push2(`<span i-carbon-arrow-up-right ml--1.5 flex-none align-middle text-xs op50 title="External"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div flex="~ gap-2 items-center"${_scopeId}>`);
              if (route.inperson) {
                _push2(`<span i-ri:group-2-line flex-none align-middle op50 title="In person"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              if (route.recording || route.video) {
                _push2(`<span i-ri:film-line flex-none align-middle op50 title="Provided in video"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              if (route.radio) {
                _push2(`<span i-ri:radio-line flex-none align-middle op50 title="Provided in radio"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span ws-nowrap text-sm op50${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(route.date, route.lang, true))}</span>`);
              if (route.duration) {
                _push2(`<span ws-nowrap text-sm op40${_scopeId}>· ${ssrInterpolate(route.duration)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (route.platform) {
                _push2(`<span ws-nowrap text-sm op40${_scopeId}>· ${ssrInterpolate(route.platform)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (route.place) {
                _push2(`<span ws-nowrap text-sm op40 md:hidden${_scopeId}>· ${ssrInterpolate(route.place)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (route.lang === "zh") {
                _push2(`<span flex-none align-middle class="my-auto rounded bg-zinc:15 px-1 py-0.5 text-xs text-zinc5 md:hidden"${_scopeId}> 中文 </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></li>`);
              if (route.place) {
                _push2(`<div mt--2 hidden text-sm op50 md:block${_scopeId}>${ssrInterpolate(route.place)}</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("li", {
                  class: "no-underline",
                  flex: "~ col md:row gap-2 md:items-center"
                }, [
                  createVNode("div", {
                    class: "title text-lg leading-1.2em",
                    flex: "~ gap-2 wrap"
                  }, [
                    route.lang === "zh" ? (openBlock(), createBlock("span", {
                      key: 0,
                      "flex-none": "",
                      "align-middle": "",
                      class: "my-auto ml--12 mr2 hidden rounded bg-zinc:15 px-1 py-0.5 text-xs text-zinc5 md:block"
                    }, " 中文 ")) : createCommentVNode("", true),
                    createVNode("span", { "align-middle": "" }, toDisplayString(route.title), 1),
                    route.redirect ? (openBlock(), createBlock("span", {
                      key: 1,
                      "i-carbon-arrow-up-right": "",
                      "ml--1.5": "",
                      "flex-none": "",
                      "align-middle": "",
                      "text-xs": "",
                      op50: "",
                      title: "External"
                    })) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { flex: "~ gap-2 items-center" }, [
                    route.inperson ? (openBlock(), createBlock("span", {
                      key: 0,
                      "i-ri:group-2-line": "",
                      "flex-none": "",
                      "align-middle": "",
                      op50: "",
                      title: "In person"
                    })) : createCommentVNode("", true),
                    route.recording || route.video ? (openBlock(), createBlock("span", {
                      key: 1,
                      "i-ri:film-line": "",
                      "flex-none": "",
                      "align-middle": "",
                      op50: "",
                      title: "Provided in video"
                    })) : createCommentVNode("", true),
                    route.radio ? (openBlock(), createBlock("span", {
                      key: 2,
                      "i-ri:radio-line": "",
                      "flex-none": "",
                      "align-middle": "",
                      op50: "",
                      title: "Provided in radio"
                    })) : createCommentVNode("", true),
                    createVNode("span", {
                      "ws-nowrap": "",
                      "text-sm": "",
                      op50: ""
                    }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(route.date, route.lang, true)), 1),
                    route.duration ? (openBlock(), createBlock("span", {
                      key: 3,
                      "ws-nowrap": "",
                      "text-sm": "",
                      op40: ""
                    }, "· " + toDisplayString(route.duration), 1)) : createCommentVNode("", true),
                    route.platform ? (openBlock(), createBlock("span", {
                      key: 4,
                      "ws-nowrap": "",
                      "text-sm": "",
                      op40: ""
                    }, "· " + toDisplayString(route.platform), 1)) : createCommentVNode("", true),
                    route.place ? (openBlock(), createBlock("span", {
                      key: 5,
                      "ws-nowrap": "",
                      "text-sm": "",
                      op40: "",
                      "md:hidden": ""
                    }, "· " + toDisplayString(route.place), 1)) : createCommentVNode("", true),
                    route.lang === "zh" ? (openBlock(), createBlock("span", {
                      key: 6,
                      "flex-none": "",
                      "align-middle": "",
                      class: "my-auto rounded bg-zinc:15 px-1 py-0.5 text-xs text-zinc5 md:hidden"
                    }, " 中文 ")) : createCommentVNode("", true)
                  ])
                ]),
                route.place ? (openBlock(), createBlock("div", {
                  key: 0,
                  "mt--2": "",
                  hidden: "",
                  "text-sm": "",
                  op50: "",
                  "md:block": ""
                }, toDisplayString(route.place), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }), _parent);
        _push(`</div><!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "Blog - Henry Bobby", "display": "", "art": "plum", "meta": [{ "property": "og:title", "content": "Blog - Henry Bobby" }, { "name": "twitter:title", "content": "Blog - Henry Bobby" }] };
    const head = { "title": "Blog - Henry Bobby", "meta": [{ "property": "og:title", "content": "Blog - Henry Bobby" }, { "name": "twitter:title", "content": "Blog - Henry Bobby" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$2;
      const _component_PostsList = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PostsList, {
              "only-date": "",
              type: "blog"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode(_component_PostsList, {
                  "only-date": "",
                  type: "blog"
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
