import { _remainer, todoList } from './add.js';
let checked = new Set();
export const checkit = (e) => {
    let id = e.target.id;
    let val = todoList.children.length;
    if (checked.has(id)) {
        console.log("already have id");
        checked.delete(id);
    }
    else {
        console.log("have not id");
        checked.add(id);
    }
    val -= checked.size;
    _remainer.innerText = val.toString();
    console.log(checked, val);
};
//# sourceMappingURL=check.js.map