/**
 * @title 151. 翻转字符串里的单词
 * @url https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};