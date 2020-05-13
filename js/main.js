import { printDate, printDay, d } from './date.js';
import { add, submit } from './add.js';
let _date = d.getDate();
let _month = d.getMonth();
let _day = d.getDay();
let _year = d.getFullYear();
printDate(_year, _month, _date);
printDay(_day);
submit.addEventListener("submit", add);
//# sourceMappingURL=main.js.map