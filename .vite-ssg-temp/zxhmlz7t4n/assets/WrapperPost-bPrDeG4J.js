import dayjs from "dayjs";
import { defineComponent, ref, computed, defineAsyncComponent, resolveComponent, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
const getYear = (a) => new Date(a).getFullYear();
const isFuture = (a) => a && new Date(a) > /* @__PURE__ */ new Date();
const isSameYear = (a, b) => a && b && getYear(a) === getYear(b);
function formatDate(d, lang = "en", onlyDate = true) {
  const date = dayjs(d);
  if (onlyDate || date.year() === dayjs().year())
    return lang === "en" ? date.format("MMM D") : date.format("MM/DD");
  return lang === "en" ? date.format("MMM D, YYYY") : date.format("YYYY/MM/DD");
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WrapperPost",
  __ssrInlineRender: true,
  props: {
    frontmatter: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { frontmatter } = __props;
    const route = useRoute();
    ref();
    const ArtComponent = computed(() => {
      let art = frontmatter.art;
      const arts = ["plum", "dots", "particles", "bubbles"];
      if (art === "random")
        art = arts[Math.floor(Math.random() * arts.length)];
      if (typeof window !== "undefined") {
        if (art === "plum")
          return defineAsyncComponent(() => import("./ArtPlum-BPIvKY6v.js"));
        else if (art === "dots")
          return defineAsyncComponent(() => import("./ArtDots-B9xWq-ep.js"));
        else if (art === "particles")
          return defineAsyncComponent(() => import("./ArtParticles-DAcsGLTm.js"));
        else if (art === "bubbles")
          return defineAsyncComponent(() => import("./ArtBubbles-CpKS256Y.js"));
      }
      return void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[-->`);
      if (unref(ArtComponent)) {
        _push(ssrRenderComponent(_component_ClientOnly, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ArtComponent)), null, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(unref(ArtComponent))))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.frontmatter.display ?? __props.frontmatter.title) {
        _push(`<div class="${ssrRenderClass([[__props.frontmatter.wrapperClass], "m-auto mb-8 prose"])}"><h1 class="mb-0 slide-enter-50">${ssrInterpolate(__props.frontmatter.display ?? __props.frontmatter.title)}</h1>`);
        if (__props.frontmatter.date) {
          _push(`<p class="opacity-50 slide-enter-50 !-mt-6">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.frontmatter.date, __props.frontmatter.lang, false))} `);
          if (__props.frontmatter.duration) {
            _push(`<span> · ${ssrInterpolate(__props.frontmatter.duration)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.place) {
          _push(`<p class="mt--4!"><span op50>at </span>`);
          if (__props.frontmatter.placeLink) {
            _push(`<a${ssrRenderAttr("href", __props.frontmatter.placeLink)} target="_blank">${ssrInterpolate(__props.frontmatter.place)}</a>`);
          } else {
            _push(`<span font-bold>${ssrInterpolate(__props.frontmatter.place)}</span>`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.subtitle) {
          _push(`<p class="slide-enter italic opacity-50 !-mt-6">${ssrInterpolate(__props.frontmatter.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.draft) {
          _push(`<p class="slide-enter" border="l-3 orange-4" bg-orange-4:10 px4 py2 text-orange-4> This is a draft post, the content may be incomplete. Please check back later. </p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<article class="${ssrRenderClass([__props.frontmatter.tocAlwaysOn ? "toc-always-on" : "", __props.frontmatter.class])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
      if (unref(route).path !== "/") {
        _push(`<div class="slide-enter m-auto mb-8 mt-8 animate-delay-500 prose print:hidden"><span font-mono op50>&gt; </span>`);
        _push(ssrRenderComponent(_component_RouterLink, {
          to: unref(route).path.split("/").slice(0, -1).join("/") || "/",
          class: "font-mono op50 hover:op75"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/WrapperPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  isSameYear as a,
  formatDate as f,
  getYear as g,
  isFuture as i
};
