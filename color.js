let table = document.getElementById('field');
let rows = 3;
let cols = 3;
let colors = ['red', 'green', 'blue'];
let click = 0;
let p = document.getElementById('p');

for (let i = 0; i < rows; i++) {
	let tr = document.createElement('tr');
	for (let j = 0; j < cols; j++) {
		let td = document.createElement('td');
		tr.appendChild(td);
		td.className = randomColor();
		td.addEventListener('click', function () {
			changeColor(this);
			click++;
			p.textContent = 'Количество кликов: ' + click;
		})

	}
	table.appendChild(tr);
}
function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


function changeColor(td) {
	let currentColor = td.className;
	let nextColor = getNextColor(currentColor);
	td.className = nextColor;
	checkWin();

}

function getNextColor(currentColor) {
	let currentIndex = colors.indexOf(currentColor);
	return colors[(currentIndex + 1) % colors.length];
}

function checkWin() {
	let cells = document.querySelectorAll('td');
	let firsClassName = cells[0].className;
	if (Array.from(cells).every(cell => cell.className === firsClassName)) {
		alert('Поздравляем! Вы победили!');
	}
}

