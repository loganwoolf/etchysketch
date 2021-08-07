const gridSlider = document.querySelector('#grid-size');
const canvas = document.querySelector('.main-canvas');

function drawCells() {
	canvas.innerHTML = "";
	if (!this.value) {
		this.value = 32;
	}
	const cellSize = (canvas.offsetWidth - 0.1) / this.value;
	for (let i = 0; i < this.value ** 2; i++) {
		const cell = document.createElement('div');
		cell.style.width = `${cellSize}px`;
		cell.style.height = `${cellSize}px`;
		cell.classList.add('cell');
		canvas.appendChild(cell);
	}
}


function randomColor() {
	const hue = Math.floor(Math.random() * 360);
	return `hsl(${hue}, 50%, 50%)`;
}

gridSlider.addEventListener('mouseup', drawCells);
canvas.addEventListener('mouseover', function(e) {
	if (e.target.classList.contains('cell')) {
		e.target.style.backgroundColor = randomColor();
	}});
window.addEventListener('resize', drawCells);