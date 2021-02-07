/**
 * @title 860. 柠檬水找零
 * @url https://leetcode-cn.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    // 5元和10元的数量，20元不用于找零
    let five = 0, ten = 0;
    for (let i of bills) {
        switch (i) {
            case 5:
                // 5元直接收下
                five++;
                break;
            case 10:
                // 10元收下，并找零5元
                five--;
                ten++;
                break;
            default:
                // 20元，找零分两种情况：10 + 5和5 + 5 + 5，优先使用10 + 5
                if (ten > 0) {
                    ten--;
                    five--;
                } else {
                    five -= 3;
                }
        }
        // 找零必须用到5元
        if (five < 0) {
            return false;
        }
    }
    return true;
};
