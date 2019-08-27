/**
 * 车是轮子和方向盘存在的前提，且车对轮子和方向盘的生命周期负责。
 * 车创建后轮子方向盘创建，轮子方向盘在车销毁前销毁。
 */
class Car {
  constructor(color) {
    this.color = color
    const tyre = new Tyre()
    const wheel = new Wheel()
    this.init(tyre, wheel)
  }

  init(tyre, wheel) {
    tyre.init()
    wheel.init()
    console.log(this.color)
  }
}

class Tyre {
  init() {
    console.log('这是一个轮子')
  }
}

class Wheel {
  init() {
    console.log('这是一个方向盘')
  }
}

const redCar = new Car('red')
// 这是一个轮子
// 这是一个方向盘
// red