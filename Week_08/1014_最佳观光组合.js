/**
 * @title 1014. 最佳观光组合
 * @example 
    输入：[8,1,5,2,6]
    输出：11
    解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
 * @desc 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let res = 0,
        cur = 0;
    for (let a of A) {
        res = Math.max(res, cur + a);
        cur = Math.max(cur, a) - 1;
    }
    return res;
};


/**
 * @title 1014. 最佳观光组合
 * @example 
    输入：[8,1,5,2,6]
    输出：11
    解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
 * @desc 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
    let ans = A[0];
    let prevBestIdx = 0;
    for (let j = 1; j < A.length; j++) {
        ans = Math.max(ans, A[prevBestIdx] + prevBestIdx + A[j] - j);
        if (A[prevBestIdx] + prevBestIdx < A[j] + j) {
            prevBestIdx = j;
        }
    }
    return ans;
};