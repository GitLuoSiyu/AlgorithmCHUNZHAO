/**
 * @title 1733. 需要教语言的最少人数
 * @description 
在一个由 m 个用户组成的社交网络里，我们获取到一些用户之间的好友关系。两个用户之间可以相互沟通的条件是他们都掌握同一门语言。

给你一个整数 n ，数组 languages 和数组 friendships ，它们的含义如下：

总共有 n 种语言，编号从 1 到 n 。
languages[i] 是第 i 位用户掌握的语言集合。
friendships[i] = [u​​​​​​i​​​, v​​​​​​i] 表示 u​​​​​​​​​​​i​​​​​ 和 vi 为好友关系。
你可以选择 一门 语言并教会一些用户，使得所有好友之间都可以相互沟通。请返回你 最少 需要教会多少名用户。

请注意，好友关系没有传递性，也就是说如果 x 和 y 是好友，且 y 和 z 是好友， x 和 z 不一定是好友。
 * @example 
 输入：n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
输出：1
解释：你可以选择教用户 1 第二门语言，也可以选择教用户 2 第一门语言。
 * @url https://leetcode-cn.com/problems/minimum-number-of-people-to-teach
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
    // 求交集
    const noIntersect = function (a, b) {
        let inter = [];
        inter = a.filter(v => b.includes(v));
        return inter.length == 0;
    }
    const lanCnt = new Array(n).fill(0);
    const visited = new Array(languages.length).fill(0);

    // 存在友谊的人中没有相同语言的人数
    let cnt = 0;
    for (let fs of friendships) {
        if (noIntersect(languages[fs[0] - 1], languages[fs[1] - 1])) {
            if (!visited[fs[0] - 1]) {
                for (let i of languages[fs[0] - 1])
                    lanCnt[i - 1]++;
                cnt++;
                visited[fs[0] - 1] = 1;
            }
            if (!visited[fs[1] - 1]) {
                for (let i of languages[fs[1] - 1])
                    lanCnt[i - 1]++;
                cnt++;
                visited[fs[1] - 1] = 1;
            }
        }
    }
    return cnt - Math.max(...lanCnt);
};