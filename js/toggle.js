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
const obj = btn.children[0];
const svgDocument = obj.contentDocument;
const svg = svgDocument.getElementsByClassName("plusbtn");
const toggle = (e) => {
    e.preventDefault();
    console.log(svg[0]);
    const submit = document.getElementById("submit");
    if (submit === null) {
        form.addEventListener("submit", add);
        tail.appendChild(form);
        mainbox.appendChild(tail);
        document.getElementById("add").focus();
        svg[0].setAttribute("fill", "red");
    }
    else {
        tail.remove();
        svg[0].setAttribute("fill", "#04B486");
    }
    ;
};
export const tg = { btn, tail, toggle };
//# sourceMappingURL=toggle.js.map