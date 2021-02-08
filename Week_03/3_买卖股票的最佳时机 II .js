/**
 * @title 122. 买卖股票的最佳时机 II
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
    dp[0][0] = 0, dp[0][1] = -prices[0];
    for (let i = 1; i < n; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
};


// 或者
var maxProfit = function (prices) {
    let profit = 0; // 收益
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1]; // 今天和昨天的差价
        if (diff > 0) { // 差价大于0
            profit += diff; // 今天卖掉，赚了今天和昨天的差价
        }
    }
    return profit
};