import { createVNode, mergeProps, useSSRContext, withCtx } from 'vue'
import { ssrRenderComponent } from 'vue/server-renderer'
import { useHead } from '@unhead/vue'
import { _ as _sfc_main$1 } from './WrapperPost-bPrDeG4J.js'
import 'dayjs'
import 'vue-router'
import 'unplugin-vue-router/runtime'
import 'unplugin-vue-router/data-loaders/basic'

const _sfc_main = {
  __name: 'projects',
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { title: 'Projects - Henry Bobby', display: 'Projects', description: 'List of projects that I am proud of', wrapperClass: 'text-center', art: 'dots', meta: [{ property: 'og:title', content: 'Projects - Henry Bobby' }, { name: 'twitter:title', content: 'Projects - Henry Bobby' }, { name: 'description', content: 'List of projects that I am proud of' }, { property: 'og:description', content: 'List of projects that I am proud of' }, { name: 'twitter:description', content: 'List of projects that I am proud of' }] }
    const head = { title: 'Projects - Henry Bobby', meta: [{ property: 'og:title', content: 'Projects - Henry Bobby' }, { name: 'twitter:title', content: 'Projects - Henry Bobby' }, { name: 'description', content: 'List of projects that I am proud of' }, { property: 'og:description', content: 'List of projects that I am proud of' }, { name: 'twitter:description', content: 'List of projects that I am proud of' }] }
    useHead(head)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}></div>`)
          }
          else {
            return [
              createVNode('div', { class: 'prose m-auto slide-enter-content' }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/pages/projects.md')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
export {
  _sfc_main as default,
}
