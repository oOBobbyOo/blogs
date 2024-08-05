---
title: 手写 call、apply 及 bind 函数
date: 2023-08-05T02:55:00.000+00:00
lang: zh
duration: 8min
art: particles
---

## 手写 call 函数

```js
Function.prototype.myCall = function (context, ...args) {
  // 1. 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 2. 判断 context 是否传入，如果未传入则设置为 window
  context = context || window
  // 3. 将函数设为对象的方法
  context.fn = this
  // 4. 调用函数并返回结果
  const result = context.fn(...args)
  // 5. 删除方法
  delete context.fn
  return result
}
```

## 手写 apply 函数

```js
Function.prototype.myApply = function (context, args) {
  // 1. 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 2. 判断 context 是否传入，如果未传入则设置为 window
  context = context || window
  // 3. 将函数设为对象的方法
  context.fn = this
  // 4. 调用函数并返回结果
  const result = context.fn(...args)
  // 5. 删除方法
  delete context.fn
  return result
}
```

## 手写 bind 函数

```js
Function.prototype.myBind = function (context, ...args) {
  // 1. 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 2. 获取函数本身
  const _this = this
  // 3. 返回一个函数
  return function Fn(...newArgs) {
    // 4. 调用函数
    return _this.apply(this instanceof Fn ? this : context, args.concat(newArgs))
  }
}
```
