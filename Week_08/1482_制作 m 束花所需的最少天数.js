/**
 * @title 1482. 制作 m 束花所需的最少天数
 * @url https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * @@description 
给你一个整数数组 bloomDay，以及两个整数 m 和 k 。
现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。
花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。
请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    var dayLen = Math.max(...bloomDay);
    var left = 0,
        right = dayLen;
    var min = Infinity;
    while (left <= right) {
        // 二分搜索，判断指定天数时，是否可以满足制作花束的条件
        var mid = (left + right) >> 1;
        var flowers = buildFlowers(bloomDay, mid);
        var match = isMatch(flowers, m, k)
        if (match) {
            // 如果指定天数mid时，可以制作出花束，那么记录下天数，搜索范围左移，看看有没有更少的天数也能满足条件
            min = Math.min(min, mid);
            right = mid - 1;
        } else {
            // 如果指定天数mid时，不可以制作花束，则搜索范围右移，看有没有满足条件的天数
            left = mid + 1;
        }
    }
    return min === Infinity ? -1 : min;
};

function isMatch(flowers, m, k) {
    // 当前花园的开花状态下，是否能满足制作花束的条件
    var count = 0;
    var c = 0;
    for (let i = 0; i < flowers.length; i++) {
        if (flowers[i] === 0) {
            c++;
            if (c === k) {
                c = 0;
                count++;
            }
        } else {
            c = 0;
        }
    }
    return count >= m;
}

function buildFlowers(bloomDay, day) {
    // 当day天时，花园的开花情况
    var arr = Array.from(bloomDay);
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= day) {
            arr[i] = 0;
        }
    };
    return arr;
};