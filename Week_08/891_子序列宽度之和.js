/**
 * @title 891. 子序列宽度之和
 * @description 
 * @param {number[]} A
 * @return {number}
 */
var sumSubseqWidths = function (A) {
    const mod = 1000000007;
    const length = A.length;

    const powers = [1];
    while (powers.length < length) {
        powers.push((powers[powers.length - 1] << 1) % mod);
    }

    A.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < length; i++) {
        total += ((powers[i] - powers[length - i - 1]) * A[i]) % mod;
        total %= mod;
    }
    return total;
};