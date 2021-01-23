/**
 * @title 1002. 查找常用字符
 * @description 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
   @example 
    输入：["bella","label","roller"]
    输出：["e","l","l"]
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function (A) {
    const minArr = minEl(A)
    const res = []
    for (let i = 0; i < minArr[1]; i++) {
        let target = A[minArr[0]][i]
        let all = true
        for (let j = 0; j < A.length; j++) {
            if (j === minArr[0]) continue
            if (all === false) continue
            let idx
            if ((idx = A[j].indexOf(target)) === -1) {
                all = false
            } else {
                A[j] = A[j].slice(0, idx) + A[j].slice(idx + 1)
            }
        }
        if (all) res.push(target)
    }

    return res
};

function minEl(arr) {
    const res = [0, Number.MAX_SAFE_INTEGER] // [idx, len]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < res[1]) {
            res[0] = i
            res[1] = arr[i].length
        }
    }
    return res
}