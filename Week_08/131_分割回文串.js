/**
 * @title 131. 分割回文串
 * @url https://leetcode-cn.com/problems/palindrome-partitioning/
 * @description 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

    let ans = [];

    backtrack(0, []);
    return ans;

    function backtrack(index, path) {
        if (index === s.length) {
            ans.push(path.slice());
            return;
        }
        for (let i = index; i < s.length; i++) {
            // 判断当前的rest是否是回文串
            if (!isPalindrome(index, i)) continue;
            path.push(s.slice(index, i + 1));
            backtrack(i + 1, path);
            path.pop();
        }
    }

    function isPalindrome(start, end) {
        let lo = start;
        let hi = end;

        while (lo < hi) {
            if (s[lo++] !== s[hi--]) return false;
        }
        return true;
    }
};