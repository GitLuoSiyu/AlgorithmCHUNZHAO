/**
 * @title K 次取反后最大化的数组和
 * @desc 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）
 * @example 
 * 输入：A = [4,2,3], K = 1
   输出：5
   解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    if (A.length === 0) return 0;
    A.sort((a, b) => a - b);
    let res = 0;
    let posIdx;
    for (let i = 0, num = 0; i < A.length; i++) {
        if (num < K) {
            if (A[i] < 0) {
                A[i] = -A[i];
            } else {
                if (posIdx == null) {
                    posIdx = Math.abs(A[i]) - Math.abs(A[i - 1]) > 0 ? i - 1 : i;
                }
                A[posIdx] = -A[posIdx];
            }
            num++;
        }
    }
    res = A.reduce((ac, el) => ac + el, 0);
    return res;
};