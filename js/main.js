import { printDate, printDay, d } from './date.js';
import { tg } from './toggle.js';
let _date = d.getDate();
let _month = d.getMonth();
let _day = d.getDay();
let _year = d.getFullYear();
printDate(_year, _month, _date);
printDay(_day);
tg.btn.addEventListener("click", tg.toggle);
//# sourceMappingURL=main.js.map