import { _remainer, todoList } from './add.js';

/* checked된 요소를 넣을 집합 선언(중복을 허용하지 않는 자료구조) */
const checked = new Set();

/* 
    check 이벤트가 발생할때마다, checked 된 여부를 확인해서
    checked 내부에 값이 있으면 -> 해당 값 삭제
    checked 내부에 값이 없으면 -> 해당 값 삽입
*/
const checkit = (e) => {
    let id = parseInt(e.target.id);
    /* tolist <ui> 요소 내부에 있는 자식노드의 수 */
    let val = todoList.childElementCount;
    
    if(checked.has(id)){
        console.log("already have id");
        checked.delete(id);
    }
    else{
        console.log("have not id");
        checked.add(id);
    }
    /* 남은 할일을 출력하는 _remainer 내부 값 업데이트 */
    val -= checked.size;
    _remainer.innerText = val.toString();
}

export { checked, checkit };