import { add } from './add.js';

/* gets main <div> element */
const mainbox = document.getElementById("main");

/* create <div> element to append to the #main. */
const tail = document.createElement("div");
tail.className = "external-box";
tail.id = "tail";

/* create <form> and inner <input> elements to append to the #tail.*/
const form = document.createElement("form");
const msg = `<input type="text" id="add" name="add" placeholder="할일을 입력 후, Enter를 누르세요" required>`;
form.id = "submit";
form.innerHTML = msg;

/* gets <object> element that contains the <svg> element. */
const btn = document.getElementById("toggle") as HTMLAnchorElement;
const obj = btn.children[0] as HTMLObjectElement;
const svgDocument = obj.contentDocument;
const svg = svgDocument.getElementsByClassName("plusbtn");

/* A function to convert svg attributes. */
const animate = () => {
    svg[0].setAttribute("fill", "red");
    obj.setAttribute("style", "transform: rotate(45deg)");
}

/* A function to convert svg to origininal attributes. */
const animateReverse = () => {
    svg[0].setAttribute("fill", "#04B486");
    obj.setAttribute("style", "transform: rotate(0deg)");
}

/* A eventhandler function to manipulate elements when a plus button is clicked. */
const toggle = (e) => {
    /* prevent default function of click event function. */
    e.preventDefault();
    const submit = document.getElementById("submit");
    if (!submit) {
        /* add eventhandler function for 'submit' event to form element. */
        form.addEventListener("submit", add);
        /* append new elements to #main's children. */
        tail.appendChild(form);
        mainbox.appendChild(tail);
        document.getElementById("add").focus();
        /* call animate funtion */
        animate();
    }
    else {
           /* Remove the previously added element in #main element. */
           tail.remove();
           /* call animateReverse function */
           animateReverse();
         }
}

export const tg = { btn, tail, toggle, animateReverse };
