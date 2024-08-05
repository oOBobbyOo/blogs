import { createTextVNode, createVNode, mergeProps, useSSRContext, withCtx } from 'vue'
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer'
import { useHead } from '@unhead/vue'
import { _ as _sfc_main$1 } from './WrapperPost-bPrDeG4J.js'
import 'dayjs'
import 'vue-router'
import 'unplugin-vue-router/runtime'
import 'unplugin-vue-router/data-loaders/basic'

const _sfc_main = {
  __name: 'git-commands',
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = { title: 'Git Commands', date: '2023-06-25T05:00:00.000Z', lang: 'zh', duration: '15min', art: 'particles', meta: [{ property: 'og:title', content: 'Git Commands' }, { name: 'twitter:title', content: 'Git Commands' }] }
    const head = { title: 'Git Commands', meta: [{ property: 'og:title', content: 'Git Commands' }, { name: 'twitter:title', content: 'Git Commands' }] }
    useHead(head)
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperPost = _sfc_main$1
      _push(ssrRenderComponent(_component_WrapperPost, mergeProps({ frontmatter }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto slide-enter-content"${_scopeId}><h2 id="git-config" tabindex="-1"${_scopeId}>git config <a class="header-anchor" href="#git-config" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示当前的Git配置</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> config</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -l</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> (--list)</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 设置全局用户名和邮箱</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> config</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --global</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> user.name</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>Your Name</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> config</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --global</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> user.email</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>your@email.com</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 设置当前仓库的用户名和邮箱</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> config</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --local</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> user.name</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>Your Name</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> config</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --local</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> user.email</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>your@email.com</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span></code></pre><h2 id="git-init" tabindex="-1"${_scopeId}>git init <a class="header-anchor" href="#git-init" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 初始化一个空的Git仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> init</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> init</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [project-name]</span></span></code></pre><h2 id="git-clone" tabindex="-1"${_scopeId}>git clone <a class="header-anchor" href="#git-clone" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 克隆一个远程仓库到本地</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> clone</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [url]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 克隆一个远程仓库到本地，并指定本地仓库的名称</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> clone</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [url] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>local-repo-name</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span></code></pre><h2 id="git-add" tabindex="-1"${_scopeId}>git add <a class="header-anchor" href="#git-add" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> .</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 添加指定文件到暂存区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file1] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>file2</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> ...</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [dir]</span></span></code></pre><h2 id="git-commit" tabindex="-1"${_scopeId}>git commit <a class="header-anchor" href="#git-commit" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交暂存区中的所有文件到本地仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -m</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>commit message</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交暂存区中的指定文件到本地仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file1] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>file2</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> ... -m </span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>commit message</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交工作区自上次commit之后的变化，直接到本地仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -a</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交时显示所有diff信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -v</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --amend</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -m</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [message]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> commit</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --amend</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file1] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>file2</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> ...</span></span></code></pre><h2 id="git-cherry-pick" tabindex="-1"${_scopeId}>git cherry-pick <a class="header-anchor" href="#git-cherry-pick" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 合并指定commit到当前分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> cherry-pick</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [commit]</span></span></code></pre><h2 id="git-push" tabindex="-1"${_scopeId}>git push <a class="header-anchor" href="#git-push" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 推送本地仓库的指定分支到远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] --force</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 推送本地仓库的所有分支到远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] --all</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 推送本地仓库的指定标签到远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>tag</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 推送本地仓库的所有标签到远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] --tags</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除远程仓库的指定分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] :</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除远程仓库的指定标签</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] :</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>tag</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span></code></pre><h2 id="git-pull" tabindex="-1"${_scopeId}>git pull <a class="header-anchor" href="#git-pull" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> pull</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span></code></pre><h2 id="git-branch" tabindex="-1"${_scopeId}>git branch <a class="header-anchor" href="#git-branch" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 列出所有本地分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 列出所有远程分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -r</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 列出所有本地分支和远程分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -a</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 修改分支名称</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -m</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [old-branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>new-branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 强制修改分支名称</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -M</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [old-branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>new-branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个分支，指向指定commit</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>commit</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --track</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>remote/branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --set-upstream</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>remote/branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -d</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 强制删除指定的本地分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -D</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除远程分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> origin</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --delete</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> branch</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -dr</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote/branch]</span></span></code></pre><h2 id="git-checkout" tabindex="-1"${_scopeId}>git checkout <a class="header-anchor" href="#git-checkout" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 切换到指定分支，并更新工作区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个分支，并切换到该分支, 保留所有的提交记录</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -b</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 切换到上一个分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> -</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 创建并切换到指定的分支，删除所有的提交记录</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --orphan</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --track</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote/branch]</span></span></code></pre><h2 id="git-rm" tabindex="-1"${_scopeId}>git rm <a class="header-anchor" href="#git-rm" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> rm</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file1] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>file2</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> ...</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> rm</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --cached</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 改名文件，并且将这个改名放入暂存区</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> mv</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file-original] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>file-renamed</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span></code></pre><h2 id="git-remote" tabindex="-1"${_scopeId}>git remote <a class="header-anchor" href="#git-remote" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示所有远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -v</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> (--verbose)</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示某个远程仓库的信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> show</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 添加远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> add</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [shortname] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>url</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 修改远程仓库的别名</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> rename</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [shortname] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>newname</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除指定名称的远程仓库</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> rm</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [shortname]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 修改远程仓库的 URL 地址</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> remote</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> set-url</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [shortname] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>newurl</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span></code></pre><h2 id="git-diff" tabindex="-1"${_scopeId}>git diff <a class="header-anchor" href="#git-diff" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示暂存区和工作区的差异</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> diff</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示暂存区和上一个commit的差异</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> diff</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --cached</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [file]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> diff</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示两次提交之间的差异</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> diff</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [first-branch]...</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>second-branch</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 显示今天你写了多少行代码</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> diff</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --shortstat</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>@{0 day ago}</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span></code></pre><h2 id="git-reset" tabindex="-1"${_scopeId}>git reset <a class="header-anchor" href="#git-reset" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一个版本</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上上一个版本</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^^</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上100个版本</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD~100</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到指定版本</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [commit]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并保存暂存区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --soft</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并删除暂存区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并撤销工作区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reset</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --mixed</span></span></code></pre><h2 id="git-revert" tabindex="-1"${_scopeId}>git revert <a class="header-anchor" href="#git-revert" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到指定版本</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> revert</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [commit]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并保存暂存区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> revert</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --soft</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并删除暂存区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> revert</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --hard</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 回退到上一次commit，并撤销工作区修改</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> revert</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> HEAD^</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --mixed</span></span></code></pre><h2 id="git-merge" tabindex="-1"${_scopeId}>git merge <a class="header-anchor" href="#git-merge" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 合并指定分支到当前分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> merge</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 合并指定分支到当前分支，禁用Fast forward模式</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> merge</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --no-ff</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -m</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>merge with no-ff</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span></code></pre><h2 id="git-rebase" tabindex="-1"${_scopeId}>git rebase <a class="header-anchor" href="#git-rebase" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 合并指定分支到当前分支</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> rebase</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch]</span></span></code></pre><h2 id="git-tag" tabindex="-1"${_scopeId}>git tag <a class="header-anchor" href="#git-tag" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 列出所有tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> tag</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个tag在当前commit</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> tag</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [tag]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个tag在指定commit</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> tag</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [tag] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>commit</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除本地tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> tag</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -d</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [tag]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除远程tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> origin</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> :refs/tags/[tagName]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看tag信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> show</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [tag]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交指定tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>tag</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 提交所有tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> push</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [remote] --tags</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 新建一个分支，指向某个tag</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> checkout</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -b</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}> [branch] </span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' })}"${_scopeId}>tag</span><span style="${ssrRenderStyle({ '--s-light': '#999999', '--s-dark': '#666666' })}"${_scopeId}>]</span></span></code></pre><h2 id="git-log" tabindex="-1"${_scopeId}>git log <a class="header-anchor" href="#git-log" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交发生变更的文件</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --stat</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的简略的统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --shortstat</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的详细统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --stat</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -p</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交的简略的统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --shortstat</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --numstat</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交的详细统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --stat</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> -p</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --numstat</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交的作者和提交者</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --pretty=format:</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>%h - %an, %ar : %s</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看提交历史，并显示每次提交的简略的统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> log</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --pretty=format:</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>%h - %s</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --abbrev-commit</span></span></code></pre><h2 id="git-reflog" tabindex="-1"${_scopeId}>git reflog <a class="header-anchor" href="#git-reflog" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看所有操作记录</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reflog</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看所有操作记录，并显示每次操作的简略的统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reflog</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --pretty=format:</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>%h - %s</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 查看所有操作记录，并显示每次操作的详细统计信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> reflog</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --pretty=format:</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>%h - %s</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ '--s-light': '#A65E2B', '--s-dark': '#C99076' })}"${_scopeId}> --abbrev-commit</span></span></code></pre><h2 id="git-stash" tabindex="-1"${_scopeId}>git stash <a class="header-anchor" href="#git-stash" aria-hidden="true"${_scopeId}>#</a></h2><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="${ssrRenderStyle({ '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' })}" tabindex="0"${_scopeId}><code class="language-bash"${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 保存当前工作区的内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 保存当前工作区的内容，并添加备注信息</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> save</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>备注信息</span><span style="${ssrRenderStyle({ '--s-light': '#B5695999', '--s-dark': '#C98A7D99' })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 列出所有stash</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> list</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 恢复最近一次stash的内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> apply</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 恢复指定stash的内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> apply</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash@{</span><span style="${ssrRenderStyle({ '--s-light': '#2F798A', '--s-dark': '#4C9A91' })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除最近一次stash的内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> drop</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 删除指定stash的内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> drop</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash@{</span><span style="${ssrRenderStyle({ '--s-light': '#2F798A', '--s-dark': '#4C9A91' })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 恢复最近一次stash的内容，并删除stash内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> pop</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#A0ADA0', '--s-dark': '#758575DD' })}"${_scopeId}># 恢复指定stash的内容，并删除stash内容</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ '--s-light': '#59873A', '--s-dark': '#80A665' })}"${_scopeId}>git</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> pop</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}> stash@{</span><span style="${ssrRenderStyle({ '--s-light': '#2F798A', '--s-dark': '#4C9A91' })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ '--s-light': '#B56959', '--s-dark': '#C98A7D' })}"${_scopeId}>}</span></span></code></pre></div>`)
          }
          else {
            return [
              createVNode('div', { class: 'prose m-auto slide-enter-content' }, [
                createVNode('h2', {
                  id: 'git-config',
                  tabindex: '-1',
                }, [
                  createTextVNode('git config '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-config',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示当前的Git配置'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' config'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -l'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' (--list)'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 设置全局用户名和邮箱'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' config'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --global'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' user.name'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'Your Name'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' config'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --global'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' user.email'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'your@email.com'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 设置当前仓库的用户名和邮箱'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' config'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --local'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' user.name'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'Your Name'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' config'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --local'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' user.email'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'your@email.com'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-init',
                  tabindex: '-1',
                }, [
                  createTextVNode('git init '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-init',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 初始化一个空的Git仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' init'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个目录，将其初始化为Git代码库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' init'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [project-name]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-clone',
                  tabindex: '-1',
                }, [
                  createTextVNode('git clone '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-clone',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 克隆一个远程仓库到本地'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' clone'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [url]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 克隆一个远程仓库到本地，并指定本地仓库的名称'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' clone'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [url] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'local-repo-name'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-add',
                  tabindex: '-1',
                }, [
                  createTextVNode('git add '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-add',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 添加当前目录的所有文件到暂存区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' add'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' .'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 添加指定文件到暂存区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' add'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file1] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'file2'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' ...'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 添加指定目录到暂存区，包括子目录'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' add'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [dir]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-commit',
                  tabindex: '-1',
                }, [
                  createTextVNode('git commit '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-commit',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交暂存区中的所有文件到本地仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -m'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'commit message'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交暂存区中的指定文件到本地仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file1] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'file2'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' ... -m '),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'commit message'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交工作区自上次commit之后的变化，直接到本地仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -a'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交时显示所有diff信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -v'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 使用一次新的commit，替代上一次提交'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 如果代码没有任何新变化，则用来改写上一次commit的提交信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --amend'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -m'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [message]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 重做上一次commit，并包括指定文件的新变化'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' commit'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --amend'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file1] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'file2'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' ...'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-cherry-pick',
                  tabindex: '-1',
                }, [
                  createTextVNode('git cherry-pick '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-cherry-pick',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 合并指定commit到当前分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' cherry-pick'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [commit]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-push',
                  tabindex: '-1',
                }, [
                  createTextVNode('git push '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-push',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 推送本地仓库的指定分支到远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 强行推送当前分支到远程仓库，即使有冲突'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, '$'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] --force'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 推送本地仓库的所有分支到远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] --all'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 推送本地仓库的指定标签到远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'tag'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 推送本地仓库的所有标签到远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] --tags'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除远程仓库的指定分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] :'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除远程仓库的指定标签'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] :'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'tag'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-pull',
                  tabindex: '-1',
                }, [
                  createTextVNode('git pull '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-pull',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 取回远程仓库的变化，并与本地分支合并'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' pull'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-branch',
                  tabindex: '-1',
                }, [
                  createTextVNode('git branch '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-branch',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 列出所有本地分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 列出所有远程分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -r'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 列出所有本地分支和远程分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -a'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个分支，但依然停留在当前分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 修改分支名称'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -m'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [old-branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'new-branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 强制修改分支名称'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -M'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [old-branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'new-branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个分支，指向指定commit'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'commit'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个分支，与指定的远程分支建立追踪关系'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --track'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'remote/branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 建立追踪关系，在现有分支与指定的远程分支之间'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --set-upstream'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'remote/branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -d'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 强制删除指定的本地分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -D'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除远程分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' origin'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --delete'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' branch'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -dr'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote/branch]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-checkout',
                  tabindex: '-1',
                }, [
                  createTextVNode('git checkout '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-checkout',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 切换到指定分支，并更新工作区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个分支，并切换到该分支, 保留所有的提交记录'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -b'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 切换到上一个分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' -'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 创建并切换到指定的分支，删除所有的提交记录'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --orphan'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 建立追踪关系，在现有分支与指定的远程分支之间'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --track'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote/branch]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-rm',
                  tabindex: '-1',
                }, [
                  createTextVNode('git rm '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-rm',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除工作区文件，并且将这次删除放入暂存区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' rm'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file1] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'file2'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' ...'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 停止追踪指定文件，但该文件会保留在工作区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' rm'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --cached'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 改名文件，并且将这个改名放入暂存区'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' mv'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file-original] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'file-renamed'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-remote',
                  tabindex: '-1',
                }, [
                  createTextVNode('git remote '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-remote',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示所有远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -v'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' (--verbose)'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示某个远程仓库的信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' show'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 添加远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' add'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [shortname] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'url'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 修改远程仓库的别名'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' rename'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [shortname] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'newname'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除指定名称的远程仓库'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' rm'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [shortname]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 修改远程仓库的 URL 地址'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' remote'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' set-url'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [shortname] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'newurl'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-diff',
                  tabindex: '-1',
                }, [
                  createTextVNode('git diff '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-diff',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示暂存区和工作区的差异'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' diff'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示暂存区和上一个commit的差异'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' diff'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --cached'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [file]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示工作区与当前分支最新commit之间的差异'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' diff'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示两次提交之间的差异'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' diff'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [first-branch]...'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'second-branch'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 显示今天你写了多少行代码'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' diff'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --shortstat'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '@{0 day ago}'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-reset',
                  tabindex: '-1',
                }, [
                  createTextVNode('git reset '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-reset',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一个版本'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上上一个版本'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^^'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上100个版本'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD~100'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到指定版本'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [commit]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并保存暂存区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --soft'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并删除暂存区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并撤销工作区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reset'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --mixed'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-revert',
                  tabindex: '-1',
                }, [
                  createTextVNode('git revert '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-revert',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到指定版本'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' revert'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [commit]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并保存暂存区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' revert'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --soft'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并删除暂存区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' revert'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --hard'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 回退到上一次commit，并撤销工作区修改'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' revert'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' HEAD^'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --mixed'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-merge',
                  tabindex: '-1',
                }, [
                  createTextVNode('git merge '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-merge',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 合并指定分支到当前分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' merge'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 合并指定分支到当前分支，禁用Fast forward模式'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' merge'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --no-ff'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -m'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, 'merge with no-ff'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-rebase',
                  tabindex: '-1',
                }, [
                  createTextVNode('git rebase '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-rebase',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 合并指定分支到当前分支'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' rebase'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch]'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-tag',
                  tabindex: '-1',
                }, [
                  createTextVNode('git tag '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-tag',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 列出所有tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个tag在当前commit'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' tag'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [tag]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个tag在指定commit'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' tag'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [tag] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'commit'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除本地tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' tag'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -d'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [tag]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除远程tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' origin'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' :refs/tags/[tagName]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看tag信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' show'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [tag]'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交指定tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'tag'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 提交所有tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' push'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [remote] --tags'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 新建一个分支，指向某个tag'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' checkout'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -b'),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, ' [branch] '),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, '['),
                      createVNode('span', { style: { '--s-light': '#393A34', '--s-dark': '#DBD7CAEE' } }, 'tag'),
                      createVNode('span', { style: { '--s-light': '#999999', '--s-dark': '#666666' } }, ']'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-log',
                  tabindex: '-1',
                }, [
                  createTextVNode('git log '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-log',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交发生变更的文件'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --stat'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的简略的统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --shortstat'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的详细统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --stat'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -p'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交的简略的统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --shortstat'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --numstat'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交的详细统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --stat'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' -p'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --numstat'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交的作者和提交者'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --pretty=format:'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '%h - %an, %ar : %s'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看提交历史，并显示每次提交的简略的统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' log'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --pretty=format:'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '%h - %s'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --abbrev-commit'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-reflog',
                  tabindex: '-1',
                }, [
                  createTextVNode('git reflog '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-reflog',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看所有操作记录'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reflog'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看所有操作记录，并显示每次操作的简略的统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reflog'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --pretty=format:'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '%h - %s'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 查看所有操作记录，并显示每次操作的详细统计信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' reflog'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --pretty=format:'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '%h - %s'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                      createVNode('span', { style: { '--s-light': '#A65E2B', '--s-dark': '#C99076' } }, ' --abbrev-commit'),
                    ]),
                  ]),
                ]),
                createVNode('h2', {
                  id: 'git-stash',
                  tabindex: '-1',
                }, [
                  createTextVNode('git stash '),
                  createVNode('a', {
                    'class': 'header-anchor',
                    'href': '#git-stash',
                    'aria-hidden': 'true',
                  }, '#'),
                ]),
                createVNode('pre', {
                  class: 'shiki shiki-themes vitesse-light vitesse-dark',
                  style: { '--s-light': '#393a34', '--s-dark': '#dbd7caee', '--s-light-bg': '#ffffff', '--s-dark-bg': '#121212' },
                  tabindex: '0',
                }, [
                  createVNode('code', { class: 'language-bash' }, [
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 保存当前工作区的内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 保存当前工作区的内容，并添加备注信息'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' save'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, ' "'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '备注信息'),
                      createVNode('span', { style: { '--s-light': '#B5695999', '--s-dark': '#C98A7D99' } }, '"'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 列出所有stash'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' list'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 恢复最近一次stash的内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' apply'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 恢复指定stash的内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' apply'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash@{'),
                      createVNode('span', { style: { '--s-light': '#2F798A', '--s-dark': '#4C9A91' } }, '0'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '}'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除最近一次stash的内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' drop'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 删除指定stash的内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' drop'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash@{'),
                      createVNode('span', { style: { '--s-light': '#2F798A', '--s-dark': '#4C9A91' } }, '0'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '}'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 恢复最近一次stash的内容，并删除stash内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' pop'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#A0ADA0', '--s-dark': '#758575DD' } }, '# 恢复指定stash的内容，并删除stash内容'),
                    ]),
                    createTextVNode('\n'),
                    createVNode('span', { class: 'line' }, [
                      createVNode('span', { style: { '--s-light': '#59873A', '--s-dark': '#80A665' } }, 'git'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' pop'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, ' stash@{'),
                      createVNode('span', { style: { '--s-light': '#2F798A', '--s-dark': '#4C9A91' } }, '0'),
                      createVNode('span', { style: { '--s-light': '#B56959', '--s-dark': '#C98A7D' } }, '}'),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('src/pages/posts/git-commands.md')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
export {
  _sfc_main as default,
}
