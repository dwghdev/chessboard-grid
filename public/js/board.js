import {piece} from './move.js'

export function board() {
  let html = '';
  let boardId = document.getElementById('board');
	for (let i = 0; i < 8; i++) { 
		html += '<div class="row">';
		for (let j = 1; j < 9; j++) {
      let boxNum = (i << 3) + j; 
			html += '<div class="box pcolor none nturn" id="b'+boxNum+'"></div>';
    }
		html += '</div>';
	}
	boardId.innerHTML = html;

	for (let i = 0; i < 8; i++) 
		for (let j = 1; j < 9; j++) 
			document.getElementById(`b${((i << 3) + j)}`)
				.addEventListener('click', () => piece(((i << 3) + j)));
}