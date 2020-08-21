import {todoList, indexMap, _remainer} from './add.js';
import {checked} from './check.js';

/* A eventhandler function for trash button click. */
export const remove:EventListener = (e) => {
    e.preventDefault();
    const click_li = (e.target as HTMLInputElement).parentElement;
    const click_i = (click_li.firstChild as HTMLInputElement).id;
    indexMap.delete(click_li);
    todoList.removeChild(click_li);
    update(click_i, todoList.childElementCount);
    _remainer.innerText = (indexMap.size-checked.size).toString();
    return undefined;
}

/* after removal, update checked Set and list in todolist */
const update = (idx:string,l:number) => {
    const nidx = parseInt(idx);
    const over = [];

    /* --- update checked Set --- */
    //if the removed node was checked in the check box, 
    //it's deleted from the Set.
    if(checked.has(nidx)){
        checked.delete(nidx);
    }

    for(const val of checked.values()){
        if(val > nidx){
            checked.delete(val);
            over.push(val-1); 
        }
    }

    while(over.length > 0){
        checked.add(over.pop());
    }
    /* -------------------------- */

    /* ----------------------- update list in <ui> element -------------------- */
    for(let i=nidx-1;i<l;i++){
        const li = todoList.children;
        if(indexMap.get(li[i])>idx){
            indexMap.set(li[i],indexMap.get(li[i])-1+'');
            /* li[i].children[0] : <input> node, li[i].children[1] : <label> node */
            li[i].children[0].id = indexMap.get(li[i]);
            li[i].children[1].setAttribute("for", indexMap.get(li[i]));
        }
    }
    /*--------------------------------------------------------------------------*/
}