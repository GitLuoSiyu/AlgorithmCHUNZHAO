/**
 * @title 347. 前 K 个高频元素
 * @url https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 特殊情况返回
    if (nums.length === k) {
        return nums
    }

    let map = {},
        res = []
    // 创建map
    for (let cur of nums) {
        map[cur] ? map[cur] += 1 : map[cur] = 1
    }
    // 获取map的值组成的数组 用sort排序从大到小排序  slice前k个组成数组  转化为Set
    let num = new Set(Object.values(map).sort((v1, v2) => (v2 - v1)).slice(0, k))

    // 遍历map存在于set便加入结果
    for (let i in map) {
        if (num.has(map[i])) {
            res.push(i)
        }
    }
    return res
};