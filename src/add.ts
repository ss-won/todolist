import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
import { tg } from './toggle.js';

/*
  _remainer : HTMLElement // <div> element that represent the number of remaining todos.
  todolist : HTMLElement // <ui> element that hold the todolist.
  indexMap : Object // Map Object for mapping li element and inner id.
*/
const _remainer = document.getElementById("rm_num") as HTMLInputElement;
const todoList = document.getElementById("todolist");
const indexMap = new Map();

/* A eventhandler function for adding new list of todos in <ui> element */
const add = (e) => {
  /* prevent the default function for 'submit' event */
  e.preventDefault();
  /* make <li> element to add */
  const li = mkList();
  /* after making <li>, remove input[type=text] element. */
  tg.tail.remove();
  tg.animateReverse();

  /* === { apply eventlistener } === */
  li.addEventListener("change", checkit);
  li.addEventListener("mouseenter", (e) => {
    const btn = (e.target as HTMLInputElement).lastChild as HTMLInputElement;
    btn.style.visibility = "visible";
  });
  li.addEventListener("mouseleave", (e) => {
    const btn = (e.target as HTMLInputElement).lastChild as HTMLInputElement;
    btn.style.visibility = "hidden";
  })
}

const mkList = () => {
  /*========== { append li element to ui element } ==========*/
  const input = document.getElementById("add") as HTMLInputElement;
  const val = input.value;
  const li = document.createElement("li");
  li.className = "_todolist";
  todoList.appendChild(li);
  // remove inner value of <input> element. 
  input.value = "";

  /*========== { append child to li element } ==========*/
  // make inner checkbox form
  li.appendChild(mkInner(li, val));
  // make inner button
  li.appendChild(mkBtn(li));
  return li;
}

const mkInner = (li, val) => {
  const frag = document.createDocumentFragment();
  const _inner = document.createElement("input");
  const _label = document.createElement("label");
  /*======== { create check box & label } =========*/
  _inner.type = "checkbox";
  _inner.id = todoList.childElementCount.toString();
  _label.setAttribute("for", _inner.id);
  _label.innerText = val;
  frag.appendChild(_inner);
  frag.appendChild(_label);
  /*======== { set index-map } =========*/
  indexMap.set(li,_inner.id);
  _remainer.innerText = (indexMap.size - checked.size).toString();
  return frag;
}

const mkBtn = (li) => {
  const _anchor = document.createElement("a");
  const obj = document.createElement("object");
  /*======={ setting attributes of image button }=======*/
  obj.type = "image/svg+xml";
  obj.data = "../images/trash-solid.svg";
  obj.innerText = "이 브라우저는 svg를 지원하지 않습니다.";
  obj.id = `obj${li.firstChild.id}`;
  _anchor.href = "";
  _anchor.className = "rm";
  /*=========={ apply eventlistener }==========*/
  _anchor.addEventListener("click", remove);
  _anchor.addEventListener("mouseenter", (e) => {
    const obj = (e.target as HTMLInputElement).firstChild;
    const svgDocument = (obj as HTMLObjectElement).contentDocument;
    const svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "#FA5858");
    svg[0].setAttribute("style", "opacity:1");
  })
  _anchor.addEventListener("mouseleave", (e) => {
    const obj = (e.target as HTMLInputElement).firstChild;
    const svgDocument = (obj as HTMLObjectElement).contentDocument;
    const svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "currentColor");
    svg[0].setAttribute("style", "opacity:0.3");
  })
  _anchor.appendChild(obj);
  return _anchor;
}

export { _remainer, todoList, indexMap, add };