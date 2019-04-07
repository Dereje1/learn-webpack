let clickTimes = 0;


clicker.addEventListener('click',()=>{
    clickTimes = clickTimes > 50 ?  0 : clickTimes += 1
    display.innerHTML = `${clickTimes} * ${clickTimes} = ${square(clickTimes)}`
    clicker.innerHTML = `square ${clickTimes + 1}`
})

function square(params) {
    return params * params;
}