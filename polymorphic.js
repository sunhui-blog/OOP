class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  showInfo() {
    console.log(this.name, this.age)
  }
}

class Employee extends Person {
  constructor(name, age, sex) {
    super(name, age)
    this.sex = sex
  }
  showInfo() {
    console.log(this.name, this.age, this.sex)
  }
}

const liming = new Person('LIMING', '10')
liming.showInfo()
const hanmeimei = new Employee('HANMEIMEI', '20', 'female')
hanmeimei.showInfo()