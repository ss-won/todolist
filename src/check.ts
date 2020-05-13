import { _remainer, todoList, indexMap } from './add.js';
export let checked = new Set();
export const checkit = (e) => {
    console.log(e.target);
    let id = parseInt(e.target.id);
    let val = todoList.childElementCount;
    
    if(checked.has(id)){
        console.log("already have id");
        checked.delete(id);
    }
    else{
        console.log("have not id");
        checked.add(id);
    }
    val -= checked.size;
    _remainer.innerText = val.toString();
    console.log(checked, val);
}