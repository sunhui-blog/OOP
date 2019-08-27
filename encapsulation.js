// Keep Data Private

// Privacy with Privileged Methods
class SimpleDate {
  constructor (year) {
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
const SimpleDate = (function() {
  const _yearsKey = Symbol();
  class SimpleDate {
    constructor(year){
      this[_yearsKey] = year
    }

    getYear () {
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
const SimpleDate = (function() {
  const _years = new WeakMap()

  class SimpleDate {
    constructor (year) {
      _years.set(this, year)
    }

    getYear () {
      return _years.get(this)
    }
  }

  return SimpleDate
}())

const date = new SimpleDate('2019')
date.getYear()  // '2019'
date._years  // undefined