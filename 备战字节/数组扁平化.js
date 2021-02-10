var arr = [1, [2, [3, 4]]];

// 递归方法
function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
}


console.log(flatten(arr))


// ES6
function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flatten(arr))


// 原地解法
const arr1 = [0, 1, 2, [[[3, 4]]]];
console.log(arr1.flat(3)); // 3 代表数组内最多嵌套层数
// expected output: [0, 1, 2, 3, 4]
