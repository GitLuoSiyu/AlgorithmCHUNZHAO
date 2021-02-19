/**
 * @title 1578. 避免重复字母的最小删除成本
 * @url https://leetcode-cn.com/problems/minimum-deletion-cost-to-avoid-repeating-letters/
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
    let i = 0,
        res = 0;
    while (i < s.length) {
        let count = cost[i],
            max = cost[i];
        while (s[i+1] && s[i] == s[i+1]) {
            count += cost[i+1]
            max = Math.max(cost[i+1], max)
            i++;
        }
        if (count > max) {
            res += count - max
        } else {
            i++
        }
    }
    return res
};

/**
 * @description
给你一个字符串 s 和一个整数数组 cost ，其中 cost[i] 是从 s 中删除字符 i 的代价。
返回使字符串任意相邻两个字母不相同的最小删除成本。
请注意，删除一个字符后，删除其他字符的成本不会改变。
 */