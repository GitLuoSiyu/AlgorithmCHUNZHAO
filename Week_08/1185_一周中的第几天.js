/**
 * @title 1185. 一周中的第几天
 * @desc 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 * @key 基姆拉尔森计算公式 W= (d+2m+3*(m+1)/5+y+y/4-y/100+y/400) mod 7*
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    const aWeekTxt = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return aWeekTxt[getWeek(day, month, year)];
};


function getWeek(day, month, year) {
    const startWeek = 1
    if (month < 3) {
        month += 12
            --year
    }
    return (day + startWeek + 2 * m + Math.floor(3 * (month + 1) / 5) + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7
}