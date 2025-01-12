let cells = document.querySelectorAll('#field td');
start(cells);

function start(cells) {
    let i = 0;
    for (const cell of cells) {
        cell.addEventListener('click', function step(e) {
            this.textContent = ['x', 'o'][i % 2]
            i++

            if (isVictory(cells)) {
                alert(`Победил ${['x', 'o'][(i - 1) % 2]}`);
            } else if (i === 9) {
                alert('Ничья')
            }

            this.removeEventListener('click', step);
        })

    }
}

function isVictory (cells){
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

    for (let comb of combs) {
        if (
            cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent != ''
        ) {
            return true;
        }
    }

    return false;
}

start(cells);