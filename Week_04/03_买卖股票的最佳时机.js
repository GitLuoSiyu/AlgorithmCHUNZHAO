/**
 * @title 121. 买卖股票的最佳时机
 * @description 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length) return 0

    let min = Number.MAX_SAFE_INTEGER,
        max = 0;
    for (let i = 0, price; i < prices.length; i++) {
        price = prices[i]
        min = Math.min(min, price)
        max = Math.max(max, price - min)
    }
    return max
};