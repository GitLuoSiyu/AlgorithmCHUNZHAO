/*
 * --- 手动实现 instanceof ---
 */

function newInstanceOf(leftValue, rightValue) {
    if (typeof leftValue !== 'object' || rightValue == null) {
        return false;
    }

    let rightProto = rightValue.prototype;
    leftValue = leftValue.__proto__;

    while (true) {
        if (leftValue === null) return false;
        if (leftValue === rightProto) return true;
        leftValue = leftValue.__proto__;
    }
}

/*
 * --- 验证 ---
 */

const a = [];
const b = {};

function Foo() {}

var c = new Foo()

function Child() {}

function Father() {}
Child.prototype = new Father()
var d = new Child()

console.log(newInstanceOf(a, Array)) // true
console.log(newInstanceOf(b, Object)) // true
console.log(newInstanceOf(b, Array)) // false
console.log(newInstanceOf(a, Object)) // true
console.log(newInstanceOf(c, Foo)) // true
console.log(newInstanceOf(d, Child)) // true
console.log(newInstanceOf(d, Father)) // true
console.log(newInstanceOf(123, Object)) // false 
console.log(123 instanceof Object) // false


// 在实现代码中，我们判断 leftValue 是否为 rightValue 的实例，思想是在 leftValue 的原型链上，即 leftValue.__proto__ 上寻找是否存在 rightValue.prototype。

