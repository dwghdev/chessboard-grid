export function pieces() {
	// Black 
	blackPiece('pawn', 9, 17, 1); 
	blackPiece('rook', 1, 9, 7); 
	blackPiece('knight', 2, 8, 5);
	blackPiece('bishop', 3, 7, 3);
	blackPiece('queen', 5, 6, 1);
	blackPiece('king', 4, 5, 1);
	// White
	whitePiece('pawn', 56, 48, 1);
	whitePiece('rook', 64, 56, 7);
	whitePiece('knight', 63, 56, 5);
	whitePiece('bishop', 62, 56, 3);
	whitePiece('queen', 61, 60, 1);
	whitePiece('king',60, 59, 1);
}

function blackPiece(piece, i, length, iterate) {
  for (i; i < length; i+=iterate) {
    document.getElementById('b'+i)
      .innerHTML =  `<img src="img/black-${piece}.png" alt="black ${piece}" />`;
    document.getElementById('b'+i)
      .className = `box black ${piece} nturn`;
  }
}

function whitePiece(piece, i, length, iterate) {
  for (i; i > length; i-=iterate) {
    document.getElementById('b'+i)
      .innerHTML = `<img src="img/white-${piece}.png" alt="white ${piece}" />`;
    document.getElementById('b'+i)
      .className = `box white ${piece} turn`;
  }
}