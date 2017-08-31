// 它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，程序员可以自行决定抽象的级别。
class Student {
  fullName: string;
  // 在构造函数的参数上使用public等同于创建了同名的成员变量
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

// TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解
function greeter(person: Person) {
  console.log("Hello, " + person.firstName + " " + person.lastName);
  return "Hello, " + person.firstName + " " + person.lastName
}

// var user = {firstName: "Jane", lastName: "User"};
var user = new Student("Jane", "M.", "User")

// document.body.innerHTML = greeter(user);

let list: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3, 4]

console.log(list)
console.log(list2)

// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number]
x = ['hello', 10]
console.log('x--------->', x)

// 当访问一个越界的元素，会使用联合类型替代
x[3] = 'world'
console.log(x[3].toString())
console.log(x)
// x[6] = true

// 枚举类型
enum Color {Red, Green, Blue}
let c: Color = Color.Green
let colorName: string = Color[2]

console.log(colorName)

let notSure: any = 4
notSure = false
console.log('notSure---------------->', notSure)
// console.log('notSure isItExists------------>', notSure.ifItExists())
// console.log('notSure toFixed-------------->', notSure.toFixed())

function warnUser(): void {
  alert("This is my warning message")
}

let someValue: any = "this is a string"
// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
let strLength: number = (someValue as string).length
// let strLength: number = someValue.length


console.log('strLength---------------->', strLength)