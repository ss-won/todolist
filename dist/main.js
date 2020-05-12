import { printDate, printDay, d } from './date.js';
import { add, submit } from 'add.js';
var _date = d.getDate();
var _month = d.getMonth();
var _day = d.getDay();
var _year = d.getFullYear();
printDate(_year, _month, _date);
printDay(_day);
submit.addEventListener("submit", add);
//# sourceMappingURL=main.js.map