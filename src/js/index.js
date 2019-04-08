import '../styles/index.scss';
import { clicker, display } from './elements';

let id;
function square(params) {
    return params * params;
}

const runSquares = () =>{
    let clickTimes = 0;
    if(id) clearInterval(id)
    id = setInterval(() => {
        clickTimes += 1
        display.innerHTML = `${clickTimes} * ${clickTimes} = ${square(clickTimes)}`
        if(clickTimes > 50) clearInterval(id)
    }, 500);
}

clicker.addEventListener('click',runSquares)