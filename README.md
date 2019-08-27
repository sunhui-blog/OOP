# OOP

use OOP in ES6

Concept&Practise：

<ul>
  <li>对象(Object): 对象代表一个实体的基本构建块。</li>
  <li>类(Class): 类是对象的蓝图。</li>
  <li>抽象化(Abstraction): 抽象代表现实世界中实体的行为。</li>
  <li><span style="color: red;">封装(Encapsulation)</span>: 封装是将数据绑定在一起，并隐藏他们外部世界的机制。(把数据和操作数据的方法绑定起来，对数据的访问只能通过已定义的接口。)</li>
  <li><span style="color: red;">继承(Inheritance)</span>: 继承是从现有的机制作出新的类。(是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，并可以增加它自己的新功能的能力。)</li>
  <li><span style="color: red;">多态性(Polymorphism)</span>: 定义的机制来以不同的形式存在。(由继承而产生的相关的不同的类，其对象对同消息做出不同的响应。)</li>
</ul>

<p>类作为面向对象的基础，着重理解一下类的概念和关系。</p>

Terms(类与类、类与接口):

<ul>
  <li>
    泛化(Generalization)：(即继承)“is-a-kind-of”关系，子类和父类的关系。
  </li>
  <li>
    组合(Composition)：类之间整体与部分的关系("同生共死")。for instance: 车和车轮子
  </li>
  <li>
    聚合(Aggregation)：类之间整体和部分的关系("互不影响")。for instance: 学校和学生
  </li>
  <li>
    关联(Association)：(结构化关系)类之间相联系，一个对象中得到另一个对象。分双向、单向、自关联。通常将一个类的对象作为另一个类的属性。for instance: 我和我的朋友
  </li>
  <li>
    依赖(Dependency)：(使用关系)类一方改变影响到使用该类的一方。通常某个类的方法使用另一个类的对象作为参数。for instance: 人和Mac
  </li>
  <li>
    实现(Implementation)：接口和类之间的关系。类中操作实现了接口声明的操作。
  </li>
</ul>
<p>类之间的强弱关系：依赖<关联<聚合<组合<泛化(继承)</p>

Principle:

<p>面向对象开发原则：高内聚(Cohesion)、低耦合(Coupling)。多聚合、少继承</p>

<p>前五个比较重要,SOLDI 指的就是前五个。此内容详见：《敏捷软件开发：原则、模式与实践》</p>

<ul>
  <li>SRP 单一职责原则</li> 
  <li>OCP 开放-封闭原则</li>
  <li>LSP Liskov替换原则</li>
  <li>DIP 依赖倒置原则</li>
  <li>ISP 接口隔离原则</li>
  <li>REP 重用发布等价原则</li>
  <li>CCP 共同封闭原则</li>
  <li>CRP 共同重用原则</li>
  <li>ADP 无环依赖原则</li>
  <li>SDP 稳定依赖原则</li>
  <li>SAP 无环抽象原则</li>
</ul>
