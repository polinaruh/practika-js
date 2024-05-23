// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// field.addEventListener('keydown', function(event){
//     if (event.key == 'Enter'){
//         if (cities.length > 0) {
//             let lastCity = cities[cities.length - 1];
//             if (field.value[0].toLowerCase() !== lastCity[lastCity.length - 1].toLowerCase()) {
//                 message.textContent = 'город должен начинаться на последнюю букву предыдущего '  + lastCity;
//                 return;
//             }
//             if (cities.includes(field.value.toLowerCase())) {
//                 message.innerHTML = 'этот город уже был' + '<br>' + 'предыдущий город: ' + lastCity;
//                 return;
//             }
//         }
//         cities.push(field.value.toLowerCase());//
//         message.textContent = 'предыдущий город: ' + field.value;
//         field.value = '';
//     }
// })