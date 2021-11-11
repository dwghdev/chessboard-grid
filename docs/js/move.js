import {check} from './check.js'

let id = '', pcolor = '', pname = '', pturn = '', lpcolor = '', 
lpname = '', lpturn = '', p = '', arry = [], cls = '',
lastval = 0, turn = ["turn", "nturn"], turnval = 0, lastp = '';

export function piece(val) {
  id = document.getElementById('b' + val);
  let j = 0; //for cell styling

  //cheching empty cells
  if (id.innerHTML != "") {
    pcolor = id.classList[1];
    pname = id.classList[2];
    pturn = id.classList[3];
    p = id.innerHTML;
    //checking black piece
    if (pcolor === 'black' && turn[turnval] === pturn) {
      arry = [];
      //	black pawn move
      if (pname === 'pawn') {
        lastp = p;
        //for starting position
        if (val > 8 && val < 17) {
          //looping to get all three cells at once
          for (let i = 0; i < 2; i++) {
            j += 8;
            document.getElementById('b' + val).style.filter = 'brightness(1)';
            //checking next cell is empty
            if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
              document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
              arry.push(val + j);
            }
          } //end of for loop
        } else {
          j += 8
          document.getElementById('b' + val).style.filter = 'brightness(1)';
          //checking next cell
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
          }
        }
        //checking none last pawn
        if (val % 8 != 0 && document.getElementById('b' + (val + 9)).classList[1] === 'white') {
          document.getElementById('b' + (val + 9)).style.filter = 'sepia(1)';
          arry.push(val + 9);
        }
        //checking none fist pawn
        if ((val - 1) % 8 != 0 && document.getElementById('b' + (val + 7)).classList[1] === 'white') {
          document.getElementById('b' + (val + 7)).style.filter = 'sepia(1)';
          arry.push(val + 7);
        }
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
      } //end of pawn if
      //black rook move
      if (pname === 'rook' || pname === 'queen') {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        //bottom move
        j = 8;
        let bottommove = 0;
        let test = val;
        for (let i = 0; i < 8; i++) {
          test += 8
          if (test < 65) {
            bottommove += 1;
          }
        }
        for (let i = 0; i < bottommove; i++) {
          document.getElementById('b' + val).style.filter = 'brightness(1)';
          if (document.getElementById('b' + (val + j)).classList[1] === 'white') {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          //checking for empty cell
          if (document.getElementById('b' + (val + j)).classList[2] === 'none' && (val + j) < 65) {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j += 8;
          }
        } //end of bottom move
        //top move
        j = -8;
        let topmove = 0;
        test = val
        for (let i = 0; i < 8; i++) {
          test -= 8
          if (test > 0)  topmove += 1;
        }
        for (let i = 0; i < topmove; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === 'white') {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          //checking for empty cells
          if ((val + j) > 0 && document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j -= 8;
          }
        } //end of top move
        //right move
        j = 1;
        let moveright = (val % 8 === 0) ? 0 : 8 - (val % 8); // Checking not at right edge

        for (let i = 0; i < moveright; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === 'white') {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j += 1;
          }
        } //end of right move
        //left move
        j = -1;
        
        let moveleft = (val % 8 === 0) ? 7 : (val - 1) % 8; // checking not at left edge

        for (let i = 0; i < moveleft; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === 'white') {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j -= 1;
          }
        }
      } //end of rook
      //black knight
      if (pname === "knight") {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        let leftbottom = val + 8 + 7, rightbottom = val + 8 + 9;
        let bottomright = val + 10, bottomleft = val + 6;
        let righttop = val - 8 - 7, lefttop = val - 8 - 9;
        let topright = val - 6, topleft = val - 10;
        document.getElementById('b' + val).style.filter = 'brightness(1)';
        if (leftbottom < 65 && leftbottom % 8 != 0) {
          if (document.getElementById('b' + leftbottom).classList[2] === 'none') {
            document.getElementById('b' + leftbottom).style.filter = 'brightness(1)';
            arry.push(leftbottom);
          }
          if (document.getElementById('b' + leftbottom).classList[1] === 'white') {
            document.getElementById('b' + leftbottom).style.filter = 'sepia(1)';
            arry.push(leftbottom);
          }
        }
        if (rightbottom < 65 && val % 8 != 0) {
          if (document.getElementById('b' + rightbottom).classList[2] === 'none') {
            document.getElementById('b' + rightbottom).style.filter = 'brightness(1)';
            arry.push(rightbottom);
          }
          if (document.getElementById('b' + rightbottom).classList[1] === 'white') {
            document.getElementById('b' + rightbottom).style.filter = 'sepia(1)';
            arry.push(rightbottom);
          }
        }
        if (bottomleft < 65 && (val - 1) % 8 != 0 && (val - 2) % 8 != 0) {
          if (document.getElementById('b' + bottomleft).classList[2] === 'none') {
            document.getElementById('b' + bottomleft).style.filter = 'brightness(1)';
            arry.push(bottomleft);
          }
          if (document.getElementById('b' + bottomleft).classList[1] === 'white') {
            document.getElementById('b' + bottomleft).style.filter = 'sepia(1)';
            arry.push(bottomleft);
          }
        }
        if (bottomright < 65 && val % 8 != 0 && (val + 1) % 8 != 0) {
          if (document.getElementById('b' + bottomright).classList[2] === 'none') {
            document.getElementById('b' + bottomright).style.filter = 'brightness(1)';
            arry.push(bottomright);
          }
          if (document.getElementById('b' + bottomright).classList[1] === 'white') {
            document.getElementById('b' + bottomright).style.filter = 'sepia(1)';
            arry.push(bottomright);
          }
        }
        if (righttop > 0 && (righttop - 1) % 8 != 0) {
          if (document.getElementById('b' + righttop).classList[2] === 'none') {
            document.getElementById('b' + righttop).style.filter = 'brightness(1)';
            arry.push(righttop);
          }
          if (document.getElementById('b' + righttop).classList[1] === 'white') {
            document.getElementById('b' + righttop).style.filter = 'sepia(1)';
            arry.push(righttop);
          }
        }
        if (lefttop > 0 && lefttop % 8 != 0) {
          if (document.getElementById('b' + lefttop).classList[2] === 'none') {
            document.getElementById('b' + lefttop).style.filter = 'brightness(1)';
            arry.push(lefttop);
          }
          if (document.getElementById('b' + lefttop).classList[1] === 'white') {
            document.getElementById('b' + lefttop).style.filter = 'sepia(1)';
            arry.push(lefttop);
          }
        }
        if (topright > 0 && (val + 1) % 8 != 0 && val % 8 != 0) {
          if (document.getElementById('b' + topright).classList[2] === 'none') {
            document.getElementById('b' + topright).style.filter = 'brightness(1)';
            arry.push(topright);
          }
          if (document.getElementById('b' + topright).classList[1] === 'white') {
            document.getElementById('b' + topright).style.filter = 'sepia(1)';
            arry.push(topright);
          }
        }
        if (topleft > 0 && topleft % 8 != 0 && (topleft + 1) % 8 != 0) {
          if (document.getElementById('b' + topleft).classList[2] === 'none') {
            document.getElementById('b' + topleft).style.filter = 'brightness(1)';
            arry.push(topleft);
          }
          if (document.getElementById('b' + topleft).classList[1] === 'white') {
            document.getElementById('b' + topleft).style.filter = 'sepia(1)';
            arry.push(topleft);
          }
        }
      } //end of knight 
      //black bishop
      if (pname === "bishop" || pname === 'queen') {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        document.getElementById('b' + val).style.filter = 'brightness(1)';
        //moving bottom right
        let bottomright = 0;
        if (val % 8 === 0) {
          bottomright = 0;
        } else {
          bottomright = 8 - val % 8;
        }
        j = val + 9;
        for (let i = 0; i < bottomright; i++) {
          if (j < 65) {
            if (document.getElementById('b' + j).classList[1] === 'white') {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j += 9;
            }
          }
        }
        //bottom left
        let bottomleft = 0;
        if ((val - 1) % 8 === 0) 
          bottomleft = 0;
        else if (val % 8 === 0)
          bottomleft = 8
        else
          bottomleft = val % 8;
        
        j = val + 7;
        for (let i = 1; i < bottomleft; i++) {
          if (j < 65) {
            if (document.getElementById('b' + j).classList[1] === 'white') {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j += 7;
            }
          }
        }

        let topright = (val % 8 === 0) ? 0 : 8 - (val % 8); // Top Right
        j = val - 7;
        for (let i = 0; i < topright; i++) {
          if (j > 0) {
            if (document.getElementById('b' + j).classList[1] === 'white') {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j -= 7;
            }
          }
        }
        // top left
        let topleft;
        if ((val - 1) % 8 === 0) 
          topleft = 0;
        else if (val % 8 === 0) 
          topleft = 8
        else 
          topleft = val % 8;
        
        j = val - 9;
        for (let i = 1; i < topleft; i++) {
          if (j > 0) {
            if (document.getElementById('b' + j).classList[1] === 'white') {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j -= 9;
            }
          }
        }
      } //end of bishop
      //black king
      if (pname === "king") {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        //right
        if (val % 8 != 0) {
          //right right
          if (val + 1 < 65 && document.getElementById('b' + (val + 1)).classList[2] === 'none') {
            document.getElementById('b' + (val + 1)).style.filter = 'brightness(1)';
            arry.push(val + 1);
          }
          if (val + 1 < 65 && document.getElementById('b' + (val + 1)).classList[1] === 'white') {
            document.getElementById('b' + (val + 1)).style.filter = 'sepia(1)';
            arry.push(val + 1);
          }
          if (val + 9 < 65 && document.getElementById('b' + (val + 9)).classList[2] === 'none') {
            document.getElementById('b' + (val + 9)).style.filter = 'brightness(1)';
            arry.push(val + 9);
          }
          if (val + 9 < 65 && document.getElementById('b' + (val + 9)).classList[1] === 'white') {
            document.getElementById('b' + (val + 9)).style.filter = 'sepia(1)';
            arry.push(val + 9);
          }
          if (val - 7 > 0 && document.getElementById('b' + (val - 7)).classList[2] === 'none') {
            document.getElementById('b' + (val - 7)).style.filter = 'brightness(1)';
            arry.push(val - 7);
          }
          if (val - 7 > 0 && document.getElementById('b' + (val - 7)).classList[1] === 'white') {
            document.getElementById('b' + (val - 7)).style.filter = 'sepia(1)';
            arry.push(val - 7);
          }
        }
        //left
        if ((val - 1) % 8 != 0) {
          if (val - 1 > 0 && document.getElementById('b' + (val - 1)).classList[2] === 'none') {
            document.getElementById('b' + (val - 1)).style.filter = 'brightness(1)';
            arry.push(val - 1);
          }
          if (val - 1 > 0 && document.getElementById('b' + (val - 1)).classList[1] === 'white') {
            document.getElementById('b' + (val - 1)).style.filter = 'sepia(1)';
            arry.push(val - 1);
          }
          if (val - 9 > 0 && document.getElementById('b' + (val - 9)).classList[2] === 'none') {
            document.getElementById('b' + (val - 9)).style.filter = 'brightness(1)';
            arry.push(val - 9);
          }
          if (val - 9 > 0 && document.getElementById('b' + (val - 9)).classList[1] === 'white') {
            document.getElementById('b' + (val - 9)).style.filter = 'sepia(1)';
            arry.push(val - 9);
          }
          if (val + 7 < 65 && document.getElementById('b' + (val + 7)).classList[2] === 'none') {
            document.getElementById('b' + (val + 7)).style.filter = 'brightness(1)';
            arry.push(val + 7);
          }
          if (val + 7 < 65 && document.getElementById('b' + (val + 7)).classList[1] === 'white') {
            document.getElementById('b' + (val + 7)).style.filter = 'sepia(1)';
            arry.push(val + 7);
          }
        }
        //bottom
        if (val + 8 < 65) {
          if (document.getElementById('b' + (val + 8)).classList[2] === 'none') {
            document.getElementById('b' + (val + 8)).style.filter = 'brightness(1)';
            arry.push(val + 8);
          }
          if (document.getElementById('b' + (val + 8)).classList[1] === 'white') {
            document.getElementById('b' + (val + 8)).style.filter = 'sepia(1)';
            arry.push(val + 8);
          }
        }
        //top
        if (val - 8 > 0) {
          if (document.getElementById('b' + (val - 8)).classList[2] === 'none') {
            document.getElementById('b' + (val - 8)).style.filter = 'brightness(1)';
            arry.push(val - 8);
          }
          if (document.getElementById('b' + (val - 8)).classList[1] === 'white') {
            document.getElementById('b' + (val - 8)).style.filter = 'sepia(1)';
            arry.push(val - 8);
          }
        }
      }
    } //end of black piece check
    //checking white piece
    if (pcolor === 'white' && turn[turnval] === pturn) {
      arry = [];
      //white pawn move
      if (pname === "pawn") {
        lastp = p;
        //for starting position
        if (val < 57 && val > 48) {
          //looping to get all three cells at once
          for (let i = 0; i < 2; i++) {
            j -= 8;
            document.getElementById('b' + val).style.filter = 'brightness(1)';
            //checking next cell is empty
            if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
              document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
              arry.push(val + j);
            }
          } //end of for loop
        } else {
          j -= 8
          document.getElementById('b' + val).style.filter = 'brightness(1)';
          //checking next cell
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
          }
        }
        //checking none last pawn
        if ((val - 1) % 8 != 0 && document.getElementById('b' + (val - 9)).classList[1] === "black") {
          document.getElementById('b' + (val - 9)).style.filter = 'sepia(1)';
          arry.push(val - 9);
        }
        //checking none fist pawn
        if (val % 8 != 0 && document.getElementById('b' + (val - 7)).classList[1] === "black") {
          document.getElementById('b' + (val - 7)).style.filter = 'sepia(1)';
          arry.push(val - 7);
        }
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
      } //end of pawn if
      //white rook move
      if (pname === 'rook' || pname === 'queen') {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        //bottom move
        j = 8;
        let bottommove = 0;
        let test = val;
        for (let i = 0; i < 8; i++) {
          test += 8
          if (test < 65) bottommove ++;
        }
        for (let i = 0; i < bottommove; i++) {
          document.getElementById('b' + val).style.filter = 'brightness(1)';
          if (document.getElementById('b' + (val + j)).classList[1] === "black") {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          //checking for empty cell
          if (document.getElementById('b' + (val + j)).classList[2] === 'none' && (val + j) < 65) {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j += 8;
          }
        } //end of bottom move
        //top move
        j = -8;
        let topmove = 0;
        test = val
        for (let i = 0; i < 8; i++) {
          test -= 8
          if (test > 0) topmove++;
        }
        for (let i = 0; i < topmove; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === "black") {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          //checking for empty cells
          if ((val + j) > 0 && document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j -= 8;
          }
        } //end of top move
        //right move
        j = 1;
        let moveright = (val % 8 === 0) ? 0 : 8 - (val % 8);
        //checking not at right edge
        for (let i = 0; i < moveright; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === "black") {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j += 1;
          }
        } //end of right move
        //left move{
        j = -1;	
        let moveleft = (val % 8 === 0) ? 7 : (val - 1) % 8; // Checking not at left edge
        for (let i = 0; i < moveleft; i++) {
          if (document.getElementById('b' + (val + j)).classList[1] === "black") {
            document.getElementById('b' + (val + j)).style.filter = 'sepia(1)';
            arry.push(val + j);
          }
          if (document.getElementById('b' + (val + j)).classList[2] === 'none') {
            document.getElementById('b' + (val + j)).style.filter = 'brightness(1)';
            arry.push(val + j);
            j -= 1;
          }
        }
      } //end of rook
      //white knight
      if (pname === "knight") {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        let leftbottom = val + 8 + 7;
        let rightbottom = val + 8 + 9;
        let bottomright = val + 10;
        let bottomleft = val + 6;
        let righttop = val - 8 - 7;
        let lefttop = val - 8 - 9;
        let topright = val - 6;
        let topleft = val - 10;
        document.getElementById('b' + val).style.filter = 'brightness(1)';
        if (leftbottom < 65 && leftbottom % 8 != 0) {
          if (document.getElementById('b' + leftbottom).classList[2] === 'none') {
            document.getElementById('b' + leftbottom).style.filter = 'brightness(1)';
            arry.push(leftbottom);
          }
          if (document.getElementById('b' + leftbottom).classList[1] === "black") {
            document.getElementById('b' + leftbottom).style.filter = 'sepia(1)';
            arry.push(leftbottom);
          }
        }
        if (rightbottom < 65 && val % 8 != 0) {
          if (document.getElementById('b' + rightbottom).classList[2] === 'none') {
            document.getElementById('b' + rightbottom).style.filter = 'brightness(1)';
            arry.push(rightbottom);
          }
          if (document.getElementById('b' + rightbottom).classList[1] === "black") {
            document.getElementById('b' + rightbottom).style.filter = 'sepia(1)';
            arry.push(rightbottom);
          }
        }
        if (bottomleft < 65 && (val - 1) % 8 != 0 && (val - 2) % 8 != 0) {
          if (document.getElementById('b' + bottomleft).classList[2] === 'none') {
            document.getElementById('b' + bottomleft).style.filter = 'brightness(1)';
            arry.push(bottomleft);
          }
          if (document.getElementById('b' + bottomleft).classList[1] === "black") {
            document.getElementById('b' + bottomleft).style.filter = 'sepia(1)';
            arry.push(bottomleft);
          }
        }
        if (bottomright < 65 && val % 8 != 0 && (val + 1) % 8 != 0) {
          if (document.getElementById('b' + bottomright).classList[2] === 'none') {
            document.getElementById('b' + bottomright).style.filter = 'brightness(1)';
            arry.push(bottomright);
          }
          if (document.getElementById('b' + bottomright).classList[1] === 'white') {
            document.getElementById('b' + bottomright).style.filter = 'sepia(1)';
            arry.push(bottomright);
          }
        }
        if (righttop > 0 && (righttop - 1) % 8 != 0) {
          if (document.getElementById('b' + righttop).classList[2] === 'none') {
            document.getElementById('b' + righttop).style.filter = 'brightness(1)';
            arry.push(righttop);
          }
          if (document.getElementById('b' + righttop).classList[1] === "black") {
            document.getElementById('b' + righttop).style.filter = 'sepia(1)';
            arry.push(righttop);
          }
        }
        if (lefttop > 0 && lefttop % 8 != 0) {
          if (document.getElementById('b' + lefttop).classList[2] === 'none') {
            document.getElementById('b' + lefttop).style.filter = 'brightness(1)';
            arry.push(lefttop);
          }
          if (document.getElementById('b' + lefttop).classList[1] === "black") {
            document.getElementById('b' + lefttop).style.filter = 'sepia(1)';
            arry.push(lefttop);
          }
        }
        if (topright > 0 && (val + 1) % 8 != 0 && val % 8 != 0) {
          if (document.getElementById('b' + topright).classList[2] === 'none') {
            document.getElementById('b' + topright).style.filter = 'brightness(1)';
            arry.push(topright);
          }
          if (document.getElementById('b' + topright).classList[1] === "black") {
            document.getElementById('b' + topright).style.filter = 'sepia(1)';
            arry.push(topright);
          }
        }
        if (topleft > 0 && topleft % 8 != 0 && (topleft + 1) % 8 != 0) {
          if (document.getElementById('b' + topleft).classList[2] === 'none') {
            document.getElementById('b' + topleft).style.filter = 'brightness(1)';
            arry.push(topleft);
          }
          if (document.getElementById('b' + topleft).classList[1] === "black") {
            document.getElementById('b' + topleft).style.filter = 'sepia(1)';
            arry.push(topleft);
          }
        }
      } //end of knight 
      //white bishop
      if (pname === "bishop" || pname === 'queen') {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        document.getElementById('b' + val).style.filter = 'brightness(1)';
        
        let bottomright = (val % 8 === 0) ? 0 : 8 - val % 8; // Moving Bottom Right
        j = val + 9;
        for (let i = 0; i < bottomright; i++) {
          if (j < 65) {
            if (document.getElementById('b' + j).classList[1] === "black") {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j += 9;
            }
          }
        }
        //bottom left
        let bottomleft = 0;
        if ((val - 1) % 8 === 0) {
          bottomleft = 0;
        } else if (val % 8 === 0) {
          bottomleft = 8
        } else {
          bottomleft = val % 8;
        }
        j = val + 7;
        for (let i = 1; i < bottomleft; i++) {
          if (j < 65) {
            if (document.getElementById('b' + j).classList[1] === "black") {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j += 7;
            }
          }
        }
        //top right
        let topright = (val % 8 === 0) ? 0 : 8 - (val % 8);
        j = val - 7;
        for (let i = 0; i < topright; i++) {
          if (j > 0) {
            if (document.getElementById('b' + j).classList[1] === "black") {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j -= 7;
            }
          }
        }
        // top left
        let topleft = 0;
        if ((val - 1) % 8 === 0) {
          topleft = 0;
        } else if (val % 8 === 0) {
          topleft = 8
        } else {
          topleft = val % 8;
        }
        j = val - 9;
        for (let i = 1; i < topleft; i++) {
          if (j > 0) {
            if (document.getElementById('b' + j).classList[1] === "black") {
              document.getElementById('b' + j).style.filter = 'sepia(1)';
              arry.push(j);
            }
            if (document.getElementById('b' + j).classList[2] === 'none') {
              document.getElementById('b' + j).style.filter = 'brightness(1)';
              arry.push(j);
              j -= 9;
            }
          }
        }
      } //end of bishop
      //white king
      if (pname === "king") {
        lastp = p;
        lpcolor = pcolor;
        lpname = pname;
        lpturn = pturn;
        lastval = val;
        //right
        if (val % 8 != 0) {
          //right right
          if (val + 1 < 65 && document.getElementById('b' + (val + 1)).classList[2] === 'none') {
            document.getElementById('b' + (val + 1)).style.filter = 'brightness(1)';
            arry.push(val + 1);
          }
          if (val + 1 < 65 && document.getElementById('b' + (val + 1)).classList[1] === "black") {
            document.getElementById('b' + (val + 1)).style.filter = 'sepia(1)';
            arry.push(val + 1);
          }
          if (val + 9 < 65 && document.getElementById('b' + (val + 9)).classList[2] === 'none') {
            document.getElementById('b' + (val + 9)).style.filter = 'brightness(1)';
            arry.push(val + 9);
          }
          if (val + 9 < 65 && document.getElementById('b' + (val + 9)).classList[1] === "black") {
            document.getElementById('b' + (val + 9)).style.filter = 'sepia(1)';
            arry.push(val + 9);
          }
          if (val - 7 > 0 && document.getElementById('b' + (val - 7)).classList[2] === 'none') {
            document.getElementById('b' + (val - 7)).style.filter = 'brightness(1)';
            arry.push(val - 7);
          }
          if (val - 7 > 0 && document.getElementById('b' + (val - 7)).classList[1] === "black") {
            document.getElementById('b' + (val - 7)).style.filter = 'sepia(1)';
            arry.push(val - 7);
          }
        }
        //left
        if ((val - 1) % 8 != 0) {
          if (val - 1 > 0 && document.getElementById('b' + (val - 1)).classList[2] === 'none') {
            document.getElementById('b' + (val - 1)).style.filter = 'brightness(1)';
            arry.push(val - 1);
          }
          if (val - 1 > 0 && document.getElementById('b' + (val - 1)).classList[1] === "black") {
            document.getElementById('b' + (val - 1)).style.filter = 'sepia(1)';
            arry.push(val - 1);
          }
          if (val - 9 > 0 && document.getElementById('b' + (val - 9)).classList[2] === 'none') {
            document.getElementById('b' + (val - 9)).style.filter = 'brightness(1)';
            arry.push(val - 9);
          }
          if (val - 9 > 0 && document.getElementById('b' + (val - 9)).classList[1] === "black") {
            document.getElementById('b' + (val - 9)).style.filter = 'sepia(1)';
            arry.push(val - 9);
          }
          if (val + 7 < 65 && document.getElementById('b' + (val + 7)).classList[2] === 'none') {
            document.getElementById('b' + (val + 7)).style.filter = 'brightness(1)';
            arry.push(val + 7);
          }
          if (val + 7 < 65 && document.getElementById('b' + (val + 7)).classList[1] === "black") {
            document.getElementById('b' + (val + 7)).style.filter = 'sepia(1)';
            arry.push(val + 7);
          }
        }
        //bottom
        if (val + 8 < 65) {
          if (document.getElementById('b' + (val + 8)).classList[2] === 'none') {
            document.getElementById('b' + (val + 8)).style.filter = 'brightness(1)';
            arry.push(val + 8);
          }
          if (document.getElementById('b' + (val + 8)).classList[1] === "black") {
            document.getElementById('b' + (val + 8)).style.filter = 'sepia(1)';
            arry.push(val + 8);
          }
        }
        //top
        if (val - 8 > 0) {
          if (document.getElementById('b' + (val - 8)).classList[2] === 'none') {
            document.getElementById('b' + (val - 8)).style.filter = 'brightness(1)';
            arry.push(val - 8);
          }
          if (document.getElementById('b' + (val - 8)).classList[1] === "black") {
            document.getElementById('b' + (val - 8)).style.filter = 'sepia(1)';
            arry.push(val - 8);
          }
        }
      }
    } //end of white piece check
  } //end of cheching empty cells
  move(val);
}

function move(val) {
	for (let i = 0; i < arry.length; i++) {
		if (val === arry[i]) {
			//black pawn queen
			if (arry[i] > 56 && arry[i] <= 64 && lpname === "pawn") {
				lpname = 'queen'
				lastp = "<p class='p'>&#" + bq + ";</p>";
			}
			//white pawn queen
			if (arry[i] > 0 && arry[i] <= 8 && lpname === "pawn") {
				lpname = 'queen'
				lastp = "<p class='p'>&#" + wq + ";</p>";
			}
			cls = "box " + lpcolor + " " + lpname + " " + lpturn;
			id.innerHTML = lastp;
			id.className = cls;
			document.getElementById('b' + lastval).innerHTML = "";
			document.getElementById('b' + lastval).classList = "box pcolor none nturn";
			arry = [];

			turnval = (turnval === 1) ? 0 : 1;
		}
	}
	check();
}