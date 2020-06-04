const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");
export let d = new Date();
export const printDate = (y, m, dt) => {
    m += 1;
    const date = `<h2 id="ymd">${y}년 ${m}월 ${dt}일</h2>`;
    divDate.innerHTML = date;
};
export const printDay = (dy) => {
    const Day = ['일', '월', '화', '수', '목', '금', '토'];
    divDay.innerHTML = `<p id="day">${Day[dy]}요일</p>`;
};
//# sourceMappingURL=date.js.map