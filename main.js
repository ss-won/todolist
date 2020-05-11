

/* 현재 날짜 불러오기 */
const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");
let d = new Date();
let _date = d.getDate();
let _month = d.getMonth();
let _day = d.getDay();
let _year = d.getFullYear();

const printDate = (y, m, dt) => {
    let date = "<h3>" + y + "년 " + m + "월" + dt + "일" + "</h3>";
    divDate.innerHTML = date;
}

const printDay = (dy) => {
    //0-1 Mon-Sun
    let Day = ['월','화','수','목','금','토','일'];
    divDay.innerHTML = "<p>" + Day[dy] + "요일</p>";
}

printDate(_year,_month,_date);
printDay(_day);

//@Test
//console.log(_date, _month, _day, _year);