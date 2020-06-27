import { add } from './add.js';
const btn = document.getElementById("toggle");
const body = document.getElementById("body");
const msg = `<input type="text" id="add" name="add" placeholder="할일을 입력 후, Enter를 누르세요" required>`;
const form = document.createElement("form");
form.id = "submit";
form.innerHTML = msg;

const toggle = (e) => {
    e.preventDefault();
    const submit = document.getElementById("submit");
    if(submit===null){
        form.addEventListener("submit", add);
        body.appendChild(form);
        console.log(form);
    }
    else{
        body.removeChild(body.lastChild)
    };
}

export const tg = {btn, body, toggle};