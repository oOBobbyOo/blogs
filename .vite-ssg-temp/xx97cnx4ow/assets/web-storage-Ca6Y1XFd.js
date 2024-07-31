import { _ as _sfc_main$1 } from "./WrapperPost-bPrDeG4J.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import "dayjs";
import "vue-router";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
const _sfc_main = {
  __name: "web-storage",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { "title": "Web Storage", "description": "Cookies、localStorage、sessionStorage 本地存储的区别", "date": "2022-07-03T02:48:00.000Z", "lang": "zh", "duration": "5min", "art": "particles", "meta": [{ "property": "og:title", "content": "Web Storage" }, { "name": "twitter:title", "content": "Web Storage" }, { "name": "description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }, { "property": "og:description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }, { "name": "twitter:description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }] };
    const head = { "title": "Web Storage", "meta": [{ "property": "og:title", "content": "Web Storage" }, { "name": "twitter:title", "content": "Web Storage" }, { "name": "description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }, { "property": "og:description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }, { "name": "twitter:description", "content": "Cookies、localStorage、sessionStorage 本地存储的区别" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1;
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h2 id="cookies" tabindex="-1"${_scopeId}>Cookies <a class="header-anchor" href="#cookies" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>定义:</strong> Cookies是存储在浏览器中的小段数据，通常用于存储用户的会话信息或者网站的状态信息。</li><li${_scopeId}><strong${_scopeId}>用途:</strong> 常用于存储用户会话、认证令牌等状态信息。</li><li${_scopeId}><strong${_scopeId}>数据格式：</strong> Cookies以键值对（key=value）的形式存储，可以附带属性如expires（过期时间）、path（路径）、domain（域名）等。</li><li${_scopeId}><strong${_scopeId}>大小限制：</strong> 单个Cookie的大小通常限制在4KB左右，且大多数浏览器对每个域名下的总Cookie数量也有限制。</li><li${_scopeId}><strong${_scopeId}>域名特定：</strong> 每个Cookie与特定的域名相关联，会随着每次HTTP请求一同发送到对应的域名。</li><li${_scopeId}><strong${_scopeId}>服务器交互性：</strong> Cookie 可由服务器设置并通过HTTP头部在客户端与服务器间传递，使得服务器能识别并追踪用户的特定会话信息。</li><li${_scopeId}><strong${_scopeId}>安全性考量：</strong> 尽管存在安全隐患，但可通过HttpOnly标志防止XSS攻击，Secure标志保证HTTPS安全传输。</li><li${_scopeId}><strong${_scopeId}>JavaScript API：</strong> 可以通过document.cookie来访问和操作Cookie。</li><li${_scopeId}><strong${_scopeId}>有效期：</strong> 可以设置过期时间（expires），或者设为会话Cookie（浏览器关闭时删除）。</li></ul><h2 id="localstorage" tabindex="-1"${_scopeId}>localStorage <a class="header-anchor" href="#localstorage" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>定义：</strong> localStorage是Web存储API的一部分，允许网站在浏览器中持久性地存储数据。</li><li${_scopeId}><strong${_scopeId}>用途：</strong> 适合存储较大量的数据，如用户偏好设置、缓存数据等。</li><li${_scopeId}><strong${_scopeId}>数据格式：</strong> localStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。</li><li${_scopeId}><strong${_scopeId}>大小限制：</strong> 通常比Cookie大，每个域名最多可存储约5MB的数据。</li><li${_scopeId}><strong${_scopeId}>安全性考量：</strong> 受同源策略限制，且不参与网络请求，适合存储非敏感数据。</li><li${_scopeId}><strong${_scopeId}>JavaScript API：</strong> 通过JavaScript的localStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。</li><li${_scopeId}><strong${_scopeId}>有效期：</strong> localStorage中的数据在用户不清除浏览器数据的情况下会持久保存。</li></ul><h2 id="sessionstorage" tabindex="-1"${_scopeId}>sessionStorage <a class="header-anchor" href="#sessionstorage" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>定义：</strong> sessionStorage是Web存储API的一部分，允许网站在浏览器中临时存储数据。</li><li${_scopeId}><strong${_scopeId}>用途：</strong> 适合存储较短时间的数据，如表单数据、临时会话信息等。</li><li${_scopeId}><strong${_scopeId}>数据格式：</strong> sessionStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。</li><li${_scopeId}><strong${_scopeId}>大小限制：</strong> 与localStorage相似，取决于浏览器。</li><li${_scopeId}><strong${_scopeId}>安全性考量：</strong> 同样遵循同源策略，不参与网络请求。</li><li${_scopeId}><strong${_scopeId}>JavaScript API：</strong> 通过JavaScript的sessionStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。</li><li${_scopeId}><strong${_scopeId}>有效期：</strong> 仅在当前浏览器会话期间有效，标签页或窗口关闭即失效。</li></ul><h2 id="区别" tabindex="-1"${_scopeId}>区别 <a class="header-anchor" href="#区别" aria-hidden="true"${_scopeId}>#</a></h2><h4 id="一、存储的时间有效期不同" tabindex="-1"${_scopeId}>一、存储的时间有效期不同 <a class="header-anchor" href="#一、存储的时间有效期不同" aria-hidden="true"${_scopeId}>#</a></h4><ol${_scopeId}><li${_scopeId}>cookie的有效期是可以设置的，默认的情况下是关闭浏览器后失效。</li><li${_scopeId}>localStorage的有效期是在不进行手动删除的情况下是一直有效的。</li><li${_scopeId}>sessionStorage的有效期是仅保持在当前页面，关闭当前会话页或者浏览器后就会失效。</li></ol><h4 id="二、存储的大小不同" tabindex="-1"${_scopeId}>二、存储的大小不同 <a class="header-anchor" href="#二、存储的大小不同" aria-hidden="true"${_scopeId}>#</a></h4><ol${_scopeId}><li${_scopeId}>cookie的存储是4KB左右，存储量较小，并且每个域名下的cookie总数也有限制。</li><li${_scopeId}>localStorage和sessionStorage的存储容量通常限制在5MB左右，可以存储更大量的数据。</li></ol><h4 id="三、与服务端的通信" tabindex="-1"${_scopeId}>三、与服务端的通信 <a class="header-anchor" href="#三、与服务端的通信" aria-hidden="true"${_scopeId}>#</a></h4><ol${_scopeId}><li${_scopeId}>cookie会参与到与服务端的通信中，一般会携带在http请求的头部中，例如一些关键密匙验证等。</li><li${_scopeId}>localStorage和sessionStorage是单纯的前端存储，不参与与服务端的通信。</li></ol><h4 id="四、作用域不同" tabindex="-1"${_scopeId}>四、作用域不同 <a class="header-anchor" href="#四、作用域不同" aria-hidden="true"${_scopeId}>#</a></h4><ol${_scopeId}><li${_scopeId}>sessionStorage不在不同浏览器中共享，即使是同一个页面。</li><li${_scopeId}>localStorage和cookie是在所有同源的窗口中都是共享的。</li></ol></div>`);
          } else {
            return [
              createVNode("div", { class: "prose m-auto slide-enter-content" }, [
                createVNode("h2", {
                  id: "cookies",
                  tabindex: "-1"
                }, [
                  createTextVNode("Cookies "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#cookies",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("strong", null, "定义:"),
                    createTextVNode(" Cookies是存储在浏览器中的小段数据，通常用于存储用户的会话信息或者网站的状态信息。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "用途:"),
                    createTextVNode(" 常用于存储用户会话、认证令牌等状态信息。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "数据格式："),
                    createTextVNode(" Cookies以键值对（key=value）的形式存储，可以附带属性如expires（过期时间）、path（路径）、domain（域名）等。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "大小限制："),
                    createTextVNode(" 单个Cookie的大小通常限制在4KB左右，且大多数浏览器对每个域名下的总Cookie数量也有限制。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "域名特定："),
                    createTextVNode(" 每个Cookie与特定的域名相关联，会随着每次HTTP请求一同发送到对应的域名。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "服务器交互性："),
                    createTextVNode(" Cookie 可由服务器设置并通过HTTP头部在客户端与服务器间传递，使得服务器能识别并追踪用户的特定会话信息。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "安全性考量："),
                    createTextVNode(" 尽管存在安全隐患，但可通过HttpOnly标志防止XSS攻击，Secure标志保证HTTPS安全传输。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "JavaScript API："),
                    createTextVNode(" 可以通过document.cookie来访问和操作Cookie。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "有效期："),
                    createTextVNode(" 可以设置过期时间（expires），或者设为会话Cookie（浏览器关闭时删除）。")
                  ])
                ]),
                createVNode("h2", {
                  id: "localstorage",
                  tabindex: "-1"
                }, [
                  createTextVNode("localStorage "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#localstorage",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("strong", null, "定义："),
                    createTextVNode(" localStorage是Web存储API的一部分，允许网站在浏览器中持久性地存储数据。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "用途："),
                    createTextVNode(" 适合存储较大量的数据，如用户偏好设置、缓存数据等。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "数据格式："),
                    createTextVNode(" localStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "大小限制："),
                    createTextVNode(" 通常比Cookie大，每个域名最多可存储约5MB的数据。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "安全性考量："),
                    createTextVNode(" 受同源策略限制，且不参与网络请求，适合存储非敏感数据。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "JavaScript API："),
                    createTextVNode(" 通过JavaScript的localStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "有效期："),
                    createTextVNode(" localStorage中的数据在用户不清除浏览器数据的情况下会持久保存。")
                  ])
                ]),
                createVNode("h2", {
                  id: "sessionstorage",
                  tabindex: "-1"
                }, [
                  createTextVNode("sessionStorage "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#sessionstorage",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ul", null, [
                  createVNode("li", null, [
                    createVNode("strong", null, "定义："),
                    createTextVNode(" sessionStorage是Web存储API的一部分，允许网站在浏览器中临时存储数据。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "用途："),
                    createTextVNode(" 适合存储较短时间的数据，如表单数据、临时会话信息等。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "数据格式："),
                    createTextVNode(" sessionStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "大小限制："),
                    createTextVNode(" 与localStorage相似，取决于浏览器。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "安全性考量："),
                    createTextVNode(" 同样遵循同源策略，不参与网络请求。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "JavaScript API："),
                    createTextVNode(" 通过JavaScript的sessionStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。")
                  ]),
                  createVNode("li", null, [
                    createVNode("strong", null, "有效期："),
                    createTextVNode(" 仅在当前浏览器会话期间有效，标签页或窗口关闭即失效。")
                  ])
                ]),
                createVNode("h2", {
                  id: "区别",
                  tabindex: "-1"
                }, [
                  createTextVNode("区别 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#区别",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("h4", {
                  id: "一、存储的时间有效期不同",
                  tabindex: "-1"
                }, [
                  createTextVNode("一、存储的时间有效期不同 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#一、存储的时间有效期不同",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ol", null, [
                  createVNode("li", null, "cookie的有效期是可以设置的，默认的情况下是关闭浏览器后失效。"),
                  createVNode("li", null, "localStorage的有效期是在不进行手动删除的情况下是一直有效的。"),
                  createVNode("li", null, "sessionStorage的有效期是仅保持在当前页面，关闭当前会话页或者浏览器后就会失效。")
                ]),
                createVNode("h4", {
                  id: "二、存储的大小不同",
                  tabindex: "-1"
                }, [
                  createTextVNode("二、存储的大小不同 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#二、存储的大小不同",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ol", null, [
                  createVNode("li", null, "cookie的存储是4KB左右，存储量较小，并且每个域名下的cookie总数也有限制。"),
                  createVNode("li", null, "localStorage和sessionStorage的存储容量通常限制在5MB左右，可以存储更大量的数据。")
                ]),
                createVNode("h4", {
                  id: "三、与服务端的通信",
                  tabindex: "-1"
                }, [
                  createTextVNode("三、与服务端的通信 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#三、与服务端的通信",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ol", null, [
                  createVNode("li", null, "cookie会参与到与服务端的通信中，一般会携带在http请求的头部中，例如一些关键密匙验证等。"),
                  createVNode("li", null, "localStorage和sessionStorage是单纯的前端存储，不参与与服务端的通信。")
                ]),
                createVNode("h4", {
                  id: "四、作用域不同",
                  tabindex: "-1"
                }, [
                  createTextVNode("四、作用域不同 "),
                  createVNode("a", {
                    class: "header-anchor",
                    href: "#四、作用域不同",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                createVNode("ol", null, [
                  createVNode("li", null, "sessionStorage不在不同浏览器中共享，即使是同一个页面。"),
                  createVNode("li", null, "localStorage和cookie是在所有同源的窗口中都是共享的。")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/posts/web-storage.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
