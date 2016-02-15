function createTilesOddRow() {
var redTile = document.createElement('div');
redTile.classname = "odd";
redTile.style.width = "12.5%";
redTile.style.paddingBottom = "12.5%";
redTile.style.background = 'red';
redTile.style.float = "left";
document.body.appendChild(redTile);

var blackTile = document.createElement('div');
blackTile.classname = "even";
blackTile.style.width = "12.5%";
blackTile.style.paddingBottom = "12.5%";
blackTile.style.background = 'black';
blackTile.style.float = "left";
document.body.appendChild(blackTile);
};

function createTilesEvenRow() {
var redTile = document.createElement('div');
redTile.classname = "odd";
redTile.style.width = "12.5%";
redTile.style.paddingBottom = "12.5%";
redTile.style.background = 'black';
redTile.style.float = "left";
document.body.appendChild(redTile);

var blackTile = document.createElement('div');
blackTile.classname = "even";
blackTile.style.width = "12.5%";
blackTile.style.paddingBottom = "12.5%";
blackTile.style.background = 'red';
blackTile.style.float = "left";
document.body.appendChild(blackTile);
};

function createChessBoard(){
for(var i = 1; i <=4; i++){
  createTilesOddRow(i);
  }
for(var i = 1; i <=4; i++){
  createTilesEvenRow(i);
  }
}
for(var i = 1; i <= 4; i++){
  createChessBoard(i);
}


// var finalTile = document.createElement('div');
// finalTile.classname = "odd";
// finalTile.style.width = "11.1%";
// finalTile.style.paddingBottom = "11.1%";
// finalTile.style.background = 'red';
// finalTile.style.float = "left";
// document.body.appendChild(finalTile);
