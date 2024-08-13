---
title: 理解JS中的继承方式
date: 2022-09-12T10:25:00.000+00:00
lang: zh
duration: 15min
art: particles
---

## 原型链继承 (Prototype Chain Inheritance)

- **原理：** 通过将子类的原型对象设置为父类的实例，从而实现继承。
- **特点：** 子类实例和父类实例共享同一个原型对象。因此，如果在子类中修改原型属性，会影响所有子类实例。
- **问题：** 由于共享原型对象，子类实例之间会相互影响，可能导致难以追踪的错误。无法继承父类构造函数中的属性。
- **缺点：** <br>
  &emsp;&emsp;1、父类的所有引用属性会被所有子类共享，更改一个子类的引用属性，其他子类也会受影响 <br>
  &emsp;&emsp;2、子类型实例不能给父类型构造函数传参

```js
function Parent() {
  this.name = 'parent'
  this.friends = ['Alice', 'Bob', 'Charlie']
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child() {
  this.age = 18
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()

console.log(child1.name) // 'parent'

child1.friends.push('David')
console.log(child2.friends) // ['Alice', 'Bob', 'Charlie', 'David']
```

## 借用构造函数继承 (Constructor Stealing)

- **原理：** 在子类构造函数中调用父类构造函数，使用call或apply方法。
- **特点：** 继承了父类构造函数中的属性，但无法继承父类原型上的属性和方法。
- **问题：** 每次创建子类实例时，都会调用父类构造函数，可能导致重复代码和性能问题。

```js
function Parent(name) {
  this.name = name
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

const child = new Child('child', 18)
console.log(child.name) // 'child'
console.log(child.age) // 18
```

## 组合继承 (Combination Inheritance)

- **原理：** 结合原型链继承和构造函数继承。先使用构造函数继承，再使用原型链继承。
- **特点：** 继承了父类构造函数中的属性和原型上的方法。
- **问题：** 父类构造函数被调用了两次（一次在构造函数继承中，一次在原型链继承中），可能会影响性能。

```js
function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

const child = new Child('child', 18)
console.log(child.name) // 'child'
console.log(child.age) // 18
child.sayName() // 'child'
```

## 原型式继承 (Prototype Inheritance)

- **原理：** 原型式继承的createObj方法本质上是对参数对象的一个浅复制。
- **特点：** 与原型链继承类似，父类的引用属性会被所有子类实例共享, 子类构建实例时不能向父类传递参数。
- **问题：** 父类的引用属性会被所有子类实例共享，可能导致意外的副作用。

```js
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}

const person = {
  name: 'person',
  friends: ['Alice', 'Bob', 'Charlie']
}

const anotherPerson = createObj(person)
console.log(anotherPerson.name) // 'person'

anotherPerson.friends.push('David')
console.log(person.friends) // ['Alice', 'Bob', 'Charlie', 'David']

// ECMAScript5 通过新增 Object.create()方法规范化了原型式继承。
// 这个方法接收两个参数: 一个用作新对象原型的对象和(可选的)一个为新对象定义额外属性的对象。
// 在传入一个参数的情况下，Object.create()与createObj方法的行为相同。
const anotherPerson = Object.create(person)
```

## 寄生式继承 (Parasitic Inheritance)

- **原理：** 创建一个继承自父类的副本，然后在副本上添加新的属性和方法。
- **特点：** 在副本上进行更改，能创建具有新特性的对象。
- **问题：** 和原型链继承类似，无法继承父类构造函数中的属性。

```js
function createAnother(original) {
  const clone = Object.create(original)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

const person = {
  name: 'person',
  friends: ['Alice', 'Bob']
}

const anotherPerson = createAnother(person)
anotherPerson.sayHi() // 'hi'
```

## 寄生组合式继承 (Parasitic Combination Inheritance)

- **原理：** 结合了寄生式继承和组合继承的优点。先使用寄生式继承生成原型链，然后使用组合继承来构造实例。
- **特点：** 避免了组合继承中父类构造函数被调用两次的问题。
- **优势：** 较为优雅地解决了继承中的性能和功能问题。

```js
function inheritPrototype(child, parent) {
  const prototype = Object.create(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}

function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

inheritPrototype(Child, Parent)

const child = new Child('child', 18)
console.log(child.name) // 'child'
console.log(child.age) // 18
child.sayName() // 'child'
```

## ES6中的继承 (ES6 Class Inheritance)

- **原理：** 使用class关键字定义类，通过extends关键字实现继承。
- **特点：** 语法简洁，支持更直观的继承机制。
- **优势：** 符合现代JavaScript标准，易于理解和使用。

```js
class Parent {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const child = new Child('child', 18)
child.sayName() // 'child'
```
