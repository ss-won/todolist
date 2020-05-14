const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");
export let d = new Date();
export const printDate = (y, m, dt) => {
    let date = "<h3>" + y + "년 " + m + "월" + dt + "일" + "</h3>";
    divDate.innerHTML = date;
};
export const printDay = (dy) => {
    let Day = ['일', '월', '화', '수', '목', '금', '토'];
    divDay.innerHTML = "<p>" + Day[dy] + "요일</p>";
};
//# sourceMappingURL=date.js.map