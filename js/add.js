import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
export const _remainer = document.getElementById("rm_num");
export const todoList = document.getElementById("todolist");
export const indexMap = new Map();
export const add = (e) => {
    e.preventDefault();
    let li = mkList();
    li.addEventListener("change", checkit);
    li.addEventListener("mouseenter", (e) => {
        let btn = e.target.lastChild;
        btn.style.visibility = "visible";
        console.log(e);
    });
    li.addEventListener("mouseleave", (e) => {
        let btn = e.target.lastChild;
        btn.style.visibility = "hidden";
    });
    console.log(li);
    console.log(indexMap.entries());
};
const mkList = () => {
    let input = document.getElementById("add");
    let val = input.value;
    const li = document.createElement("li");
    todoList.appendChild(li);
    input.value = "";
    li.className = "_todolist";
    li.appendChild(mkInner(li, val));
    li.appendChild(mkBtn(li));
    return li;
};
const mkInner = (li, val) => {
    const frag = document.createDocumentFragment();
    const _inner = document.createElement("input");
    const _label = document.createElement("label");
    _inner.type = "checkbox";
    _inner.id = todoList.children.length.toString();
    _label.setAttribute("for", _inner.id);
    _label.innerText = val;
    frag.appendChild(_inner);
    frag.appendChild(_label);
    indexMap.set(li, _inner.id);
    _remainer.innerText = (indexMap.size - checked.size).toString();
    return frag;
};
const mkBtn = (li) => {
    const _anchor = document.createElement("a");
    const msg = `<img src="../images/trash-solid.svg" alt="remove" height=15 width=15 />`;
    _anchor.innerHTML = msg;
    _anchor.href = "";
    _anchor.className = "rm";
    _anchor.addEventListener("click", remove);
    return _anchor;
};
//# sourceMappingURL=add.js.map