var divDate = document.getElementById("_date");
var divDay = document.getElementById("_day");
export var d = new Date();
export var printDate = function (y, m, dt) {
    var date = "<h3>" + y + "년 " + m + "월" + dt + "일" + "</h3>";
    divDate.innerHTML = date;
};
export var printDay = function (dy) {
    var Day = ['월', '화', '수', '목', '금', '토', '일'];
    divDay.innerHTML = "<p>" + Day[dy] + "요일</p>";
};
//# sourceMappingURL=date.js.map