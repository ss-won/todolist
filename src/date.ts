//input이 주어지면 todoList 내부에 li 요소 추가하기

/* 현재 날짜 불러오기 */
const divDate = document.getElementById("_date");
const divDay = document.getElementById("_day");
export let d = new Date();

export const printDate = (y, m, dt) => {
    let date = "<h3>" + y + "년 " + m + "월" + dt + "일" + "</h3>";
    divDate.innerHTML = date;
}

export const printDay = (dy) => {
    //0-1 Mon-Sun
    let Day = ['월', '화', '수', '목', '금', '토', '일'];
    divDay.innerHTML = "<p>" + Day[dy] + "요일</p>";
}


//@Test
//console.log(_date, _month, _day, _year);