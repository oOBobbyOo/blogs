---
title: 手写 debounce、throttle 函数
date: 2023-08-06T01:40:00.000+00:00
lang: zh
duration: 6min
art: particles
---

## 手写 debounce 防抖函数

```js
function debounce(fn, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer)
      clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
```

## 手写 throttle 节流函数

```js
function throttle(fn, wait = 300) {
  let previous = 0
  return function (...args) {
    const context = this
    const nowTime = +new Date()
    if (nowTime - previous > wait) {
      fn.apply(context, args)
      previous = nowTime
    }
  }
}
```
