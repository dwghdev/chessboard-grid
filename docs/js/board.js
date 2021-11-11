import {piece} from './move.js'

export function board() {
	let html = '';
	let boardId = document.getElementById('board');
	let boxArray = [];
	for (let i = 0; i < 8; i++) { 
		for (let j = 1; j < 9; j++) {
      let num = (i<<3) + j; 
			html += '<div class="box pcolor none nturn" id="b'+num+'"></div>';
			boxArray.push(num);
    }
	}
	boardId.innerHTML = html;

	boxArray.forEach(i => 
		document.getElementById('b'+i)
			.addEventListener('click', () => piece(i)));

	// for (let i = 0; i < 8; i++) 
	// 	for (let j = 1; j < 9; j++) 
	// 		document.getElementById(`b${((i << 3) + j)}`)
	// 			.addEventListener('click', () => piece(((i << 3) + j)));
}