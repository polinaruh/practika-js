let arr = [];
let count = 0;
let div = document.querySelector('#div');
let table = document.querySelector('#table');
for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    let td = document.createElement('td');
        td.classList.add('table');
    tr.appendChild(td);
        td.addEventListener('click', function(){
            if(arr.includes(`${i}-${j}`)){
                td.style.backgroundColor = 'green';
                count++;
                if (count === 10) {
                   alert('Вы нашли все ячейки');
                }
            } else {
                td.style.backgroundColor = 'red';
            }
        })
  }
  table.appendChild(tr);
}
for (let i = 0; i < 10; i++) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    arr.push(`${row}-${col}`);
}