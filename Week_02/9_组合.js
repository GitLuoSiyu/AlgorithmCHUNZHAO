/**
 * @title 77. 组合
 * @url https://leetcode-cn.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const helper = (n, k, path) => {
        if (n < k || k == 0) {
            if (k == 0) {
                res.push(path.slice());
            }
            return;
        }
        helper(n - 1, k - 1, path.concat(n));
        helper(n - 1, k, path);
    };

    helper(n, k, []);
    return res;
};