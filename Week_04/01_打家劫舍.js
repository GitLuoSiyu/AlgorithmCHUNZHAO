/**
 * @title 198. 打家劫舍
 * @url https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 * @desc 打家劫舍 - 动态规划，降维不如去维
 */
var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    // 仍然用两个变量来存储方案一和方案二的最优结果
    // 不同的是，这次从0开始，lastIndex 取最小值 1
    let sum1 = nums[0];
    let sum2 = nums[1];

    // 然后通过迭代不断增大 lastIndex，过程中维护新的sum1，sum2，直到数组末尾
    for (let lastIndex = 2; lastIndex < nums.length; lastIndex++) {
        let tmp = sum1;

        // 此时的方案一就是上一步中的方案二，
        // 但要求的是最优解，所以要判断前一步的 sum1 和 sum2 哪个更大
        if (sum2 > sum1) {
            sum1 = sum2;
        }

        // sum2 是包含最后一栋房子的方案， 
        // 每向后增加一栋房子，就是前一步的 sum1（不包含 lastIndex - 1 ） 
        // 加上当前 lastIndex 栋房子的金钱
        sum2 = tmp + nums[lastIndex];
    }

    return sum1 > sum2 ? sum1 : sum2;
};