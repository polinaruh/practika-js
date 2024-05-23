// //1
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// let per = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     let     num =  +elem.value;
//     pl.textContent += num ** 2;
//     per.textContent += 4 * num;
// })

//2
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// let per = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     pl.textContent += +elem1.value * +elem2.value;
//     per.textContent += (+elem1.value * +elem2.value) * 2;
// })

//3
// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#btn');
// let l = document.querySelector('#p1');
// let pl = document.querySelector('#p2');
// btn.addEventListener('click', function () {
//     l.textContent += +elem1.value * 2 * 3.14;
//     pl.textContent += 3.14 * (+elem1.value)  2;
// })

//4
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let btn = document.querySelector('#btn');
// let pl = document.querySelector('#p1');
// btn.addEventListener('click', function () {
//     let a = Number(elem1.value);
//     let b = Number(elem2.value);
//     let c = Number(elem3.value);
//     if (a + b > c && a + c > b && b + c > a) {
//         let p = (a+b+c)/2;
//         let square = Math.sqrt(p*((p-a)*(p-b)*(p-c)));
//         if (!isNaN(square)) {
//             pl.textContent += square;
//         } 
//     } else {
//         pl.textContent = "Треугольника с такими сторонами не существует";
//     }
// })