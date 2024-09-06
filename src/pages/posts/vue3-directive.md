---
title: Vue3 自定义指令
date: 2024-04-06T01:45:00.000+00:00
lang: zh
duration: 6min
art: particles
---

## 自定义指令

除了 Vue 内置的一系列指令 (比如 `v-model` 或 `v-show`) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

## 指令钩子

```ts
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    // 下面会介绍各个参数的细节
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {},
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {}
}
```

## 钩子参数

指令的钩子会传递以下几种参数：

- **el：** 指令绑定到的元素。这可以用于直接操作 DOM。
- **binding：** 一个对象，包含以下属性。
  - `value`：传递给指令的值。例如，在 `v-my-directive="1 + 1"` 的情况下，值是 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `beforeUpdate` 和 `updated` 钩子中可用。无论值是否改变都可用。
  - `arg`：传给指令的参数。例如，在 `v-my-directive:foo` 的情况下，参数是 `"foo"`。参数可以是动态的。
  - `modifiers`：一个包含修饰符的对象 (如果有的话)。例如：在 `v-my-directive.foo.bar` 的情况下，修饰符对象是 `{ foo: true, bar: true }`。
  - `instance`：使用该指令的组件实例。
  - `dir`：指令的定义对象。
- **vnode：** 代表绑定元素的 VNode。
- **prevVnode：** 代表绑定元素之前的 VNode。仅在 `beforeUpdate` 和 `updated` 钩子中可用。
