import { _ as _sfc_main$1 } from "./WrapperPost-bPrDeG4J.js";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "dayjs";
import "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "Henry Bobby", "description": "Henry Bobby's Profile", "art": "random", "meta": [{ "property": "og:title", "content": "Henry Bobby" }, { "name": "twitter:title", "content": "Henry Bobby" }, { "name": "description", "content": "Henry Bobby's Profile" }, { "property": "og:description", "content": "Henry Bobby's Profile" }, { "name": "twitter:description", "content": "Henry Bobby's Profile" }] };
    const head = { "title": "Henry Bobby", "meta": [{ "property": "og:title", "content": "Henry Bobby" }, { "name": "twitter:title", "content": "Henry Bobby" }, { "name": "description", "content": "Henry Bobby's Profile" }, { "property": "og:description", "content": "Henry Bobby's Profile" }, { "name": "twitter:description", "content": "Henry Bobby's Profile" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><p${_scopeId}>Hey, I am Henry Bobby, A Frontend Developer.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("p", null, "Hey, I am Henry Bobby, A Frontend Developer.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
