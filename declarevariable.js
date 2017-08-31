var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function f(input) {
    // let声明一个变量，它使用的是词法作用域或块作用域
    var a = 100;
    var b;
    if (input) {
        // 块作用域变量在包含它们的块或for循环之外是不能访问的。
        var b_1 = a + 1;
        return b_1;
    }
    return b;
}
console.log(f(true));
var x1 = 20;
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
var aaa = 'adfa';
var input = [1, 2];
var first = input[0], second = input[1];
console.log('first, second--------->', first, second);
// 这里不在一个作用域里面，需要加上分号结尾
_a = [second, first], first = _a[0], second = _a[1];
console.log('swap first second-------->', first, second);
// let [first, ...rest] = [1, 2, 3, 4]
// console.log(first)
// console.log(rest)
// 有声明的解构赋值
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = o.b;
// 没有声明的解构赋值
(_b = { a: 'baz', b: 101 }, a = _b.a, b = _b.b);
console.log('a, b-------->', a, b);
function keepWholeObject(wholeobject) {
    var a = wholeobject.a, _a = wholeobject.b, b = _a === void 0 ? 1001 : _a;
}
var firsts = [1, 2];
var seconds = [3, 4];
var bothPlus = [0].concat(firsts, seconds, [5]);
console.log('bothPlus-------------->', bothPlus);
var defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
var search = __assign({}, defaults, { nice: 'rich' });
console.log('search-------------->', search);
var _a, _b;
