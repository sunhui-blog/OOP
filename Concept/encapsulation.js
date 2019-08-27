// Keep Data Private

// Privacy property / Privacy method
/** 
 * 数据私有是让我们能够面向接口编程而不是实现编程的基础。这是可以帮助我们构建强壮软件的一个重要概念。
 * 除Privileged Methods、Symbols、WeakMap外，./Terms/Composition.js的例子中也可。
 */

// Privacy with Privileged Methods
class SimpleDate {
  constructor(year) {
    let _years = year
    this.getYear = function () {
      return _years
    }
  }
}

const date = new SimpleDate('2019')
date.getYear()
date._years  // undefined

// Privacy with Symbols
const SimpleDate = (function () {
  const _yearsKey = Symbol();
  class SimpleDate {
    constructor(year) {
      this[_yearsKey] = year
    }

    getYear() {
      return this[_yearsKey]
    }
  }

  return SimpleDate
}())

const date = new SimpleDate('2019')
date.getYear()  // '2019'
date._years  // undefined
date._yearsKey // undefined

// Privacy with Weak Maps 
// WeakMap 的 key 是非枚举的
const SimpleDate = (function () {
  const _years = new WeakMap()

  class SimpleDate {
    constructor(year) {
      _years.set(this, year)
    }

    getYear() {
      return _years.get(this)
    }
  }

  return SimpleDate
}())

const date = new SimpleDate('2019')
date.getYear()  // '2019'
date._years  // undefined

// privileged methods
class Person {
  constructor() {
    this.talk = function () {
      console.log('hello')
    }
  }
}
const Liming = new A()
Liming.talk() // 'hello'

// Privacy methods
class Person {
  constructor() {
    const talk = function () {
      console.log('hi~')
    }

    this.callMethod = function () {
      talk()
    }
  }
}

const Liming = new A()
Liming.callMethod() // 'hi~'