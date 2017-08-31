function f(input: boolean) {
  // let声明一个变量，它使用的是词法作用域或块作用域
  let a = 100;
  let b;
  if (input) {
    // 块作用域变量在包含它们的块或for循环之外是不能访问的。
    let b = a + 1;
    return b;
  }

  return b;
}

console.log(f(true));

let x1 = 20;

function fa(x1) {
  x1 = 100;
}

// 当let声明出现在循环体里时拥有完全不同的行为。
// 不仅是在循环里引入了一个新的变量环境，而是针对每次迭代都会创建这样一个新作用域。

// *********
// for (let i = 0; i < 10 ; i++) {
//  setTimeout(function() {console.log(i); }, 100 * i);
// }
// *********


// *********
// for (var i = 0; i < 10 ; i++) {
//  setTimeout(function() {console.log(i); }, 100 * i);
//  console.log(i);
// }
// *********

// 基本原则就是如果一个变量不需要对它写入，
// 那么其它使用这些代码的人也不能够写入它们
const aaa = 'adfa';

let input = [1, 2];
let [first, second] = input;
console.log('first, second--------->', first, second);
// 这里不在一个作用域里面，需要加上分号结尾
[first, second] = [second, first];
console.log('swap first second-------->', first, second);

// let [first, ...rest] = [1, 2, 3, 4]
// console.log(first)
// console.log(rest)

// 有声明的解构赋值
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

let { a, b } = o;

// 没有声明的解构赋值
({ a, b } = { a: 'baz', b: 101 });

console.log('a, b-------->', a, b);

function keepWholeObject(wholeobject: {a: string, b?: number}) {
  let {a, b=1001} = wholeobject
}

let firsts = [1, 2];
let seconds = [3, 4];
let bothPlus = [0, ...firsts, ...seconds, 5];
console.log('bothPlus-------------->', bothPlus)

let defaults = {food: 'spicy', price: '$$', ambiance: 'noisy'};
let search = {...defaults, nice: 'rich'};
console.log('search-------------->', search)

