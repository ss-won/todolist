/* get <div> elements associated to date printing */
const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");

/* A function to print year, month, date */
const printDate = (y, m, dt) => {
    m += 1;
    const date = `<h2 id="ymd">${y}년 ${m}월 ${dt}일</h2>`;
    divDate.innerHTML = date;
}

/* A function to print day */
const printDay = (dy) => {
    //0-1 Mon-Sun
    const Day = ['일', '월', '화', '수', '목', '금', '토'];
    divDay.innerHTML = `<p id="day">${Day[dy]}요일</p>`;
}

export { printDate, printDay }