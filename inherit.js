class Animal {
  constructor (age, color) {
    this.age = age
    this.color = color
  }

  drink () {
    console.log('water')
  }
}

class Cat extends Animal {
  sound () {
    console.log('miao~')
  }
}

class dog extends Animal {
  sound () {
    console.log('wang~')
  }
}

const littleCat = new Cat('1岁', 'white')
littleCat.sound() // miao~
littleCat.drink() // water
littleCat.age   // "1岁"
littleCat.color   // "white"

const littleDog = new dog('2岁', 'black')
littleDog.sound() // wang~
littleDog.drink() // water
littleDog.age   // "2岁"
littleDog.color   // "black"