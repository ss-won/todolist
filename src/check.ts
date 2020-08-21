import { _remainer, todoList } from './add.js';

/* Set the object to add the list id with the check box checked. */
const checked:Set<number> = new Set();

/* 
    when event occur, check the checkbox's state.
    if data is already in Set -> remove inner data.
    if data is not in Set -> add data to Set.
*/
const checkit = (e) => {
    const id:number = parseInt(e.target.id);
    /* val : A number of child nodes in <ui> element. */
    let val = todoList.childElementCount;
    
    if(checked.has(id)){
        checked.delete(id);
        console.log(checked);
    }
    else{
        checked.add(id);
        console.log(checked);
    }
    /* update inner value of "_remainer" element 
    that represent the number of remaining todos. */
    val -= checked.size;
    _remainer.innerText = val.toString();
}

export { checked, checkit };