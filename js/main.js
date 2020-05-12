import { printDate, printDay, d } from './date.js';
import { add, submit, todoList } from './add.js';
import { checkit } from './check.js';
let _date = d.getDate();
let _month = d.getMonth();
let _day = d.getDay();
let _year = d.getFullYear();
printDate(_year, _month, _date);
printDay(_day);
submit.addEventListener("submit", add);
todoList.addEventListener("click", () => {
    let eArr = todoList.children;
    for (let i = 0; i < eArr.length; i++) {
        eArr[i].addEventListener("change", checkit);
    }
});
//# sourceMappingURL=main.js.map