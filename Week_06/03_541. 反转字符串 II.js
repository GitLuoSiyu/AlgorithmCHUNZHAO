/**
 * @title 541. 反转字符串 II
 * @url https://leetcode-cn.com/problems/reverse-string-ii/solution/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    if(k == 1) return s
    let result = ''
    let temp = ''
    let dobulek = 2 * k
    for (let i = 0; i < s.length; i++) { 
        const element = s[i];
        let kyu = i % dobulek
        if(kyu == 0){
            result += temp  
            temp = ''
        }
        if(kyu < k){
            temp = element + temp
        }else {
            temp =  temp + element 
        } 
    }

    return result + temp
};
