import { printDate, printDay } from './date.js';
import { tg } from './toggle.js'

/* get Date object, and print present date in screen. */
const d = new Date();
printDate(d.getFullYear(), d.getMonth(), d.getDate());
printDay(d.getDay());

/* add eventlistener to plus button. */
tg.btn.addEventListener("click", tg.toggle);
