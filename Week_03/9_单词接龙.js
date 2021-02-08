/**
 * @title 127. 单词接龙
 * @url https://leetcode-cn.com/problems/word-ladder/description/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    const queue = [];
    queue.push([beginWord, 1]);
  
    while (queue.length) {
      const [word, level] = queue.shift();  
      // 当前出列的单词
      if (word == endWord) {
        return level;
      }
      for (let i = 0; i < word.length; i++) { 
        for (let c = 97; c <= 122; c++) { 
          // 对应26个字母
          const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
          if (wordSet.has(newWord)) { // 单词表里有这个新词
            queue.push([newWord, level + 1]); 
            wordSet.delete(newWord);  
          }
        }
      }
    }
    return 0; 
};