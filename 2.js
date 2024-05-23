//1
// let elem1 = document.querySelector('#el1');
// let elem2 = document.querySelector('#el2');
// let elem3 = document.querySelector('#el3');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('#p1');
// btn.addEventListener('click', function(){
//     let a = Number(elem1.value);
//     let b = Number(elem2.value);
//     let c = Number(elem3.value);
//     let d = b**2 - 4*a*c;
//     let x1 = (-b - Math.sqrt(d))/ 2*a;
//     let x2 = (-b + Math.sqrt(d))/ 2*a;
//     if(d>0){
//         p.textContent = 'x1 = ' + x1 + ' ' + 'x2 = ' + x2;
//     } else if (d==0){
//         x1 = x2;
//         p.textContent = 'x = ' + x1;
//     } else {
//         p.textContent = 'корней нет';
//     }
    
// })

//2 
// let a = document.querySelector('#el1');
// let b = document.querySelector('#el2');
// let c = document.querySelector('#el3');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let arr = [+a.value, +b.value, +c.value]; 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     arr.splice(index, 1);
//     if (max  2 == arr[0]  2 + arr[1] ** 2){
//         console.log('числа являются тройкой Пифагора');
//     } else {
//         console.log('числа не являются тройкой Пифагора');
//     }
// })

//3
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');

// let btn = document.querySelector('#btn');
// let ul = document.querySelector('#ul');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             let li = document.createElement('li');
//             li.textContent = i;
//             ul.appendChild(li);
//         }
//     }
// })

//5
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     let arr = [];

//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             arr.push(i);
//         }
//     } 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     let p = document.createElement('p');
//     p.textContent = 'Наибольший общий делитель: ' + arr[index];
//     div.appendChild(p);
// })

//6
// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(){
//     let elem1 = +el1.value;  
//     let elem2 = +el2.value;  
//     let min = Math.min(elem1, elem2); 
//     let arr = [];
//     for (let i = 1; i <= min; i++) {
//         if (elem1 % i === 0 && elem2 % i === 0) {
//             arr.push(i);
//         }
//     } 
//     let max = Math.max(...arr);
//     let index = arr.indexOf(max);
//     let lcm = (elem1 * elem2) / arr[index]; 
//     let p = document.createElement('p');
//     p.textContent = 'наименьшее число, которое делится и на одно, и на второе из введенных чисел: ' + lcm;
//     div.appendChild(p);
// })

