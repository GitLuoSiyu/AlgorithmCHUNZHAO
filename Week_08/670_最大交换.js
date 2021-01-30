/**
 * @title 670. 最大交换
 * @desc 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    let nums = ("" + num).split("")
    let max = min = nums.length - 1
    let wait = -1
    if (nums.length == 1) return num
    for (let i = nums.length - 2; i >= 0; i--) {
        //当前用来比较的数字
        let curMax = wait != -1 ? nums[wait] : nums[max]
        if (nums[i] < curMax) {
            min = i
            //min的左边存在一个比max大的值，且该值左边还有一个较小的值，可以进行移位，因此重新调整max和wait
            if (wait != -1) {
                max = wait
                wait = -1
            }
        }
        if (nums[i] > curMax) {
            wait = i
        }
    }
    if (max !== min) {
        let tmp = nums[min]
        nums[min] = nums[max]
        nums[max] = tmp
    }
    return +nums.join("")
};