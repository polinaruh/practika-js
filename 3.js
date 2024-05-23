let btn = document.querySelector('#btn');
let random = Math.floor(Math.random() * 100) + 1;

let elem1 = document.querySelector('#elem');

let p = document.querySelector('#p1');
btn.addEventListener('click', function(){
    let elem = +elem1.value;

    if (random > elem){
        p.textContent = 'введите число побольше';
    } else if (random < elem){
        p.textContent = 'введите число поменьше';
    } else {
        p.textContent = 'вы угадали';
    }
})
