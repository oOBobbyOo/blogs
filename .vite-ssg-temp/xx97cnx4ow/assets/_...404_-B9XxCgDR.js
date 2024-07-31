import { _ as _sfc_main$1 } from "./WrapperPost-bPrDeG4J.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "dayjs";
import "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
const _sfc_main = {
  __name: "[...404]",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "meta": [] };
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h1 id="_404" tabindex="-1"${_scopeId}>404 <a class="header-anchor" href="#_404" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>:）Nice to meet you tho!</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h1", {
                  id: "_404",
                  tabindex: "-1"
                }, [
                  createTextVNode("404 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#_404",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("p", null, ":）Nice to meet you tho!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...404].md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
