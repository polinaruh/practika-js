let h = document.querySelector('#date');
let now = new Date();
let ul = document.querySelector('#ul');
let days = now.getDate();
let month = new Date().getMonth() + 1;
let year = now.getFullYear();
let months = ["Январь", "Февраль", "Март", "Апрель", 'Май', "Июнь", "Июль", "Август", 'Сентябрь', "Октябрь", "Ноябрь", "Декабрь"]
h.textContent = months[month - 1] + ' ' + year;
for(let i = 1; i <= new Date(year, month, 0).getDate(); i++){
    let li = document.createElement('li');
    li.textContent = i;
    if (i == days) {
        li.classList.add('day');
    }
    ul.appendChild(li);
}

let v = document.querySelector('#vpered');
let n = document.querySelector('#nazad');
v.addEventListener('click', function(event) {
  event.preventDefault(); 
    month += 1;
    if (month === 13) {
        year += 1;
        month = 1;
    }
    h.textContent = months[month - 1] + ' ' + year;
    spisok();
});

n.addEventListener('click', function(event) {
  event.preventDefault(); 
    month -= 1;
    if (month === 0) {
        year -= 1;
        month = 12;
    }
    h.textContent = months[month - 1] + ' ' + year;
    spisok();
});

function spisok(){
    let lis = document.querySelectorAll('li');
    for (let li of lis) {
        li.remove();
    }
    for(let i = 1; i <= new Date(year, month, 0).getDate(); i++){
        let li = document.createElement('li');
        li.textContent = i;
        if (i == days) {
            li.classList.add('day');
        }
        ul.appendChild(li);
    } 
}