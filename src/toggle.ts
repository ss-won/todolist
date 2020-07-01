import { add } from './add.js';
const btn = document.getElementById("toggle");
const mainbox = document.getElementById("main");
const tail = document.createElement("div");
tail.className = "external-box";
tail.id = "tail";
const msg = `<input type="text" id="add" name="add" placeholder="할일을 입력 후, Enter를 누르세요" required>`;
const form = document.createElement("form");
form.id = "submit";
form.innerHTML = msg;

const toggle = (e) => {
    e.preventDefault();
    const submit = document.getElementById("submit");
    if(submit===null){
        form.addEventListener("submit", add);
        tail.appendChild(form);
        mainbox.appendChild(tail);
        document.getElementById("add").focus();
        console.log(form);
    }
    else{
        //tail.removeChild(tail.lastChild)
        tail.remove();
    };
}

export const tg = {btn, tail, toggle};