import '../css/index.css'
import { clicker, display } from './elements';

let clickTimes = 0;

clicker.addEventListener('click',()=>{
    clickTimes = clickTimes > 50 ?  0 : clickTimes += 1
    display.innerHTML = `${clickTimes} * ${clickTimes} = ${square(clickTimes)}`
    clicker.innerHTML = `${clickTimes + 1}${"2".sup()}`
})

function square(params) {
    return params * params;
}