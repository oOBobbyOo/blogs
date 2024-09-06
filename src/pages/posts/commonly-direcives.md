---
title: Vue3 常用自定义指令
date: 2024-04-07T01:45:00.000+00:00
lang: zh
duration: 15min
art: particles
---

## v-click-outside

```ts
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  _clickOutside: () => void
}

const clickOutside: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    const onClickOutside = (event: MouseEvent) => {
      if (!el.contains(event.target) && el !== event.target)
        binding.value()
    }
    document.addEventListener('click', onClickOutside)
    el._clickOutside = onClickOutside
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el._clickOutside)
    delete el._clickOutside
  },
}

export default clickOutside
```

## v-copy

```ts
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  copyData: string | number
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
    el.addEventListener('click', handleClick)
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', handleClick)
  }
}

async function handleClick(this: any) {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(this.copyData)
  }
  else {
    const input = document.createElement('input')
    input.style.opacity = '0'
    input.value = this.copyData.toLocaleString()
    document.body.appendChild(input)
    input.select()
    document.execCommand('Copy')
    document.body.removeChild(input)
  }
}

export default copy
```

## v-draggable

```ts
import type { Directive, DirectiveBinding } from 'vue'

const draggable: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.cursor = 'move'
    el.style.position = 'absolute'
    el.onmousedown = function (e) {
      const disX = e.pageX - el.offsetLeft
      const disY = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disX
        let y = e.pageY - disY
        const maxX = el.parentNode.offsetWidth - el.offsetWidth
        const maxY = el.parentNode.offsetHeight - el.offsetHeight
        if (x < 0) {
          x = 0
        }
        else if (x > maxX) {
          x = maxX
        }
        if (y < 0) {
          y = 0
        }
        else if (y > maxY) {
          y = maxY
        }
        el.style.left = `${x}px`
        el.style.top = `${y}px`
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}

export default draggable
```

## v-longpress

```ts
import type { Directive, DirectiveBinding } from 'vue'

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw new TypeError('callback must be a function')
    }
    // 定义变量
    let pressTimer: any = null
    // 创建计时器（ 2秒后执行函数 ）
    const start = (e: any) => {
      if (e.button) {
        if (e.type === 'click' && e.button !== 0) {
          return
        }
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // 执行函数
          handler(e)
        }, 1000)
      }
    }
    // 取消计时器
    const cancel = () => {
      // 检查计时器是否有值
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // 运行函数
    const handler = (e: MouseEvent | TouchEvent) => {
      // 执行传递给指令的方法
      binding.value(e)
    }
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  }
}

export default directive
```
