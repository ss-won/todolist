import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
const input = document.getElementById("add");
export const _remainer = document.getElementById("rm_num");
export const todoList = document.getElementById("todolist");
export const submit = document.getElementById("submit");
export const indexMap = new Map();
export const add = (e) => {
    e.returnValue = false;
    let val = input.value;
    const li = document.createElement("li");
    const _inner = document.createElement("input");
    const _label = document.createElement("label");
    const _anchor = document.createElement("a");
    const _imgbtn = document.createElement("img");
    todoList.appendChild(li);
    input.value = "";
    li.className = "_todolist";
    _inner.type = "checkbox";
    _inner.id = todoList.children.length.toString();
    _label.setAttribute("for", _inner.id);
    _label.innerText = val;
    li.appendChild(_inner);
    li.appendChild(_label);
    li.addEventListener("change", checkit);
    indexMap.set(li, _inner.id);
    _remainer.innerText = (indexMap.size - checked.size).toString();
    _imgbtn.src = "../images/trash.png";
    _imgbtn.height = 25;
    _imgbtn.width = 25;
    _anchor.appendChild(_imgbtn);
    _anchor.href = "#";
    li.appendChild(_anchor);
    li.lastChild.addEventListener("click", remove);
    console.log(li);
    console.log(indexMap.entries());
};
//# sourceMappingURL=add.js.map