/**
 * @title 77. 组合
 * @url https://leetcode-cn.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = []
    const helpers = (n, k, pathUrl) => {
        if (n < k || k == 0) {
            if (k == 0) {
                result.push(pathUrl.slice())
            }
            return
        }
        helpers(n - 1, k - 1, pathUrl.concat(n))
        helpers(n - 1, k, pathUrl)
    }

    helpers(n, k, [])
    return result
};

