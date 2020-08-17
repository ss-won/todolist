import { printDate, printDay } from './date.js';
import { tg } from './toggle.js'

/* 날짜 객체를 받아와서, 현재 날짜 화면에 표시 */
const d = new Date();
printDate(d.getFullYear(), d.getMonth(), d.getDate());
printDay(d.getDay());

/* list 추가 버튼을 가져와 click 이벤트 리스너 달기 */
tg.btn.addEventListener("click", tg.toggle);
