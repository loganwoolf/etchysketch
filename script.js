const gridSlider = document.querySelector('#grid-size');
const canvas = document.querySelector('.main-canvas');


function drawCells() {
	canvas.innerHTML = "";
	if (!this.value) {
		this.value = 32;
	}
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
window.addEventListener('resize', drawCells);