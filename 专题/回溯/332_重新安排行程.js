/**
 * @title 332. 重新安排行程
 * @url https://leetcode-cn.com/problems/reconstruct-itinerary/
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    var map = {};
    for (var i = 0; i < tickets.length; i++) {
        !map[tickets[i][0]] && (map[tickets[i][0]] = []);
        map[tickets[i][0]].push(tickets[i][1]);
    }
    for (var i in map) {
        map[i].sort();
    }

    var t = tickets.length;
    var ans = ['JFK'];

    function dfs(start, n) {
        if (n === t) {
            return true;
        }
        var nextcity = map[start];
        if (!nextcity) return false;

        for (var i = 0; i < nextcity.length; i++) {
            var city = nextcity[i];
            nextcity.splice(i, 1);
            ans.push(city);
            if (dfs(city, n + 1)) return true;
            ans.pop();
            nextcity.splice(i, 0, city);
        }
    }

    dfs('JFK', 0);
    return ans;
};

/**
回溯，出现合适结果马上退出的方法：
1、思路改变：每层dfs保留自己的map，此map表示未进行的旅程；
2、若用完车票，则返回true， 反之返回false；进行是否继续向下递归的判断，做到遇到合适的结果马上退出；
3、提前进行排序；
 */