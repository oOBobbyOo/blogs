---
title: 手写函数柯里化
date: 2023-08-14T03:10:00.000+00:00
lang: zh
duration: 5min
art: particles
---

> 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。

## 手写函数柯里化

```js
function curry(fn) {
  // 获取函数所需的参数个数
  const arity = fn.length

  return function curried(...args) {
    if (args.length >= arity) {
      // 如果已经传递了足够的参数，则执行原函数
      return fn(...args)
    }
    else {
      // 否则返回一个新函数，继续接收剩余的参数
      return (...moreArgs) => curried(...args, ...moreArgs)
    }
  }
}

// ES6 实现
function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
}
```
