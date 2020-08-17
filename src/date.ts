/* 현재 날짜 불러오기 */
const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");

/* 년, 월, 일을 표시하는 함수 */
const printDate = (y, m, dt) => {
    m += 1;
    const date = `<h2 id="ymd">${y}년 ${m}월 ${dt}일</h2>`;
    divDate.innerHTML = date;
}

/* 요일을 표시하는 함수 */
const printDay = (dy) => {
    //0-1 Mon-Sun
    const Day = ['일', '월', '화', '수', '목', '금', '토'];
    divDay.innerHTML = `<p id="day">${Day[dy]}요일</p>`;
}

export { printDate, printDay }