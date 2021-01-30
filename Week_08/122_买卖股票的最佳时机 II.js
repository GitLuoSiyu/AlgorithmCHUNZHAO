/**
 * @title 122. 买卖股票的最佳时机 II
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
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