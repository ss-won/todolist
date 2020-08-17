import { add } from './add.js';

/* main <div> 요소 가져오기 */
const mainbox = document.getElementById("main");

/* main-box의 마지막 자식노드로 추가할 <div> 요소 생성 */
const tail = document.createElement("div");
tail.className = "external-box";
tail.id = "tail";

/* tail에 들어갈 <form>요소와 내부 <input> 요소 생성 */
const form = document.createElement("form");
const msg = `<input type="text" id="add" name="add" placeholder="할일을 입력 후, Enter를 누르세요" required>`;
form.id = "submit";
form.innerHTML = msg;

/* svg를 담은 <object> 요소 가져오기 */
const btn = document.getElementById("toggle") as HTMLAnchorElement;
const obj = btn.children[0] as HTMLObjectElement;
const svgDocument = obj.contentDocument;
const svg = svgDocument.getElementsByClassName("plusbtn");

/* 속성을 변경하는 함수 */
const animate = () => {
    svg[0].setAttribute("fill", "red");
    obj.setAttribute("style", "transform: rotate(45deg)");
}

/* 원래 속성값으로 변경하는 함수 */
const animateReverse = () => {
    svg[0].setAttribute("fill", "#04B486");
    obj.setAttribute("style", "transform: rotate(0deg)");
}

/* toggle 버튼 클릭이벤트가 발생했을때 발생시킬 함수 */
const toggle = (e) => {
    /* click event의 기본 동작 정지 */
    e.preventDefault();
    const submit = document.getElementById("submit");
    if (!submit) {
        /* form요소에 sumbit event 달기 */
        form.addEventListener("submit", add);
        /* 새로운 요소들을 mainbox에 추가 */
        tail.appendChild(form);
        mainbox.appendChild(tail);
        document.getElementById("add").focus();
        /* 속성변경 */
        animate();
    }
    else {
        /* mainbox에 추가했던 요소 삭제 */
        tail.remove();
        /* 속성 복원 */
        animateReverse();
    };
}

export const tg = { btn, tail, toggle, animateReverse };
