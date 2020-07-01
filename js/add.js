import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
import { tg } from './toggle.js';
export const _remainer = document.getElementById("rm_num");
export const todoList = document.getElementById("todolist");
export const indexMap = new Map();
export const add = (e) => {
    e.preventDefault();
    const li = mkList();
    tg.tail.remove();
    li.addEventListener("change", checkit);
    li.addEventListener("mouseenter", (e) => {
        let btn = e.target.lastChild;
        btn.style.visibility = "visible";
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
    const obj = document.createElement("object");
    obj.type = "image/svg+xml";
    obj.data = "../images/trash-solid.svg";
    obj.innerText = "이 브라우저는 svg를 지원하지 않습니다.";
    obj.id = `obj${li.firstChild.id}`;
    _anchor.href = "";
    _anchor.className = "rm";
    _anchor.addEventListener("click", remove);
    _anchor.addEventListener("mouseenter", (e) => {
        let obj = e.target.firstChild;
        let svgDocument = obj.contentDocument;
        let svg = svgDocument.getElementsByClassName("trash");
        svg[0].setAttribute("fill", "#FA5858");
        svg[0].setAttribute("style", "opacity:1");
    });
    _anchor.addEventListener("mouseleave", (e) => {
        let obj = e.target.firstChild;
        let svgDocument = obj.contentDocument;
        let svg = svgDocument.getElementsByClassName("trash");
        svg[0].setAttribute("fill", "currentColor");
        svg[0].setAttribute("style", "opacity:0.3");
    });
    _anchor.appendChild(obj);
    return _anchor;
};
//# sourceMappingURL=add.js.map