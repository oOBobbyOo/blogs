---
title: 手写 debounce、throttle 函数
date: 2023-08-06T01:40:00.000+00:00
lang: zh
duration: 6min
art: particles
---

## 手写 debounce 防抖函数

> 防抖指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。

```js
// 非立即执行版
function debounce(func, wait = 300) {
  let timeout
  return function (...args) {
    const context = this
    if (timeout)
      clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

// 立即执行版
function debounce(func, wait = 300) {
  let timeout
  return function (...args) {
    const context = this
    if (timeout)
      clearTimeout(timeout)

    const callNow = !timeout

    timeout = setTimeout(() => {
      timeout = null
    }, wait)

    if (callNow)
      func.apply(context, args)
  }
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait = 300, immediate = true) {
  let timeout
  return function (...args) {
    const context = this
    if (timeout)
      clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow)
        func.apply(context, args)
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}
```

## 手写 throttle 节流函数

> 节流指连续触发事件但是在 n 秒中只执行一次函数。

```js
// 时间戳版
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

// 定时器版
function throttle(func, wait = 300) {
  let timeout
  return function (...args) {
    const context = this
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait = 300, type = 1) {
  let previous = 0
  let timeout
  return function (...args) {
    const context = this
    if (type === 1) {
      const now = Date.now()
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    }
    else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}
```
