let util = require('util')

// function Base() {
//   this.name = 'base'
//   this.base = 1996
//   this.sayHello = function () {
//     console.log('Hello ' + this.name)
//   }
// }
// Base.prototype.showName = function () {
//   console.log(this.name)
// }

// function Sub() {
//   this.name = 'sub'
// }
// // 仅继承在原型中定义的函数
// util.inherits(Sub, Base)
// let objBase = new Base()
// objBase.showName()
// objBase.sayHello()
// console.log(objBase)

// let objSub = new Sub()
// objSub.showName()
// // objSub.sayHello()
// console.log(objSub)

function Person() {
  this.name = 'linyj'
  this.toString = function () {
    return this.name
  }
}
let objPerson = new Person()
console.log(util.inspect(objPerson))
console.log(util.inspect(objPerson, true))

// util.isArray()
// util.isRegExp()
// util.isDate()
// util.isError()