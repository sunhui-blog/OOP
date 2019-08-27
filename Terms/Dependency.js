/**
 * 一个类的改变会影响使用他的类
 * 当mac自动更新时 会影响人使用
 * 依赖关系有如下三种情况：
1、A类是B类中的（某中方法的）局部变量；
2、A类是B类方法当中的一个参数；
3、A类向B类发送消息，从而影响B类发生变化；
如下为第一种关系
 */
class People {
  useMac() {
    const mac = new Mac()
    mac.update()
  }
}

class Mac {
  update() {
    console.log("升级系统")
  }
}

const liming = new People()
liming.useMac() // 升级系统