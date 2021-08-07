const gridSlider = document.querySelector('#grid-size');
const canvas = document.querySelector('.main-canvas');


function drawCells() {
	canvas.innerHTML = "";
	const cellSize = (Math.trunc(canvas.offsetWidth)-1) / this.value;
	for (let i = 0; i < this.value ** 2; i++) {
		const cell = document.createElement('div');
		cell.style.width = `${cellSize}px`;
		cell.style.height = `${cellSize}px`;
		cell.classList.add('cell');
		canvas.appendChild(cell);
	}
}

gridSlider.addEventListener('mouseup', drawCells);
canvas.addEventListener('mouseover', function(e) {
	if (e.target.classList.contains('cell')) {
		e.target.style.backgroundColor = 'black';
	}
})