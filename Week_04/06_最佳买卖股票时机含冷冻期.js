/**
 * @title 309. 最佳买卖股票时机含冷冻期
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length; 
    if (n == 0) return 0
    let hold = new Array(n);    // 第i天持有股票的最大收益
    let unhold = new Array(n);  // 第i天不持有股票的最大收益
    hold[0] = -prices[0];       // 第0天 买了股票的收益
    unhold[0] = 0
    for (let i = 1; i < n; i++) {
        if (i == 1) { 
            hold[i] = Math.max(hold[i - 1], -prices[1]);
        } else {
            hold[i] = Math.max(hold[i - 1], unhold[i - 2] - prices[i]);
        }
        unhold[i] = Math.max(unhold[i - 1], hold[i - 1] + prices[i]);
    }
    return unhold[n - 1]
};