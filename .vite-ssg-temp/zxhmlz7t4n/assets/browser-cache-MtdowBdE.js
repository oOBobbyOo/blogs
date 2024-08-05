import { createTextVNode, createVNode, mergeProps, useSSRContext, withCtx } from 'vue'
import { ssrRenderComponent } from 'vue/server-renderer'
import { useHead } from '@unhead/vue'
import { _ as _sfc_main$1 } from './WrapperPost-bPrDeG4J.js'
import 'dayjs'
import 'vue-router'
import 'unplugin-vue-router/runtime'
import 'unplugin-vue-router/data-loaders/basic'

const _sfc_main = {
  __name: 'browser-cache',
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { title: '强缓存和协商缓存', description: '详解浏览器中的强缓存和协商缓存', date: '2022-07-05T03:44:00.000Z', lang: 'zh', duration: '10min', art: 'particles', meta: [{ property: 'og:title', content: '强缓存和协商缓存' }, { name: 'twitter:title', content: '强缓存和协商缓存' }, { name: 'description', content: '详解浏览器中的强缓存和协商缓存' }, { property: 'og:description', content: '详解浏览器中的强缓存和协商缓存' }, { name: 'twitter:description', content: '详解浏览器中的强缓存和协商缓存' }] }
    const head = { title: '强缓存和协商缓存', meta: [{ property: 'og:title', content: '强缓存和协商缓存' }, { name: 'twitter:title', content: '强缓存和协商缓存' }, { name: 'description', content: '详解浏览器中的强缓存和协商缓存' }, { property: 'og:description', content: '详解浏览器中的强缓存和协商缓存' }, { name: 'twitter:description', content: '详解浏览器中的强缓存和协商缓存' }] }
    useHead(head)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h2 id="强缓存" tabindex="-1"${_scopeId}>强缓存 <a class="header-anchor" href="#强缓存" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="概念" tabindex="-1"${_scopeId}>概念 <a class="header-anchor" href="#概念" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>强缓存指的是在缓存有效期内，不需要向服务器发送请求，直接从缓存中读取资源。这意味着在缓存有效期内，浏览器直接使用缓存的资源，不会与服务器通信。</p><h3 id="好处" tabindex="-1"${_scopeId}>好处 <a class="header-anchor" href="#好处" aria-hidden="true"${_scopeId}>#</a></h3><ol${_scopeId}><li${_scopeId}>减少服务器负载：减少了不必要的请求，服务器负载显著降低。</li><li${_scopeId}>提高页面加载速度：资源直接从本地缓存中读取，减少了网络延迟，页面加载速度更快。</li><li${_scopeId}>节省带宽：避免重复下载相同的资源，节省了带宽资源。</li><li${_scopeId}>改善用户体验：快速的页面加载提高了用户满意度和留存率。</li></ol><h3 id="如何开启" tabindex="-1"${_scopeId}>如何开启 <a class="header-anchor" href="#如何开启" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>强缓存主要通过 HTTP 响应头中的 Expires 和 Cache-Control 属性来实现。这些属性是由服务器在响应中设置的，并指示浏览器如何缓存资源。</p><h3 id="详细说明" tabindex="-1"${_scopeId}>详细说明 <a class="header-anchor" href="#详细说明" aria-hidden="true"${_scopeId}>#</a></h3><h4 id="expires" tabindex="-1"${_scopeId}>Expires <a class="header-anchor" href="#expires" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}>描述：http 1.0 的规范，它的值为一个绝对时间的GMT格式的时间字符串。</li><li${_scopeId}>作用：这个时间代表着这个资源的失效时间，在此时间之前，即命中缓存，缓存的资源被认为是有效的。这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当服务器与客户端时间偏差较大时，就会导致缓存混乱。</li><li${_scopeId}>位置：响应头</li><li${_scopeId}>例子：Expires: Fri, 05 Jul 2024 10:58:00 GMT</li></ul><h4 id="cache-control" tabindex="-1"${_scopeId}>Cache-Control <a class="header-anchor" href="#cache-control" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}><p${_scopeId}>描述：http 1.1 的规范，优先级高于 Expires，表示的是相对时间。</p></li><li${_scopeId}><p${_scopeId}>作用：更现代、更灵活的缓存控制方式，可以定义更细粒度的缓存策略，主要是利用该字段的 max-age 值来进行判断缓存是否过期。</p></li><li${_scopeId}><p${_scopeId}>位置：响应头</p></li><li${_scopeId}><p${_scopeId}>例子：Cache-Control: max-age=315360000</p></li><li${_scopeId}><p${_scopeId}>常用指令：</p><p${_scopeId}><strong${_scopeId}>max-age：</strong> 相对时间，以秒为单位。例如：Cache-Control: max-age=3600 表示资源可以缓存 3600 秒（1 小时）。 <br${_scopeId}><strong${_scopeId}>no-cache：</strong> 不使用强缓存，每次都要向服务器发送请求以确认资源是否改变。 <br${_scopeId}><strong${_scopeId}>no-store：</strong> 不缓存资源，完全禁用缓存。 <br${_scopeId}><strong${_scopeId}>public：</strong> 表示响应可以被任何缓存存储（包括浏览器和中间代理服务器）。 <br${_scopeId}><strong${_scopeId}>private：</strong> 表示响应只能被单个用户的浏览器缓存，不允许代理缓存。 <br${_scopeId}></p></li></ul><h2 id="协商缓存" tabindex="-1"${_scopeId}>协商缓存 <a class="header-anchor" href="#协商缓存" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="概念-1" tabindex="-1"${_scopeId}>概念 <a class="header-anchor" href="#概念-1" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>协商缓存需要客户端和服务器之间的交互。当缓存资源过期时，客户端会向服务器发送请求，服务器根据请求头中的信息判断客户端缓存的资源是否仍然有效。</p><h3 id="好处-1" tabindex="-1"${_scopeId}>好处 <a class="header-anchor" href="#好处-1" aria-hidden="true"${_scopeId}>#</a></h3><ol${_scopeId}><li${_scopeId}>节省带宽：对于未修改的资源，服务器只返回状态码而不发送资源内容，节省了带宽。</li><li${_scopeId}>减少延迟：即使需要与服务器通信，304 响应也比完全下载新的资源更快。</li><li${_scopeId}>保持资源最新：确保浏览器使用的是最新版本的资源，提高了数据的一致性和可靠性。</li><li${_scopeId}>平衡性能与新鲜度：在减少不必要请求的同时，确保资源的实时更新。</li></ol><h3 id="如何开启-1" tabindex="-1"${_scopeId}>如何开启 <a class="header-anchor" href="#如何开启-1" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>协商缓存使用的主要属性是服务器返回的 Last-Modified 和 ETag，而在下次请求时会使用 If-Modified-Since 和 If-None-Match， 它们的值在实现协商缓存时起着关键作用。</p><h3 id="详细说明-1" tabindex="-1"${_scopeId}>详细说明 <a class="header-anchor" href="#详细说明-1" aria-hidden="true"${_scopeId}>#</a></h3><h4 id="last-modified-（服务器响应）" tabindex="-1"${_scopeId}>Last-Modified:（服务器响应） <a class="header-anchor" href="#last-modified-（服务器响应）" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}>含义: 资源的最后修改时间。</li><li${_scopeId}>格式: 一个 GMT 格式的时间字符串。</li><li${_scopeId}>示例: Last-Modified: Fri, 05 Jul 2024 12:01:11 GMT</li><li${_scopeId}>备注：和 If-Modified-Since 配合使用</li></ul><h4 id="if-modified-since-（请求头携带）" tabindex="-1"${_scopeId}>If-Modified-Since:（请求头携带） <a class="header-anchor" href="#if-modified-since-（请求头携带）" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}>含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 Last-Modified 值。</li><li${_scopeId}>用途: 服务器根据这个值判断资源是否有更新。</li></ul><h4 id="etag-（服务器响应）" tabindex="-1"${_scopeId}>ETag:（服务器响应） <a class="header-anchor" href="#etag-（服务器响应）" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}>含义: 资源的唯一标识符，通常是资源内容的哈希值或版本号。</li><li${_scopeId}>示例: ETag: &quot;33a64df551425fcc55e4d42a148795d9f25f89d4&quot;</li><li${_scopeId}>备注：和 If-None-Match 配合使用</li></ul><h4 id="if-none-match-（请求头携带，优先级更高）" tabindex="-1"${_scopeId}>If-None-Match: （请求头携带，优先级更高） <a class="header-anchor" href="#if-none-match-（请求头携带，优先级更高）" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}>含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 ETag 值。</li><li${_scopeId}>用途: 服务器根据这个值判断资源是否有更新。</li></ul><h3 id="协商缓存的工作流程" tabindex="-1"${_scopeId}>协商缓存的工作流程 <a class="header-anchor" href="#协商缓存的工作流程" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><strong${_scopeId}>首次请求：</strong> 浏览器请求资源，服务器返回资源内容以及 Last-Modified 和/或 ETag。<br${_scopeId}><strong${_scopeId}>后续请求：</strong> 浏览器再次请求该资源时，会带上 If-Modified-Since 和/或 If-None-Match 请求头。（当资源被缓存后，浏览器会根据之前服务器响应中的缓存头信息，在后续请求中自动添加这些请求头，以实现协商缓存机制。）<br${_scopeId}><strong${_scopeId}>服务器响应：</strong> 如果资源未修改，服务器返回 304 Not Modified 状态码，不包含消息体，浏览器继续使用缓存资源。<br${_scopeId}></p><p${_scopeId}>如果资源已修改，服务器返回 200 OK 状态码和新的资源内容，同时更新 Last-Modified 和/或 ETag。</p><h3 id="优先级" tabindex="-1"${_scopeId}>优先级 <a class="header-anchor" href="#优先级" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}>服务器首先会检查If-None-Match中的 ETag 值是否与服务器上该资源的当前 ETag 值匹配。</li><li${_scopeId}>如果 ETag 匹配成功（即资源内容未发生变化），服务器会返回 304 Not Modified 状态码，并结束响应，不再检查Last-Modified。</li><li${_scopeId}>如果ETag匹配失败（即资源内容可能发生变化），服务器会继续检查If-Modified-Since中的 Last-Modified值（这提供了一个&quot;双重检查&quot;的机制，有助于在各种情况下优化资源传输）。</li><li${_scopeId}>ETag 的优先级高于Last-Modified。这是因为 ETag 是基于资源内容生成的唯一标识符，能够更加准确地反映资源是否发生变化。而 Last-Modified 只是记录了资源最后修改的时间戳，可能会因为某些原因（如服务器时间设置不准确、文件被定期生成但内容未变等）而导致不准确。</li></ul><h2 id="综合对比" tabindex="-1"${_scopeId}>综合对比 <a class="header-anchor" href="#综合对比" aria-hidden="true"${_scopeId}>#</a></h2><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>特性/机 制</th><th${_scopeId}>强缓存</th><th${_scopeId}>协商缓存</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>定义</td><td${_scopeId}>浏览器直接从缓存中读取资源，无需与服务器通信</td><td${_scopeId}>浏览器向服务器验证缓存资源的有效性</td></tr><tr${_scopeId}><td${_scopeId}>实现方式</td><td${_scopeId}>HTTP 头信息中的 Expires 和 Cache-Control</td><td${_scopeId}>HTTP 头信息中的 Last-Modified 和 ETag</td></tr><tr${_scopeId}><td${_scopeId}>响应头</td><td${_scopeId}>Expires, Cache-Control</td><td${_scopeId}>ETag, Last-Modified</td></tr><tr${_scopeId}><td${_scopeId}>请求头</td><td${_scopeId}>无需特定请求头</td><td${_scopeId}>If-None-Match, If-Modified-Since</td></tr><tr${_scopeId}><td${_scopeId}>匹配优先级</td><td${_scopeId}>无</td><td${_scopeId}>ETag 优先级高于 Last-Modified</td></tr><tr${_scopeId}><td${_scopeId}>匹配原理</td><td${_scopeId}>根据缓存有效期直接使用缓存</td><td${_scopeId}>浏览器发送上次接收的 ETag 或 Last-Modified，服务器比较并返回 304 或 200</td></tr><tr${_scopeId}><td${_scopeId}>处理流程</td><td${_scopeId}>浏览器检查缓存有效期，若有效直接使用</td><td${_scopeId}>浏览器请求资源时，发送 If-None-Match 和 If-Modified-Since，服务器根据 ETag 和 Last-Modified 判断是否返回 304 或 200</td></tr><tr${_scopeId}><td${_scopeId}>典型场景</td><td${_scopeId}>静态资源如图片、CSS、JS 文件</td><td${_scopeId}>动态资源或频繁更新的资源</td></tr><tr${_scopeId}><td${_scopeId}>缓存控制</td><td${_scopeId}>由浏览器控制，依赖于缓存策略和有效期</td><td${_scopeId}>由服务器控制，通过生成和验证 ETag 和 Last-Modified 实现</td></tr><tr${_scopeId}><td${_scopeId}>优先级处理</td><td${_scopeId}>不涉及优先级</td><td${_scopeId}>服务器优先检查 If-None-Match，ETag 不匹配时直接返回 200，不再检查 If-Modified-Since</td></tr><tr${_scopeId}><td${_scopeId}>资源变化检测</td><td${_scopeId}>依赖于缓存时间，不检测内容变化</td><td${_scopeId}>基于内容 (ETag) 或修改时间 (Last-Modified) 检测资源变化</td></tr><tr${_scopeId}><td${_scopeId}>缓存策略</td><td${_scopeId}>通过设置缓存有效期控制</td><td${_scopeId}>通过服务器和浏览器间的缓存验证控制</td></tr><tr${_scopeId}><td${_scopeId}>优势</td><td${_scopeId}>减少网络请求，提升加载速度</td><td${_scopeId}>确保资源最新状态，节省带宽</td></tr><tr${_scopeId}><td${_scopeId}>劣势</td><td${_scopeId}>可能使用过期的缓存，无法实时更新</td><td${_scopeId}>增加请求开销，需要服务器支持</td></tr></tbody></table></div>`)
          }
          else {
            return [
              createVNode('div', { class: 'prose m-auto slide-enter-content' }, [
                createVNode('h2', {
                  id: '强缓存',
                  tabindex: '-1',
                }, [
                  createTextVNode('强缓存 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#强缓存',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('h3', {
                  id: '概念',
                  tabindex: '-1',
                }, [
                  createTextVNode('概念 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#概念',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('p', null, '强缓存指的是在缓存有效期内，不需要向服务器发送请求，直接从缓存中读取资源。这意味着在缓存有效期内，浏览器直接使用缓存的资源，不会与服务器通信。'),
                createVNode('h3', {
                  id: '好处',
                  tabindex: '-1',
                }, [
                  createTextVNode('好处 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#好处',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ol', null, [
                  createVNode('li', null, '减少服务器负载：减少了不必要的请求，服务器负载显著降低。'),
                  createVNode('li', null, '提高页面加载速度：资源直接从本地缓存中读取，减少了网络延迟，页面加载速度更快。'),
                  createVNode('li', null, '节省带宽：避免重复下载相同的资源，节省了带宽资源。'),
                  createVNode('li', null, '改善用户体验：快速的页面加载提高了用户满意度和留存率。'),
                ]),
                createVNode('h3', {
                  id: '如何开启',
                  tabindex: '-1',
                }, [
                  createTextVNode('如何开启 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#如何开启',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('p', null, '强缓存主要通过 HTTP 响应头中的 Expires 和 Cache-Control 属性来实现。这些属性是由服务器在响应中设置的，并指示浏览器如何缓存资源。'),
                createVNode('h3', {
                  id: '详细说明',
                  tabindex: '-1',
                }, [
                  createTextVNode('详细说明 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#详细说明',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('h4', {
                  id: 'expires',
                  tabindex: '-1',
                }, [
                  createTextVNode('Expires '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#expires',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '描述：http 1.0 的规范，它的值为一个绝对时间的GMT格式的时间字符串。'),
                  createVNode('li', null, '作用：这个时间代表着这个资源的失效时间，在此时间之前，即命中缓存，缓存的资源被认为是有效的。这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当服务器与客户端时间偏差较大时，就会导致缓存混乱。'),
                  createVNode('li', null, '位置：响应头'),
                  createVNode('li', null, '例子：Expires: Fri, 05 Jul 2024 10:58:00 GMT'),
                ]),
                createVNode('h4', {
                  id: 'cache-control',
                  tabindex: '-1',
                }, [
                  createTextVNode('Cache-Control '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#cache-control',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, [
                    createVNode('p', null, '描述：http 1.1 的规范，优先级高于 Expires，表示的是相对时间。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('p', null, '作用：更现代、更灵活的缓存控制方式，可以定义更细粒度的缓存策略，主要是利用该字段的 max-age 值来进行判断缓存是否过期。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('p', null, '位置：响应头'),
                  ]),
                  createVNode('li', null, [
                    createVNode('p', null, '例子：Cache-Control: max-age=315360000'),
                  ]),
                  createVNode('li', null, [
                    createVNode('p', null, '常用指令：'),
                    createVNode('p', null, [
                      createVNode('strong', null, 'max-age：'),
                      createTextVNode(' 相对时间，以秒为单位。例如：Cache-Control: max-age=3600 表示资源可以缓存 3600 秒（1 小时）。 '),
                      createVNode('br'),
                      createVNode('strong', null, 'no-cache：'),
                      createTextVNode(' 不使用强缓存，每次都要向服务器发送请求以确认资源是否改变。 '),
                      createVNode('br'),
                      createVNode('strong', null, 'no-store：'),
                      createTextVNode(' 不缓存资源，完全禁用缓存。 '),
                      createVNode('br'),
                      createVNode('strong', null, 'public：'),
                      createTextVNode(' 表示响应可以被任何缓存存储（包括浏览器和中间代理服务器）。 '),
                      createVNode('br'),
                      createVNode('strong', null, 'private：'),
                      createTextVNode(' 表示响应只能被单个用户的浏览器缓存，不允许代理缓存。 '),
                      createVNode('br'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: '协商缓存',
                  tabindex: '-1',
                }, [
                  createTextVNode('协商缓存 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#协商缓存',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('h3', {
                  id: '概念-1',
                  tabindex: '-1',
                }, [
                  createTextVNode('概念 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#概念-1',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('p', null, '协商缓存需要客户端和服务器之间的交互。当缓存资源过期时，客户端会向服务器发送请求，服务器根据请求头中的信息判断客户端缓存的资源是否仍然有效。'),
                createVNode('h3', {
                  id: '好处-1',
                  tabindex: '-1',
                }, [
                  createTextVNode('好处 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#好处-1',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ol', null, [
                  createVNode('li', null, '节省带宽：对于未修改的资源，服务器只返回状态码而不发送资源内容，节省了带宽。'),
                  createVNode('li', null, '减少延迟：即使需要与服务器通信，304 响应也比完全下载新的资源更快。'),
                  createVNode('li', null, '保持资源最新：确保浏览器使用的是最新版本的资源，提高了数据的一致性和可靠性。'),
                  createVNode('li', null, '平衡性能与新鲜度：在减少不必要请求的同时，确保资源的实时更新。'),
                ]),
                createVNode('h3', {
                  id: '如何开启-1',
                  tabindex: '-1',
                }, [
                  createTextVNode('如何开启 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#如何开启-1',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('p', null, '协商缓存使用的主要属性是服务器返回的 Last-Modified 和 ETag，而在下次请求时会使用 If-Modified-Since 和 If-None-Match， 它们的值在实现协商缓存时起着关键作用。'),
                createVNode('h3', {
                  id: '详细说明-1',
                  tabindex: '-1',
                }, [
                  createTextVNode('详细说明 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#详细说明-1',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('h4', {
                  id: 'last-modified-（服务器响应）',
                  tabindex: '-1',
                }, [
                  createTextVNode('Last-Modified:（服务器响应） '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#last-modified-（服务器响应）',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '含义: 资源的最后修改时间。'),
                  createVNode('li', null, '格式: 一个 GMT 格式的时间字符串。'),
                  createVNode('li', null, '示例: Last-Modified: Fri, 05 Jul 2024 12:01:11 GMT'),
                  createVNode('li', null, '备注：和 If-Modified-Since 配合使用'),
                ]),
                createVNode('h4', {
                  id: 'if-modified-since-（请求头携带）',
                  tabindex: '-1',
                }, [
                  createTextVNode('If-Modified-Since:（请求头携带） '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#if-modified-since-（请求头携带）',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 Last-Modified 值。'),
                  createVNode('li', null, '用途: 服务器根据这个值判断资源是否有更新。'),
                ]),
                createVNode('h4', {
                  id: 'etag-（服务器响应）',
                  tabindex: '-1',
                }, [
                  createTextVNode('ETag:（服务器响应） '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#etag-（服务器响应）',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '含义: 资源的唯一标识符，通常是资源内容的哈希值或版本号。'),
                  createVNode('li', null, '示例: ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"'),
                  createVNode('li', null, '备注：和 If-None-Match 配合使用'),
                ]),
                createVNode('h4', {
                  id: 'if-none-match-（请求头携带，优先级更高）',
                  tabindex: '-1',
                }, [
                  createTextVNode('If-None-Match: （请求头携带，优先级更高） '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#if-none-match-（请求头携带，优先级更高）',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 ETag 值。'),
                  createVNode('li', null, '用途: 服务器根据这个值判断资源是否有更新。'),
                ]),
                createVNode('h3', {
                  id: '协商缓存的工作流程',
                  tabindex: '-1',
                }, [
                  createTextVNode('协商缓存的工作流程 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#协商缓存的工作流程',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('p', null, [
                  createVNode('strong', null, '首次请求：'),
                  createTextVNode(' 浏览器请求资源，服务器返回资源内容以及 Last-Modified 和/或 ETag。'),
                  createVNode('br'),
                  createVNode('strong', null, '后续请求：'),
                  createTextVNode(' 浏览器再次请求该资源时，会带上 If-Modified-Since 和/或 If-None-Match 请求头。（当资源被缓存后，浏览器会根据之前服务器响应中的缓存头信息，在后续请求中自动添加这些请求头，以实现协商缓存机制。）'),
                  createVNode('br'),
                  createVNode('strong', null, '服务器响应：'),
                  createTextVNode(' 如果资源未修改，服务器返回 304 Not Modified 状态码，不包含消息体，浏览器继续使用缓存资源。'),
                  createVNode('br'),
                ]),
                createVNode('p', null, '如果资源已修改，服务器返回 200 OK 状态码和新的资源内容，同时更新 Last-Modified 和/或 ETag。'),
                createVNode('h3', {
                  id: '优先级',
                  tabindex: '-1',
                }, [
                  createTextVNode('优先级 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#优先级',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, '服务器首先会检查If-None-Match中的 ETag 值是否与服务器上该资源的当前 ETag 值匹配。'),
                  createVNode('li', null, '如果 ETag 匹配成功（即资源内容未发生变化），服务器会返回 304 Not Modified 状态码，并结束响应，不再检查Last-Modified。'),
                  createVNode('li', null, '如果ETag匹配失败（即资源内容可能发生变化），服务器会继续检查If-Modified-Since中的 Last-Modified值（这提供了一个"双重检查"的机制，有助于在各种情况下优化资源传输）。'),
                  createVNode('li', null, 'ETag 的优先级高于Last-Modified。这是因为 ETag 是基于资源内容生成的唯一标识符，能够更加准确地反映资源是否发生变化。而 Last-Modified 只是记录了资源最后修改的时间戳，可能会因为某些原因（如服务器时间设置不准确、文件被定期生成但内容未变等）而导致不准确。'),
                ]),
                createVNode('h2', {
                  id: '综合对比',
                  tabindex: '-1',
                }, [
                  createTextVNode('综合对比 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#综合对比',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('table', null, [
                  createVNode('thead', null, [
                    createVNode('tr', null, [
                      createVNode('th', null, '特性/机 制'),
                      createVNode('th', null, '强缓存'),
                      createVNode('th', null, '协商缓存'),
                    ]),
                  ]),
                  createVNode('tbody', null, [
                    createVNode('tr', null, [
                      createVNode('td', null, '定义'),
                      createVNode('td', null, '浏览器直接从缓存中读取资源，无需与服务器通信'),
                      createVNode('td', null, '浏览器向服务器验证缓存资源的有效性'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '实现方式'),
                      createVNode('td', null, 'HTTP 头信息中的 Expires 和 Cache-Control'),
                      createVNode('td', null, 'HTTP 头信息中的 Last-Modified 和 ETag'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '响应头'),
                      createVNode('td', null, 'Expires, Cache-Control'),
                      createVNode('td', null, 'ETag, Last-Modified'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '请求头'),
                      createVNode('td', null, '无需特定请求头'),
                      createVNode('td', null, 'If-None-Match, If-Modified-Since'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '匹配优先级'),
                      createVNode('td', null, '无'),
                      createVNode('td', null, 'ETag 优先级高于 Last-Modified'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '匹配原理'),
                      createVNode('td', null, '根据缓存有效期直接使用缓存'),
                      createVNode('td', null, '浏览器发送上次接收的 ETag 或 Last-Modified，服务器比较并返回 304 或 200'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '处理流程'),
                      createVNode('td', null, '浏览器检查缓存有效期，若有效直接使用'),
                      createVNode('td', null, '浏览器请求资源时，发送 If-None-Match 和 If-Modified-Since，服务器根据 ETag 和 Last-Modified 判断是否返回 304 或 200'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '典型场景'),
                      createVNode('td', null, '静态资源如图片、CSS、JS 文件'),
                      createVNode('td', null, '动态资源或频繁更新的资源'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '缓存控制'),
                      createVNode('td', null, '由浏览器控制，依赖于缓存策略和有效期'),
                      createVNode('td', null, '由服务器控制，通过生成和验证 ETag 和 Last-Modified 实现'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '优先级处理'),
                      createVNode('td', null, '不涉及优先级'),
                      createVNode('td', null, '服务器优先检查 If-None-Match，ETag 不匹配时直接返回 200，不再检查 If-Modified-Since'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '资源变化检测'),
                      createVNode('td', null, '依赖于缓存时间，不检测内容变化'),
                      createVNode('td', null, '基于内容 (ETag) 或修改时间 (Last-Modified) 检测资源变化'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '缓存策略'),
                      createVNode('td', null, '通过设置缓存有效期控制'),
                      createVNode('td', null, '通过服务器和浏览器间的缓存验证控制'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '优势'),
                      createVNode('td', null, '减少网络请求，提升加载速度'),
                      createVNode('td', null, '确保资源最新状态，节省带宽'),
                    ]),
                    createVNode('tr', null, [
                      createVNode('td', null, '劣势'),
                      createVNode('td', null, '可能使用过期的缓存，无法实时更新'),
                      createVNode('td', null, '增加请求开销，需要服务器支持'),
                    ]),
                  ]),
                ]),
              ]),
            ]
          }
        }),
        _: 1,
      }, _parent))
    }
  },
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/pages/posts/browser-cache.md')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
export {
  _sfc_main as default,
}
