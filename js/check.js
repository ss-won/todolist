import { _remainer } from './add.js';
let checked = [];
export const checkit = (e) => {
    let id = e.target.id;
    let val = parseInt(_remainer.value);
    if (checked.some(v => v == id)) {
        console.log("already have id");
        val++;
        _remainer.value = val.toString();
    }
    else {
        console.log("have not id");
        checked.push(id);
        val--;
        _remainer.value = val.toString();
    }
    console.log(checked, id);
};
//# sourceMappingURL=check.js.map