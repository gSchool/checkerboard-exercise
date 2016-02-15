function createTiles() {
var redTile = document.createElement('div');
redTile.classname = "odd";
redTile.style.width = "11.1%";
redTile.style.paddingBottom = "11.1%";
redTile.style.background = 'red';
redTile.style.float = "left";
document.body.appendChild(redTile);

var blackTile = document.createElement('div');
blackTile.classname = "odd";
blackTile.style.width = "11.1%";
blackTile.style.paddingBottom = "11.1%";
blackTile.style.background = 'black';
blackTile.style.float = "left";
document.body.appendChild(blackTile);
};

for(var i = 1; i <=40; i++){
  createTiles(i);
}

var finalTile = document.createElement('div');
finalTile.classname = "odd";
finalTile.style.width = "11.1%";
finalTile.style.paddingBottom = "11.1%";
finalTile.style.background = 'red';
finalTile.style.float = "left";
document.body.appendChild(finalTile);
