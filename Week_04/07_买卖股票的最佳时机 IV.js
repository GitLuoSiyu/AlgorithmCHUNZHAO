/**
 * @title 188. 买卖股票的最佳时机 IV
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const dp = new Int16Array(k << 1).fill(-prices[0])
    for (let i = 0; i < prices.length; i++)
        for (let j = Math.min(dp.length, i + 1); j--;) 
            dp[j] = Math.max(dp[j], (dp[j - 1] || 0) + (j & 1 ? prices[i] : -prices[i]))
    return Math.max(0, ...dp)
};