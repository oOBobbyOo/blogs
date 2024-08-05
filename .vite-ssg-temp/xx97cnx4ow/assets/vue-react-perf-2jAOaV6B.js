import { createTextVNode, createVNode, mergeProps, useSSRContext, withCtx } from 'vue'
import { ssrRenderComponent } from 'vue/server-renderer'
import { useHead } from '@unhead/vue'
import { _ as _sfc_main$1 } from './WrapperPost-bPrDeG4J.js'
import 'dayjs'
import 'vue-router'
import 'unplugin-vue-router/runtime'
import 'unplugin-vue-router/data-loaders/basic'

const _sfc_main = {
  __name: 'vue-react-perf',
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { title: 'Vue 和 React 如何性能优化', date: '2023-07-10T07:50:00.000Z', lang: 'zh', duration: '15min', art: 'particles', meta: [{ property: 'og:title', content: 'Vue 和 React 如何性能优化' }, { name: 'twitter:title', content: 'Vue 和 React 如何性能优化' }] }
    const head = { title: 'Vue 和 React 如何性能优化', meta: [{ property: 'og:title', content: 'Vue 和 React 如何性能优化' }, { name: 'twitter:title', content: 'Vue 和 React 如何性能优化' }] }
    useHead(head)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h2 id="公用性能优化" tabindex="-1"${_scopeId}>公用性能优化 <a class="header-anchor" href="#公用性能优化" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>减少 HTTP 请求：</strong> 合并小文件，通过合并CSS、JS文件、精灵图等方式将多个小请求合并为一个大请求，减少 HTTP 请求的数量，提高加载速度。</li><li${_scopeId}><strong${_scopeId}>使用 HTTP/2：</strong> HTTP/2 支持多路复用，可以同时发送多个请求和响应，减少请求的等待时间。</li><li${_scopeId}><strong${_scopeId}>图片资源优化：</strong> 选择合适的图片格式，如字体图标、SVG，webP和雪碧图等，对图片进行压缩，减少图片大小，提高加载速度。</li><li${_scopeId}><strong${_scopeId}>图片懒加载：</strong> 对于长列表或页面中的大量图片，使用懒加载技术，即在图片进入可视区域时才开始加载，减少初次加载时间。</li><li${_scopeId}><strong${_scopeId}>使用压缩工具：</strong> 使用工具如Webpack的UglifyJS插件或Terser插件来压缩JavaScript代码，减少文件大小，提高加载速度。</li><li${_scopeId}><strong${_scopeId}>代码分割：</strong> 通过Webpack splitChunks配置进行代码分割、Tree Shaking等，减少最终打包文件的体积。</li><li${_scopeId}><strong${_scopeId}>使用Gzip或Brotli压缩：</strong> 在服务器端启用Gzip或Brotli压缩，可以进一步减少传输数据的大小，提高加载速度。</li><li${_scopeId}><strong${_scopeId}>使用缓存：</strong> 对于静态资源（如图片、CSS、JavaScript文件），可以使用缓存技术，如浏览器缓存（如强缓存、协商缓存）、CDN缓存等，减少重复请求，提高加载速度。</li><li${_scopeId}><strong${_scopeId}>使用CDN加速：</strong> 将静态资源（如图片、CSS、JavaScript文件）部署到CDN上，利用CDN的节点来加速资源的加载速度。</li><li${_scopeId}><strong${_scopeId}>使用虚拟滚动：</strong> 对于长列表数据，可以使用虚拟滚动（Virtual Scrolling）技术，只渲染可视区域内的元素，而不是渲染整个列表，从而提高性能。</li><li${_scopeId}><strong${_scopeId}>事件防抖和节流：</strong> 在处理滚动、窗口大小调整等高频触发的事件时，使用防抖(debounce)或节流(throttle)技术减少事件处理函数的执行频率。</li><li${_scopeId}><strong${_scopeId}>使用服务端渲染（SSR）：</strong> 对于SEO和首屏加载速度要求高的应用，可以使用服务端渲染（Server-Side Rendering），将页面内容在服务器端生成并直接发送给客户端，减少客户端渲染的时间。</li><li${_scopeId}><strong${_scopeId}>避免不必要的重绘和回流：</strong> 在修改DOM样式时，尽量使用transform和opacity属性，它们不会触发重绘和回流，而使用width、height等属性会触发重绘和回流，影响性能。</li><li${_scopeId}><strong${_scopeId}>按需加载：</strong> 对于第三方库进行按需加载，减少打包体积。</li><li${_scopeId}><strong${_scopeId}>组件拆分与复用：</strong> 合理拆分组件，减少不必要的渲染，提高代码复用性和可维护性。</li><li${_scopeId}><strong${_scopeId}>首屏感知优化：</strong> 使用loading动画或骨架屏，提升用户体验。</li></ul><h2 id="vue-性能优化" tabindex="-1"${_scopeId}>Vue 性能优化 <a class="header-anchor" href="#vue-性能优化" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>路由懒加载：</strong> 通过动态导入（如使用import()）来延迟加载那些非初始页面的组件，直到用户访问这些路由时才加载相应的组件代码，减少首屏加载时间。</li><li${_scopeId}><strong${_scopeId}>使用Keep-Alive缓存组件：</strong> 对于切换频率高的页面或组件，可以使用标签包裹，这样当组件切换出去时，它的状态会被缓存下来，下次再进入时可以直接复用，避免重新渲染。</li><li${_scopeId}><strong${_scopeId}>优化计算属性和侦听器：</strong> 尽量使用计算属性（computed）代替方法（methods），因为计算属性有缓存机制，只有依赖发生变化时才会重新计算。对于需要监听数据变化执行的操作，合理使用 watch，注意避免在其中执行耗时操作。</li><li${_scopeId}><strong${_scopeId}>限制监听器数量：</strong> 避免在data上绑定过多的响应式属性，减少不必要的watcher创建，利用Object.freeze()提升性能。</li><li${_scopeId}><strong${_scopeId}>使用v-show代替v-if：</strong> 对于频繁切换的组件，v-show只是切换元素的display属性，而v-if是动态地创建和销毁元素，频繁切换v-if会导致性能问题，而v-show则不会有这个问题。</li><li${_scopeId}><strong${_scopeId}>在v-for中使用key属性：</strong> 在使用v-for渲染列表时，为每个元素绑定一个唯一的key属性，帮助Vue更高效地进行DOM diff，使Vue更高效地识别和重用元素，提高渲染性能。</li><li${_scopeId}><strong${_scopeId}>避免在v-for中使用v-if：</strong> 在v-for中使用v-if会导致v-if在每次渲染时都会被计算，影响性能，可以使用计算属性（computed）预先过滤数据，减少不必要的渲染。</li><li${_scopeId}><strong${_scopeId}>使用事件委托：</strong> 在使用v-for渲染列表时，避免为每个元素单独绑定事件监听器，可以将事件监听器绑定到父元素上并通过事件冒泡来处理，减少事件监听器的数量。</li><li${_scopeId}><strong${_scopeId}>虚拟列表（Virtualization）：</strong> 对于长列表，使用虚拟滚动库如vue-virtual-scrolle或vue-virtual-scroll-list仅渲染可视区域内的列表项，显著减少DOM节点数量。</li><li${_scopeId}><strong${_scopeId}>使用Vue性能分析工具：</strong> 如Vue DevTools的Performance面板，可以帮助识别性能瓶颈，比如过度渲染、长时间的渲染时间等。</li></ul><p${_scopeId}>结合以上方案，可以显著提升Vue应用的性能和用户体验。</p><h2 id="react-性能优化" tabindex="-1"${_scopeId}>React 性能优化 <a class="header-anchor" href="#react-性能优化" aria-hidden="true"${_scopeId}>#</a></h2><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>使用Suspense和Lazy进行懒加载：</strong> React.lazy配合React.Suspense可以实现组件的懒加载，即在需要时才加载对应的组件代码。</li><li${_scopeId}><strong${_scopeId}>使用PureComponent：</strong> 对于类组件，使用PureComponent可以避免不必要的渲染，因为PureComponent会对props和state进行浅比较，只有当它们发生变化时才会重新渲染组件。</li><li${_scopeId}><strong${_scopeId}>使用React.memo：</strong> 对于函数组件，可以使用React.memo来避免不必要的渲染。React.memo是一个高阶组件，它会对props进行浅比较，只有当props发生变化时才会重新渲染组件。</li><li${_scopeId}><strong${_scopeId}>使用shouldComponentUpdate：</strong> 在类组件中，可以通过shouldComponentUpdate生命周期方法来避免不必要的渲染。shouldComponentUpdate方法会在组件更新前被调用，如果返回false，则组件不会更新。</li><li${_scopeId}><strong${_scopeId}>使用useCallback避免不必要的函数创建：</strong> 对于传递给子组件的函数，使用useCallback确保函数引用在依赖项不变时保持稳定，避免子组件不必要的重新渲染。</li><li${_scopeId}><strong${_scopeId}>使用useMemo避免不必要的计算：</strong> 对于复杂计算结果，使用useMemo缓存计算结果，避免在每次渲染时重复计算。</li><li${_scopeId}><strong${_scopeId}>优化useEffect的依赖项：</strong> 在使用useEffect时，合理设置依赖项，避免不必要的副作用执行。</li><li${_scopeId}><strong${_scopeId}>使用Context API减少props传递：</strong> 对于跨组件传递的数据，可以使用Context API来避免逐层传递props，提高代码的可维护性。</li><li${_scopeId}><strong${_scopeId}>使用Fragment避免额外的DOM节点：</strong> 使用&lt;React.Fragment&gt;&lt;/React.Fragment&gt;或&lt;&gt;…&lt;/&gt;包裹子元素，避免因额外的DOM节点造成的渲染性能损耗。</li><li${_scopeId}><strong${_scopeId}>优化state管理：</strong> 避免在顶层组件存储所有状态，考虑使用Redux、MobX或Context API进行细粒度的状态管理，减少不必要的状态传递和更新。</li><li${_scopeId}><strong${_scopeId}>组件卸载前进行清理操作：</strong> 在组件卸载时清理全局监听器、定时器等。防止内存泄漏影响性能。</li><li${_scopeId}><strong${_scopeId}>虚拟列表（Virtualization）：</strong> 对于长列表，使用虚拟滚动库如react-virtualized或react-window仅渲染可视区域内的列表项，显著减少DOM节点数量。</li><li${_scopeId}><strong${_scopeId}>使用React.Profiler进行性能分析：</strong> React.Profiler可以帮助开发者识别性能瓶颈，通过分析组件的渲染时间和调用栈，找出需要优化的地方。</li><li${_scopeId}><strong${_scopeId}>性能监控：</strong> 使用React DevTools的Performance工具监控组件渲染和更新性能，识别瓶颈并针对性优化。</li></ul><p${_scopeId}>通过上述方法的综合运用，可以有效提升React应用的运行效率和用户体验。</p></div>`)
          }
          else {
            return [
              createVNode('div', { class: 'prose m-auto slide-enter-content' }, [
                createVNode('h2', {
                  id: '公用性能优化',
                  tabindex: '-1',
                }, [
                  createTextVNode('公用性能优化 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#公用性能优化',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, [
                    createVNode('strong', null, '减少 HTTP 请求：'),
                    createTextVNode(' 合并小文件，通过合并CSS、JS文件、精灵图等方式将多个小请求合并为一个大请求，减少 HTTP 请求的数量，提高加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用 HTTP/2：'),
                    createTextVNode(' HTTP/2 支持多路复用，可以同时发送多个请求和响应，减少请求的等待时间。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '图片资源优化：'),
                    createTextVNode(' 选择合适的图片格式，如字体图标、SVG，webP和雪碧图等，对图片进行压缩，减少图片大小，提高加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '图片懒加载：'),
                    createTextVNode(' 对于长列表或页面中的大量图片，使用懒加载技术，即在图片进入可视区域时才开始加载，减少初次加载时间。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用压缩工具：'),
                    createTextVNode(' 使用工具如Webpack的UglifyJS插件或Terser插件来压缩JavaScript代码，减少文件大小，提高加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '代码分割：'),
                    createTextVNode(' 通过Webpack splitChunks配置进行代码分割、Tree Shaking等，减少最终打包文件的体积。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Gzip或Brotli压缩：'),
                    createTextVNode(' 在服务器端启用Gzip或Brotli压缩，可以进一步减少传输数据的大小，提高加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用缓存：'),
                    createTextVNode(' 对于静态资源（如图片、CSS、JavaScript文件），可以使用缓存技术，如浏览器缓存（如强缓存、协商缓存）、CDN缓存等，减少重复请求，提高加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用CDN加速：'),
                    createTextVNode(' 将静态资源（如图片、CSS、JavaScript文件）部署到CDN上，利用CDN的节点来加速资源的加载速度。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用虚拟滚动：'),
                    createTextVNode(' 对于长列表数据，可以使用虚拟滚动（Virtual Scrolling）技术，只渲染可视区域内的元素，而不是渲染整个列表，从而提高性能。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '事件防抖和节流：'),
                    createTextVNode(' 在处理滚动、窗口大小调整等高频触发的事件时，使用防抖(debounce)或节流(throttle)技术减少事件处理函数的执行频率。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用服务端渲染（SSR）：'),
                    createTextVNode(' 对于SEO和首屏加载速度要求高的应用，可以使用服务端渲染（Server-Side Rendering），将页面内容在服务器端生成并直接发送给客户端，减少客户端渲染的时间。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '避免不必要的重绘和回流：'),
                    createTextVNode(' 在修改DOM样式时，尽量使用transform和opacity属性，它们不会触发重绘和回流，而使用width、height等属性会触发重绘和回流，影响性能。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '按需加载：'),
                    createTextVNode(' 对于第三方库进行按需加载，减少打包体积。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '组件拆分与复用：'),
                    createTextVNode(' 合理拆分组件，减少不必要的渲染，提高代码复用性和可维护性。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '首屏感知优化：'),
                    createTextVNode(' 使用loading动画或骨架屏，提升用户体验。'),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'vue-性能优化',
                  tabindex: '-1',
                }, [
                  createTextVNode('Vue 性能优化 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#vue-性能优化',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, [
                    createVNode('strong', null, '路由懒加载：'),
                    createTextVNode(' 通过动态导入（如使用import()）来延迟加载那些非初始页面的组件，直到用户访问这些路由时才加载相应的组件代码，减少首屏加载时间。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Keep-Alive缓存组件：'),
                    createTextVNode(' 对于切换频率高的页面或组件，可以使用标签包裹，这样当组件切换出去时，它的状态会被缓存下来，下次再进入时可以直接复用，避免重新渲染。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '优化计算属性和侦听器：'),
                    createTextVNode(' 尽量使用计算属性（computed）代替方法（methods），因为计算属性有缓存机制，只有依赖发生变化时才会重新计算。对于需要监听数据变化执行的操作，合理使用 watch，注意避免在其中执行耗时操作。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '限制监听器数量：'),
                    createTextVNode(' 避免在data上绑定过多的响应式属性，减少不必要的watcher创建，利用Object.freeze()提升性能。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用v-show代替v-if：'),
                    createTextVNode(' 对于频繁切换的组件，v-show只是切换元素的display属性，而v-if是动态地创建和销毁元素，频繁切换v-if会导致性能问题，而v-show则不会有这个问题。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '在v-for中使用key属性：'),
                    createTextVNode(' 在使用v-for渲染列表时，为每个元素绑定一个唯一的key属性，帮助Vue更高效地进行DOM diff，使Vue更高效地识别和重用元素，提高渲染性能。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '避免在v-for中使用v-if：'),
                    createTextVNode(' 在v-for中使用v-if会导致v-if在每次渲染时都会被计算，影响性能，可以使用计算属性（computed）预先过滤数据，减少不必要的渲染。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用事件委托：'),
                    createTextVNode(' 在使用v-for渲染列表时，避免为每个元素单独绑定事件监听器，可以将事件监听器绑定到父元素上并通过事件冒泡来处理，减少事件监听器的数量。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '虚拟列表（Virtualization）：'),
                    createTextVNode(' 对于长列表，使用虚拟滚动库如vue-virtual-scrolle或vue-virtual-scroll-list仅渲染可视区域内的列表项，显著减少DOM节点数量。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Vue性能分析工具：'),
                    createTextVNode(' 如Vue DevTools的Performance面板，可以帮助识别性能瓶颈，比如过度渲染、长时间的渲染时间等。'),
                  ]),
                ]),
                createVNode('p', null, '结合以上方案，可以显著提升Vue应用的性能和用户体验。'),
                createVNode('h2', {
                  id: 'react-性能优化',
                  tabindex: '-1',
                }, [
                  createTextVNode('React 性能优化 '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#react-性能优化',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('ul', null, [
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Suspense和Lazy进行懒加载：'),
                    createTextVNode(' React.lazy配合React.Suspense可以实现组件的懒加载，即在需要时才加载对应的组件代码。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用PureComponent：'),
                    createTextVNode(' 对于类组件，使用PureComponent可以避免不必要的渲染，因为PureComponent会对props和state进行浅比较，只有当它们发生变化时才会重新渲染组件。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用React.memo：'),
                    createTextVNode(' 对于函数组件，可以使用React.memo来避免不必要的渲染。React.memo是一个高阶组件，它会对props进行浅比较，只有当props发生变化时才会重新渲染组件。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用shouldComponentUpdate：'),
                    createTextVNode(' 在类组件中，可以通过shouldComponentUpdate生命周期方法来避免不必要的渲染。shouldComponentUpdate方法会在组件更新前被调用，如果返回false，则组件不会更新。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用useCallback避免不必要的函数创建：'),
                    createTextVNode(' 对于传递给子组件的函数，使用useCallback确保函数引用在依赖项不变时保持稳定，避免子组件不必要的重新渲染。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用useMemo避免不必要的计算：'),
                    createTextVNode(' 对于复杂计算结果，使用useMemo缓存计算结果，避免在每次渲染时重复计算。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '优化useEffect的依赖项：'),
                    createTextVNode(' 在使用useEffect时，合理设置依赖项，避免不必要的副作用执行。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Context API减少props传递：'),
                    createTextVNode(' 对于跨组件传递的数据，可以使用Context API来避免逐层传递props，提高代码的可维护性。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用Fragment避免额外的DOM节点：'),
                    createTextVNode(' 使用<React.Fragment></React.Fragment>或<>…</>包裹子元素，避免因额外的DOM节点造成的渲染性能损耗。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '优化state管理：'),
                    createTextVNode(' 避免在顶层组件存储所有状态，考虑使用Redux、MobX或Context API进行细粒度的状态管理，减少不必要的状态传递和更新。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '组件卸载前进行清理操作：'),
                    createTextVNode(' 在组件卸载时清理全局监听器、定时器等。防止内存泄漏影响性能。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '虚拟列表（Virtualization）：'),
                    createTextVNode(' 对于长列表，使用虚拟滚动库如react-virtualized或react-window仅渲染可视区域内的列表项，显著减少DOM节点数量。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '使用React.Profiler进行性能分析：'),
                    createTextVNode(' React.Profiler可以帮助开发者识别性能瓶颈，通过分析组件的渲染时间和调用栈，找出需要优化的地方。'),
                  ]),
                  createVNode('li', null, [
                    createVNode('strong', null, '性能监控：'),
                    createTextVNode(' 使用React DevTools的Performance工具监控组件渲染和更新性能，识别瓶颈并针对性优化。'),
                  ]),
                ]),
                createVNode('p', null, '通过上述方法的综合运用，可以有效提升React应用的运行效率和用户体验。'),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/pages/posts/vue-react-perf.md')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
export {
  _sfc_main as default,
}
