export function check() {
	let html = '';
	let bpawn = document.getElementsByClassName("black pawn").length;
	let brook = document.getElementsByClassName("black rook").length;
	let bknight = document.getElementsByClassName("black knight").length;
	let bbishop = document.getElementsByClassName("black bishop").length;
	let bqueen = document.getElementsByClassName("black queen").length;
	let bking = document.getElementsByClassName("black king").length;
	let wpawn = document.getElementsByClassName("white pawn").length;
	let wrook = document.getElementsByClassName("white rook").length;
	let wknight = document.getElementsByClassName("white knight").length;
	let wbishop = document.getElementsByClassName("white bishop").length;
	let wqueen = document.getElementsByClassName("white queen").length;
	let wking = document.getElementsByClassName("white king").length;
	if (bpawn < 8) {
		html = '';
		for (let i = 0; i < (8 - bpawn); i++) 
			html += '<img src="img/black-pawn.png" alt="White Pawn" />'
		document.getElementById("bpawn").innerHTML = html;
	}
	if (brook < 2) {
		html = '';
		for (let i = 0; i < (2 - brook); i++)	html += "&#" + br + ";"
		document.getElementById("brook").innerHTML = html;
	}
	if (bknight < 2) {
		html = "";
		for (let i = 0; i < (2 - bknight); i++) {
			html += "&#" + bh + ";"
		}
		document.getElementById("bknight").innerHTML = html;
	}
	if (bbishop < 2) {
		html = "";
		for (let i = 0; i < (2 - bbishop); i++) {
			html += "&#" + bb + ";"
		}
		document.getElementById("bbishop").innerHTML = html;
	}
	if (bqueen < 1) {
		html = "";
		for (let i = 0; i < (1 - bqueen); i++) {
			html += "&#" + bq + ";"
		}
		document.getElementById("bqueen").innerHTML = html;
	}
	if (wpawn < 8) {
		html = "";
		for (let i = 0; i < (8 - wpawn); i++) {
			html += '<img src="img/white-pawn.png" alt="White Pawn" />'
		}
		document.getElementById("wpawn").innerHTML = html;
	}
	if (wrook < 2) {
		html = "";
		for (let i = 0; i < (2 - wrook); i++) {
			html += "&#" + wr + ";"
		}
		document.getElementById("wrook").innerHTML = html;
	}
	if (wknight < 2) {
		html = '';
		for (let i = 0; i < (2 - wknight); i++) html += "&#" + wh + ";"
		document.getElementById("wknight").innerHTML = html;
	}
	if (wbishop < 2) {
		html = '';
		for (let i = 0; i < (2 - wbishop); i++) html += "&#" + wb + ";"
		document.getElementById("wbishop").innerHTML = html;
	}
	if (wqueen < 1) {
		html = '';
		for (let i = 0; i < (1 - wqueen); i++) html += "&#" + wq + ";"
		document.getElementById("wqueen").innerHTML = html;
	}
	if (bking < 1) {
		document.getElementById("winner").style.display = "flex";
    document.getElementById("winner").style.flexDirection = "column";
		document.getElementById("winner").innerHTML = `
    <p>White has won the game</p> 
    <button type="button" onClick="window.location.reload()">Play Again</button>`;
	}
	if (wking < 1) {
    document.getElementById("winner").style.display = "flex";
		document.getElementById("winner").style.flexDirection = "column";
    document.getElementById("winner").innerHTML = `
    <p>Black has won the game</p> 
    <button type="button" onClick="window.location.reload()">Play Again</button>`;
	}
}