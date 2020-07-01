import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
import { tg } from './toggle.js';
export const _remainer = (<HTMLInputElement>document.getElementById("rm_num"));
export const todoList = document.getElementById("todolist");
export const indexMap = new Map();
/* Input 창에 할일 적어서 Enter -> 리스트에 추가시키기 */
export const add = (e) => {
  //change의 기본 동작 정지
  e.preventDefault();
  //추가할 list dom 만들기
  const li = mkList();
  //입력창닫기
  tg.tail.remove();

  /*========apply eventlistener=========*/
  li.addEventListener("change", checkit);
  li.addEventListener("mouseenter",(e)=>{
    let btn = (<HTMLInputElement>e.target).lastChild;
    (<HTMLInputElement>btn).style.visibility = "visible";
  });
  li.addEventListener("mouseleave",(e)=>{
    let btn = (<HTMLInputElement>e.target).lastChild;
    (<HTMLInputElement>btn).style.visibility = "hidden";
  })

  console.log(li);
  console.log(indexMap.entries());
}

const mkList = () => {
  /*==========li&li요소에 담길 element 생성==========*/
  let input = (<HTMLInputElement>document.getElementById("add"));
  let val = input.value;
  const li = document.createElement("li");
  todoList.appendChild(li);
  input.value = "";
  li.className = "_todolist";
  li.appendChild(mkInner(li, val));
  li.appendChild(mkBtn(li));
  return li;
}

const mkInner = (li,val) => {
  const frag = document.createDocumentFragment();
  const _inner = document.createElement("input");
  const _label = document.createElement("label");
  /*========create check box & label=========*/
  _inner.type = "checkbox";
  _inner.id = todoList.children.length.toString();
  _label.setAttribute("for", _inner.id);
  _label.innerText = val;
  frag.appendChild(_inner);
  frag.appendChild(_label);
  /*========set index-map=========*/
  indexMap.set(li, _inner.id);
  _remainer.innerText = (indexMap.size - checked.size).toString();
  return frag;
}

const mkBtn = (li) => {
  const _anchor = document.createElement("a");
  const obj = document.createElement("object");
  /*==========create image button==========*/
  obj.type = "image/svg+xml";
  obj.data = "../images/trash-solid.svg";
  obj.innerText = "이 브라우저는 svg를 지원하지 않습니다.";
  obj.id = `obj${li.firstChild.id}`;
  _anchor.href = "";
  _anchor.className = "rm";
  /*==========apply eventlistener==========*/
  _anchor.addEventListener("click", remove);
  _anchor.addEventListener("mouseenter",(e)=>{
    let obj = (<HTMLInputElement>e.target).firstChild;
    let svgDocument = (<HTMLObjectElement>obj).contentDocument;
    let svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "#FA5858");
    svg[0].setAttribute("style", "opacity:1");
    //console.log(svg[0]);
  })
  _anchor.addEventListener("mouseleave",(e)=>{
    let obj = (<HTMLInputElement>e.target).firstChild;
    let svgDocument = (<HTMLObjectElement>obj).contentDocument;
    let svg = svgDocument.getElementsByClassName("trash");
    svg[0].setAttribute("fill", "currentColor");
    svg[0].setAttribute("style", "opacity:0.3");
    //console.log(svg[0]);
  })
  _anchor.appendChild(obj);
  return _anchor;
}