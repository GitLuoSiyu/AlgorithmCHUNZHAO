/**
 * @title 714. 买卖股票的最佳时机含手续费
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const dp = [0, -prices[0]]
    for (let i = 1, t; i < prices.length; i++) {
        t = dp[0] 
        // 中间变量可省略，因为当天买入卖出不影响结果
        dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee)
        dp[1] = Math.max(dp[1], t - prices[i])
    }
    return dp[0]
};