---
title: Set、Map、WeakSet、WeakMap
description: Set、Map、WeakSet 和 WeakMap 的区别
date: 2023-07-09T03:55:00.000+00:00
lang: zh
duration: 6min
art: particles
---

## Set

### 定义
[Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set) 是一种值的合集（collection）。集合（set）中的元素只会出现一次，即集合中的元素是唯一的。

### 特点
- 成员唯一、无序且不重复。
- [value, value]，键值与键名是一致的（或者说只有键值，没有键名）。
- 允许储存任何类型的唯一值，无论是原始值或者是对象引用。
- 可以遍历，可以for...of循环，方法有 keys、 values、entries、forEach。
- Set 有 size 属性。
- 方法有 add、delete、has、clear。

## Map

### 定义
[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 是一种键值对的集合（collection）。键可以是任意类型，包括对象类型。Map 对象中的键值对是无序的，但是可以通过键来快速查找对应的值。

### 特点
- 键值对集合，键可以是任意类型。
- 键值对是无序的，但是可以通过键来快速查找对应的值。
- 可以遍历，可以for...of循环，方法有 keys、values、entries、forEach。
- Map 有 size 属性。
- 方法有 set、get、has、delete、clear。

## WeakSet

### 定义
[WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) 是一种集合类型的数据结构，它的成员只能是对象，并且这些对象是弱引用的。这意味着如果对象除了在 WeakSet 中以外没有其他引用，那么它可能会被垃圾回收器回收，即使它仍然在 WeakSet 中。


### 特点
- 成员只能是对象，不能是其他类型的值。
- 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏。
- 没有遍历操作，不能和 for...of 循环一起使用。
- WeakSet 没有 size 属性。
- 方法有 add、delete、has。

## WeakMap

### 定义
[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 和Map结构相似，但它的键必须是对象，而值可以是任意类型。WeakMap 的键是弱引用的，这意味着如果一个对象除了作为 WeakMap 的键以外没有其他引用，那么这个键和它对应的值都会被垃圾回收。

### 特点
- 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- 键名是弱引用，键名对应的对象可以被垃圾回收，当键名对象被回收后，键名自动删除。
- 没有遍历操作，不能和 for...of 循环一起使用。
- WeakMap 没有 size 属性。
- 方法有 get、set、has、delete。
