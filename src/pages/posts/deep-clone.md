---
title: 手写浅拷贝和深拷贝
date: 2023-09-14T02:10:00.000+00:00
lang: zh
duration: 5min
art: particles
---

## 浅拷贝

> 浅拷贝是属性与拷贝的源对象属性共享相同的引用（指向相同的底层值）的副本。因此，当你更改源对象或副本时，也可能导致另一个对象发生更改。<br>

### 手写浅拷贝

```ts
function shallowClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const newObject = Array.isArray(obj) ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = obj[key]
    }
  }
  return newObject
}
```

## 深拷贝

> 深拷贝是指其属性与其拷贝的源对象的属性不共享相同的引用（指向相同的底层值）的副本。因此，当你更改源或副本时，可以确保不会导致其他对象也发生更改；也就是说，你不会无意中对源或副本造成意料之外的更改。这种行为与浅拷贝的行为形成对比，在浅拷贝中，对源或副本的更改可能也会导致其他对象的更改（因为两个对象共享相同的引用）。

### 手写深拷贝

```ts
// 简单版本
function deepCopy(object) {
  if (typeof object !== 'object' || obj === null) {
    return object
  }
  const newObject = Array.isArray(object) ? [] : {}
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key]
        = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key]
    }
  }
  return newObject
}

// 复杂版本
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null)
    return obj
  if (typeof obj !== 'object')
    return obj
  if (obj instanceof Date)
    return new Date(obj)
  if (obj instanceof RegExp)
    return new RegExp(obj)
  if (hash.has(obj))
    return hash.get(obj)
  let cloneObj = new obj.constructor()
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}
```
