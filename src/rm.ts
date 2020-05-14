import {todoList, indexMap, _remainer} from './add.js';
import {checked} from './check.js';

export const remove = (e)=>{
    e.preventDefault();
    let click_li = e.target.parentElement.parentElement;
    let click_i = click_li.firstChild.id;
    update(click_i, todoList.childElementCount);
    indexMap.delete(click_li);
    todoList.removeChild(click_li);
    _remainer.innerText = (indexMap.size-checked.size).toString();
    console.log(checked.entries());
    console.log(indexMap.entries());
   // console.log(todoList.childElementCount);
    //console.log(typeof click_i, todoList.childElementCount);
}
const update = (idx:string,l:number) => {
    //let li = todoList.children;
    let nidx = parseInt(idx);
    if(checked.has(nidx)){
        checked.delete(nidx);
        let ckarr = [...checked];
        ckarr.forEach((v:number)=>{
            if(v>nidx){
                checked.delete(v);
                checked.add(v-1);
            }
        });
    }
    for(let i=nidx-1;i<l;i++){
        let li = todoList.children;
        if(indexMap.get(li[i])>idx){
            const present = document.getElementById(indexMap.get(li[i]));
            indexMap.set(li[i],indexMap.get(li[i])-1+'');
            present.id = indexMap.get(li[i]);
        }
    }
}