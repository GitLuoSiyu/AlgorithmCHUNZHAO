/**
 * @title 面试题 17.22. 单词转换
 * @description 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。
 * @example 
输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
["hit","hot","dot","lot","log","cog"]

 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]} 
 */
function isSameWord(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff++;
            if (diff > 1) {
                return false;
            }
        }
    }

    return diff === 1; // 不包括相同的
}


// 只相差一个字符的 - 且没使用过的
function getSameWords(arr, word, usedMap) {
    // 不能被使用过
    return arr.filter(item => !usedMap[item] && isSameWord(word, item));
}

var findLadders = function (beginWord, endWord, wordList) {
    // endWord 不在字典中
    if (wordList.includes(endWord) === -1) {
        return [];
    }

    const usedMap = {
        [beginWord]: 1 // 防止自身在字典里
    };

    let ans = [];
    const s = [beginWord];

    let top = beginWord;
    while (s.length) {
        top = s[s.length - 1];
        // 剪枝
        usedMap[top] = 1;

        // 结束点1
        if (top === endWord) {
            ans = s.slice();
            break;
        }

        let sameWords = getSameWords(wordList, top, usedMap);
        // console.log(top, sameWords);
        // 结束点2 - 没词了，回到上一个单词，继续获取相似单词
        // （因为当前单词已经使用过了，所以不会重复获取）
        if (!sameWords.length) {
            s.pop();
            continue;
        }


        s.push(
            sameWords[0]
        );
    }

    return ans;
};