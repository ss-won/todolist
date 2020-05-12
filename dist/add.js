var todoList = document.getElementById("todolist");
var input = document.getElementById("add");
var li = document.createElement("li");
var _inner = document.createElement("input");
var _label = document.createElement("label");
var _remainer = document.getElementById("rm_num");
export var submit = document.getElementById("submit");
export var add = function (e) {
    e.returnValue = false;
    var val = input.value;
    todoList.appendChild(li);
    input.value = '';
    li.className = "_todolist";
    _inner.type = "checkbox";
    _inner.id = todoList.children.length.toString();
    _label.setAttribute("for", _inner.id);
    _label.innerText = val;
    li.appendChild(_inner);
    li.appendChild(_label);
    _remainer.innerText = todoList.children.length.toString();
    console.log(li);
};
//# sourceMappingURL=add.js.map