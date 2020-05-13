import { remove } from "./rm.js";
import { checkit, checked } from "./check.js";
const input = (<HTMLInputElement>document.getElementById("add"));
export const _remainer = (<HTMLInputElement>document.getElementById("rm_num"));
export const todoList = document.getElementById("todolist");
export const submit = document.getElementById("submit");
export const indexMap = new Map();
/* Input 창에 할일 적어서 Enter -> 리스트에 추가시키기 */
export const add = (e) => {
                            //change의 기본 동작 정지
                            e.returnValue = false;
                            /*==========li&li요소에 담길 element 생성==========*/
                            let val = input.value;
                            const li = document.createElement("li");
                            const _inner = document.createElement("input");
                            const _label = document.createElement("label");
                            const _anchor = document.createElement("a");
                            const _imgbtn = document.createElement("img");
                            todoList.appendChild(li);
                            input.value = "";
                            li.className = "_todolist";
                            /*========check box & label=========*/
                            _inner.type = "checkbox";
                            _inner.id = todoList.children.length.toString();
                            _label.setAttribute("for", _inner.id);
                            _label.innerText = val;
                            li.appendChild(_inner);
                            li.appendChild(_label);
                            li.addEventListener("change",checkit);
                            indexMap.set(li,_inner.id);
                            _remainer.innerText = (indexMap.size-checked.size).toString();
                            /*==========image button==========*/
                            _imgbtn.src = "../images/trash.png";
                            _imgbtn.height = 25;
                            _imgbtn.width = 25;
                            _anchor.appendChild(_imgbtn);
                            _anchor.href = "#";
                            li.appendChild(_anchor);
                            li.lastChild.addEventListener("click", remove);
                            console.log(li);
                            console.log(indexMap.entries());
                          }