/**
 * @title 1208. 尽可能使字符串相等
 * @description 
    给你两个长度相同的字符串，s 和 t。
    将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。
    用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。
    如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。
    如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。
 * @example
    输入：s = "abcd", t = "bcdf", cost = 3
    输出：3
    解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。

    输入：s = "abcd", t = "acde", cost = 0
    输出：1
    解释：你无法作出任何改动，所以最大长度为 1。
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let left = 0,
        right = 0,
        result = 0,
        cost = 0;

    while (right < s.length) {
        cost += Math.abs(t[right].charCodeAt() - s[right].charCodeAt())
        // 判断条件
        while (cost > maxCost) {
            cost -= Math.abs(t[left].charCodeAt() - s[left].charCodeAt())
            left ++
        }
        result = Math.max(result, right - left + 1)
        right++
    }
    return result
};