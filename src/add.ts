import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
import { tg } from './toggle.js';

/*
  _remainer : HTMLElement // 남은할 일 표시하는 <div> 요소
  todolist : HTMLElement // todolist가 들어갈 <ui> 요소
  indexMap : Object // 각 li 요소를 id 값으로 매핑할 map 자료구조
*/
const _remainer = document.getElementById("rm_num") as HTMLInputElement;
const todoList = document.getElementById("todolist");
const indexMap = new Map();

/* Input 창에 할일 적어서 Enter -> 리스트에 추가시키기 */
const add = (e) => {
  /* change event의 기본 동작 정지 */
  e.preventDefault();
  /* 추가할 list DOM 만들기 */
  const li = mkList();
  /* list를 만든 후, toggle 객체에 있는 '입력창'요소 collapse */
  tg.tail.remove();
  tg.animateReverse();

  /* === { apply eventlistener } === */
  li.addEventListener("change", checkit);
  li.addEventListener("mouseenter", (e) => {
    /* <li> 요소 내부 버튼 객체 변수에 담기 */
    let btn = (e.target as HTMLInputElement).lastChild as HTMLInputElement;
    btn.style.visibility = "visible";
  });
  li.addEventListener("mouseleave", (e) => {
    /* <li> 요소 내부 버튼 객체 변수에 담기 */
    let btn = (e.target as HTMLInputElement).lastChild as HTMLInputElement;
    (<HTMLInputElement>btn).style.visibility = "hidden";
  })
}

const mkList = () => {
  /*========== { li element 생성 후 ui 요소에 넣기 } ==========*/
  let input = (<HTMLInputElement>document.getElementById("add"));
  let val = input.value;
  const li = document.createElement("li");
  li.className = "_todolist";
  todoList.appendChild(li);
  // <input> 요소 내용 삭제 
  input.value = "";

  /*========== { li요소에 담길 element 생성 } ==========*/
  // 내부 checkbox form 만들기
  li.appendChild(mkInner(li, val));
  // 내부 btn 만들기
  li.appendChild(mkBtn(li));
  return li;
}

const mkInner = (li, val) => {
  const frag = document.createDocumentFragment();
  const _inner = document.createElement("input");
  const _label = document.createElement("label");
  /*======== { create check box & label } =========*/
  _inner.type = "checkbox";
  _inner.id = todoList.children.length.toString();
  _label.setAttribute("for", _inner.id);
  _label.innerText = val;
  frag.appendChild(_inner);
  frag.appendChild(_label);
  /*======== { set index-map } =========*/
  indexMap.set(li, _inner.id);
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
    let obj = (<HTMLInputElement>e.target).firstChild;
    let svgDocument = (<HTMLObjectElement>obj).contentDocument;
    let svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "#FA5858");
    svg[0].setAttribute("style", "opacity:1");
    console.log(obj);
  })
  _anchor.addEventListener("mouseleave", (e) => {
    let obj = (<HTMLInputElement>e.target).firstChild;
    let svgDocument = (<HTMLObjectElement>obj).contentDocument;
    let svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "currentColor");
    svg[0].setAttribute("style", "opacity:0.3");
  })
  _anchor.appendChild(obj);
  return _anchor;
}

export { _remainer, todoList, indexMap, add };