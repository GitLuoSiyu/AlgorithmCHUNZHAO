/**
 * @title 1006.笨阶乘
 * @example 
 * 输入：10
   输出：12
   解释：12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
    const ops = ["*", "/", "+", "-"];
    const arr = [];
    arr.push(N);
    for (let i = N - 1, idx = 0; i > 0; i--, idx++) {
        let op = ops[idx % 4];
        let arrIdx = arr.length - 1 < 0 ? 0 : arr.length - 1;
        switch (op) {
            case "*":
                arr[arrIdx] *= i;
                break;
            case "/":
                arr[arrIdx] = Math.floor(arr[arrIdx] / i);
                break;
            case "+":
                arr[0] += i;
                break;
            case "-":
                arr.push(i);
                break;
        }
    }

    let res = arr[0];
    for (let i = 1; i < arr.length; i++) {
        res -= arr[i];
    }
    return res;
};