// 顾客和商品
class Customer {
  constructor(sort, name) {
    this.name = 'liming'
    this.product = new Product(sort, name)
  }

  buy() {
    this.product.init()
  }
}

class Product {
  constructor(sort, name) {
    this.sort = sort
    this.name = name
    this.owner = ''
  }

  init() {
    console.log(this.sort, this.name)
  }

  isOwner() {
    this.owner = new Customer(this.sort, this.name)
    console.log(this.owner.name)
  }
}

const liming = new Customer('fruit', 'apple')
liming.buy() // fruit apple
const apple = new Product('fruit', 'apple')
apple.isOwner() // liming