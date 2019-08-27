class Person {
  constructor(age) {
    this.age = age
  }
  drink() {
    console.log('water')
  }
}

class Female extends Person {
  child() {
    console.log('call mama')
  }
}

const hanmeimei = new Female()
hanmeimei.drink() // water
hanmeimei.child() // call mama