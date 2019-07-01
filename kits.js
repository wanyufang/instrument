var kits = {};

// 生成随机颜色
// 1.生成三个随机整数
kits.randomInt = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
// // 封装一个可以获得随机颜色的函数
kits.randomColor = function () {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// 获取日期
kits.date = function () {
    var dates = new Date();
    var y = dates.getFullYear();
    var M = dates.getMonth()+1;
    var d = dates.getDate();
    var h = dates.getHours();
    var m = dates.getMinutes();
    var s = dates.getSeconds();
    // 给个位数前加'0'
    M = M < 10 ? '0' + M : M;
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    //时间的格式设置
    var time = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
    return time;
}