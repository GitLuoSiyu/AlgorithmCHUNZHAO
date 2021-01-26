/**
 * @title 1011. 在 D 天内送达包裹的能力
 * @description 
    传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
    传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
    返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 * @key 二分查找，判断条件为mid能否在D天中运完
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let left = 0,
        right = 0;
    for (let w of weights) {
        left = Math.max(left, w)
        right += w
    }

    while(left < right) {
        let mid = (left + right) >> 1
        canShip(weights, D, mid) ? (right = mid) : (left = mid + 1)
    }
    return left;

    function canShip(weights, D, M) {
        let curr = M
        for (let w of weights) {
            if (w > curr) {
                D--
                curr = M
            }
            curr -= w
        }
        return D > 0
    }
};