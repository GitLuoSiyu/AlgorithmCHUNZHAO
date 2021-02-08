/**
 * @title 17. 电话号码的字母组合
 * @url https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    const res = [];
    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const dfs = (curStr, i) => { 
        // curStr是当前字符串，i是扫描的指针
        if (i > digits.length - 1) { 
            res.push(curStr); 
            return; 
        }
        const letters = map[digits[i]]; 
        // 当前数字对应的字母
        for (const l of letters) {
            dfs(curStr + l, i + 1); 
        }
    };
    dfs('', 0); 
    return res
};