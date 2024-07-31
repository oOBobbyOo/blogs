import { _ as _sfc_main$1 } from "./WrapperPost-bPrDeG4J.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "dayjs";
import "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
const _sfc_main = {
  __name: "set-map",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "Set、Map、WeakSet、WeakMap", "description": "Set、Map、WeakSet 和 WeakMap 的区别", "date": "2023-07-09T03:55:00.000Z", "lang": "zh", "duration": "6min", "art": "particles", "meta": [{ "property": "og:title", "content": "Set、Map、WeakSet、WeakMap" }, { "name": "twitter:title", "content": "Set、Map、WeakSet、WeakMap" }, { "name": "description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }, { "property": "og:description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }, { "name": "twitter:description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }] };
    const head = { "title": "Set、Map、WeakSet、WeakMap", "meta": [{ "property": "og:title", "content": "Set、Map、WeakSet、WeakMap" }, { "name": "twitter:title", "content": "Set、Map、WeakSet、WeakMap" }, { "name": "description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }, { "property": "og:description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }, { "name": "twitter:description", "content": "Set、Map、WeakSet 和 WeakMap 的区别" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h2 id="set" tabindex="-1"${_scopeId}>Set <a class="header-anchor" href="#set" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="定义" tabindex="-1"${_scopeId}>定义 <a class="header-anchor" href="#定义" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank" rel="noopener"${_scopeId}>Set</a> 是一种值的合集（collection）。集合（set）中的元素只会出现一次，即集合中的元素是唯一的。</p><h3 id="特点" tabindex="-1"${_scopeId}>特点 <a class="header-anchor" href="#特点" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}>成员唯一、无序且不重复。</li><li${_scopeId}>[value, value]，键值与键名是一致的（或者说只有键值，没有键名）。</li><li${_scopeId}>允许储存任何类型的唯一值，无论是原始值或者是对象引用。</li><li${_scopeId}>可以遍历，可以for…of循环，方法有 keys、 values、entries、forEach。</li><li${_scopeId}>Set 有 size 属性。</li><li${_scopeId}>方法有 add、delete、has、clear。</li></ul><h2 id="map" tabindex="-1"${_scopeId}>Map <a class="header-anchor" href="#map" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="定义-1" tabindex="-1"${_scopeId}>定义 <a class="header-anchor" href="#定义-1" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noopener"${_scopeId}>Map</a> 是一种键值对的集合（collection）。键可以是任意类型，包括对象类型。Map 对象中的键值对是无序的，但是可以通过键来快速查找对应的值。</p><h3 id="特点-1" tabindex="-1"${_scopeId}>特点 <a class="header-anchor" href="#特点-1" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}>键值对集合，键可以是任意类型。</li><li${_scopeId}>键值对是无序的，但是可以通过键来快速查找对应的值。</li><li${_scopeId}>可以遍历，可以for…of循环，方法有 keys、values、entries、forEach。</li><li${_scopeId}>Map 有 size 属性。</li><li${_scopeId}>方法有 set、get、has、delete、clear。</li></ul><h2 id="weakset" tabindex="-1"${_scopeId}>WeakSet <a class="header-anchor" href="#weakset" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="定义-2" tabindex="-1"${_scopeId}>定义 <a class="header-anchor" href="#定义-2" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" target="_blank" rel="noopener"${_scopeId}>WeakSet</a> 是一种集合类型的数据结构，它的成员只能是对象，并且这些对象是弱引用的。这意味着如果对象除了在 WeakSet 中以外没有其他引用，那么它可能会被垃圾回收器回收，即使它仍然在 WeakSet 中。</p><h3 id="特点-2" tabindex="-1"${_scopeId}>特点 <a class="header-anchor" href="#特点-2" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}>成员只能是对象，不能是其他类型的值。</li><li${_scopeId}>成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏。</li><li${_scopeId}>没有遍历操作，不能和 for…of 循环一起使用。</li><li${_scopeId}>WeakSet 没有 size 属性。</li><li${_scopeId}>方法有 add、delete、has。</li></ul><h2 id="weakmap" tabindex="-1"${_scopeId}>WeakMap <a class="header-anchor" href="#weakmap" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="定义-3" tabindex="-1"${_scopeId}>定义 <a class="header-anchor" href="#定义-3" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" target="_blank" rel="noopener"${_scopeId}>WeakMap</a> 和Map结构相似，但它的键必须是对象，而值可以是任意类型。WeakMap 的键是弱引用的，这意味着如果一个对象除了作为 WeakMap 的键以外没有其他引用，那么这个键和它对应的值都会被垃圾回收。</p><h3 id="特点-3" tabindex="-1"${_scopeId}>特点 <a class="header-anchor" href="#特点-3" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}>只接受对象作为键名（null 除外），不接受其他类型的值作为键名。</li><li${_scopeId}>键名是弱引用，键名对应的对象可以被垃圾回收，当键名对象被回收后，键名自动删除。</li><li${_scopeId}>没有遍历操作，不能和 for…of 循环一起使用。</li><li${_scopeId}>WeakMap 没有 size 属性。</li><li${_scopeId}>方法有 get、set、has、delete。</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h2", {
                  id: "set",
                  tabindex: "-1"
                }, [
                  createTextVNode("Set "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#set",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("h3", {
                  id: "定义",
                  tabindex: "-1"
                }, [
                  createTextVNode("定义 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#定义",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set",
                    target: "_blank",
                    rel: "noopener"
                  }, "Set"),
                  createTextVNode(" 是一种值的合集（collection）。集合（set）中的元素只会出现一次，即集合中的元素是唯一的。")
                ]),
                createVNode("h3", {
                  id: "特点",
                  tabindex: "-1"
                }, [
                  createTextVNode("特点 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#特点",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, "成员唯一、无序且不重复。"),
                  createVNode("li", null, "[value, value]，键值与键名是一致的（或者说只有键值，没有键名）。"),
                  createVNode("li", null, "允许储存任何类型的唯一值，无论是原始值或者是对象引用。"),
                  createVNode("li", null, "可以遍历，可以for…of循环，方法有 keys、 values、entries、forEach。"),
                  createVNode("li", null, "Set 有 size 属性。"),
                  createVNode("li", null, "方法有 add、delete、has、clear。")
                ]),
                createVNode("h2", {
                  id: "map",
                  tabindex: "-1"
                }, [
                  createTextVNode("Map "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#map",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("h3", {
                  id: "定义-1",
                  tabindex: "-1"
                }, [
                  createTextVNode("定义 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#定义-1",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map",
                    target: "_blank",
                    rel: "noopener"
                  }, "Map"),
                  createTextVNode(" 是一种键值对的集合（collection）。键可以是任意类型，包括对象类型。Map 对象中的键值对是无序的，但是可以通过键来快速查找对应的值。")
                ]),
                createVNode("h3", {
                  id: "特点-1",
                  tabindex: "-1"
                }, [
                  createTextVNode("特点 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#特点-1",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, "键值对集合，键可以是任意类型。"),
                  createVNode("li", null, "键值对是无序的，但是可以通过键来快速查找对应的值。"),
                  createVNode("li", null, "可以遍历，可以for…of循环，方法有 keys、values、entries、forEach。"),
                  createVNode("li", null, "Map 有 size 属性。"),
                  createVNode("li", null, "方法有 set、get、has、delete、clear。")
                ]),
                createVNode("h2", {
                  id: "weakset",
                  tabindex: "-1"
                }, [
                  createTextVNode("WeakSet "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#weakset",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("h3", {
                  id: "定义-2",
                  tabindex: "-1"
                }, [
                  createTextVNode("定义 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#定义-2",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
                    target: "_blank",
                    rel: "noopener"
                  }, "WeakSet"),
                  createTextVNode(" 是一种集合类型的数据结构，它的成员只能是对象，并且这些对象是弱引用的。这意味着如果对象除了在 WeakSet 中以外没有其他引用，那么它可能会被垃圾回收器回收，即使它仍然在 WeakSet 中。")
                ]),
                createVNode("h3", {
                  id: "特点-2",
                  tabindex: "-1"
                }, [
                  createTextVNode("特点 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#特点-2",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, "成员只能是对象，不能是其他类型的值。"),
                  createVNode("li", null, "成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏。"),
                  createVNode("li", null, "没有遍历操作，不能和 for…of 循环一起使用。"),
                  createVNode("li", null, "WeakSet 没有 size 属性。"),
                  createVNode("li", null, "方法有 add、delete、has。")
                ]),
                createVNode("h2", {
                  id: "weakmap",
                  tabindex: "-1"
                }, [
                  createTextVNode("WeakMap "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#weakmap",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("h3", {
                  id: "定义-3",
                  tabindex: "-1"
                }, [
                  createTextVNode("定义 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#定义-3",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
                    target: "_blank",
                    rel: "noopener"
                  }, "WeakMap"),
                  createTextVNode(" 和Map结构相似，但它的键必须是对象，而值可以是任意类型。WeakMap 的键是弱引用的，这意味着如果一个对象除了作为 WeakMap 的键以外没有其他引用，那么这个键和它对应的值都会被垃圾回收。")
                ]),
                createVNode("h3", {
                  id: "特点-3",
                  tabindex: "-1"
                }, [
                  createTextVNode("特点 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#特点-3",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, "只接受对象作为键名（null 除外），不接受其他类型的值作为键名。"),
                  createVNode("li", null, "键名是弱引用，键名对应的对象可以被垃圾回收，当键名对象被回收后，键名自动删除。"),
                  createVNode("li", null, "没有遍历操作，不能和 for…of 循环一起使用。"),
                  createVNode("li", null, "WeakMap 没有 size 属性。"),
                  createVNode("li", null, "方法有 get、set、has、delete。")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/set-map.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
