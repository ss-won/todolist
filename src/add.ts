const input = (<HTMLInputElement>document.getElementById("add"));
export const _remainer = (<HTMLInputElement>document.getElementById("rm_num"));
export const todoList = document.getElementById("todolist");
export const submit = document.getElementById("submit");
/* Input 창에 할일 적어서 Enter -> 리스트에 추가시키기 */
export const add = (e) => {
    e.returnValue = false;
    let val = input.value;
    const li = document.createElement("li");
    const _inner = document.createElement("input");
    const _label = document.createElement("label");
    todoList.appendChild(li);
    input.value = '';
    li.className = "_todolist"

    _inner.type = "checkbox";
    _inner.id = todoList.children.length.toString();
    _label.setAttribute("for", _inner.id);
    _label.innerText = val;
    li.appendChild(_inner);
    li.appendChild(_label);
    _remainer.innerText = todoList.children.length.toString();
    console.log(li);
}