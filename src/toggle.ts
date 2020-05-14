import { add } from './add.js';
const btn = document.getElementById("toggle");
const body = document.getElementById("body");
const msg = `<input type="text" id="add" name="add" required>`;
const form = document.createElement("form");
form.id = "submit";
form.innerHTML = msg;

const toggle = (e) => {
    e.preventDefault();
    let submit = document.getElementById("submit");
    if(submit==null){
        form.addEventListener("submit", add);
        body.appendChild(form);
        console.log(form);
    }
    else{
        body.removeChild(body.lastChild);
    }
}

export const tg = {btn, toggle};