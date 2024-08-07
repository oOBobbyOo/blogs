---
title: 手写 New、Object.create、Instanceof
date: 2023-08-07T06:25:00.000+00:00
lang: zh
duration: 8min
art: particles
---

## 手写 New 操作符

> 实现步骤：<br>
>
> 1. 创建一个空对象 <br>
> 2. 将这个空对象的原型指向构造函数的原型 <br>
> 3. 将构造函数的 this 指向这个空对象, 执行构造函数 <br>
> 4. 判断构造函数的返回值类型，如果是值类型，返回这个空对象，如果是引用类型，返回这个引用类型的对象

```js
function myNew(Ctor, ...args) {
  if (!Object.prototype.hasOwnProperty.call(Ctor, 'prototype')) {
    throw new TypeError('Ctor is not constructor') // 请传递一个构造器
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  const obj = Object.create(Ctor.prototype)
  // 将 this 指向新建对象，并执行函数
  const result = Ctor.apply(obj, args)
  // 判断返回结果
  if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
    return result
  }
  return obj
}
```

## 手写 Object.create

```js
function myCreate(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
```

## 手写 instanceof 方法

```js
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的 prototype 对象
  const prototype = right.prototype
  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto)
      return false
    if (proto === prototype)
      return true
    proto = Object.getPrototypeOf(proto)
  }
}
```
