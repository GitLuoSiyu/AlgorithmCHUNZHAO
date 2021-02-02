/**
 * @title 22. 括号生成
 * @url https://leetcode-cn.com/problems/generate-parentheses/
 * @description 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // 经典回溯算法的应用，直接套用常规模板即可
    if (!n) return [];

    let left = 0,
        right = 0,
        result = [];
    backtrack('', 0, 0, n)
    return result;

    function backtrack(path, open, close, max) {
        if (path.length === 2 * n) {
            result.push(path);
            return;
        }

        if (open < max) backtrack(path + '(', open + 1, close, max);
        if (close < open) backtrack(path + ')', open, close + 1, max);
    }
};