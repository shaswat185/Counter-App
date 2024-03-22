const value = document.querySelector('.value');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
// const changeValue = document.querySelector('.changeBy')
const reset = document.querySelector('.reset');

increase.addEventListener('click',()=>{
    const countValue = parseInt(value.innerText);
    // const changeValue = parseInt(changeBy.value);
    value.innerText = countValue + 1;
    // console.log(countValue + changeValue);

})

decrease.addEventListener('click',()=>{
    const countValue = parseInt(value.innerText);
    if(countValue > 0 ){
        value.innerText = countValue - 1;

    }
})

reset.addEventListener('click',()=>{
    value.innerText = 0;
})