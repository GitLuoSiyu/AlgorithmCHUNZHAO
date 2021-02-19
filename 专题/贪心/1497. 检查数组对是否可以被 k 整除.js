/**
 * @title 1497. 检查数组对是否可以被 k 整除
 * @url https://leetcode-cn.com/problems/check-if-array-pairs-are-divisible-by-k/
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    if (!arr.length) return true
    if (arr.length % 2 != 0) return false
    const map = new Map()
    arr.forEach(item => {
        let mod = (item % k + k) % k
        if (map.get(mod)) {
            map.set(mod, map.get(mod) - 1)
        } else {
            let key = mod == 0 ? 0 : k - mod
            map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1)
        }
    })
    return [...map.values()].every(item => item == 0)
};