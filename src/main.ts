import { printDate, printDay, d } from './date.js';
import { add, submit, todoList } from './add.js';
import { checkit } from './check.js';
import { remove } from './rm.js';

let _date = d.getDate();
let _month = d.getMonth();
let _day = d.getDay();
let _year = d.getFullYear();
printDate(_year, _month, _date);
printDay(_day);

submit.addEventListener("submit", add);


