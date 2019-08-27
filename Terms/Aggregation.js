/**
 * 学生可脱离学校而存在 
 */

class School {
  constructor() {
    this.init()
  }

  init() {
    const teacher = new Teacher()
    teacher.init()
    const student = new Student()
    student.init()
  }
}

class Student {
  init() {
    console.log('这是一个同学')
  }
}

class Teacher {
  init() {
    console.log('这是一个老师')
  }
}

const yifu = new School() // 这是一个老师 这是一个同学
const liming = new Student()
liming.init() // 这是一个同学
