'use strict';
// //###Random Colors
//
// Instead of being either red or black, each tile should be a random color.  How do you generate random colors?  You can use RGB or Hexadecimal as your color system.
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  //console.log(letters);
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    //console.log(color);
    return color;
}

//getRandomColor();

var checkBoard = document.createElement('div');
  checkBoard.width = "100%";
document.body.appendChild(checkBoard);


for (var i = 1; i<=81; i++){
  var sqr = document.createElement('div');
    sqr.style.width = "11.1%";
    sqr.style.paddingBottom = "11.1%";
    sqr.style.float = "left";
    sqr.style.backgroundColor = getRandomColor();

    checkBoard.appendChild(sqr);
}
