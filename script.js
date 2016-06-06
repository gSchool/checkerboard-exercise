
for (var i = 0; i < 81; i++) {
  var blackTile = document.createElement('div');
  var redTile = document.createElement('div');
  if(i%2 === 0) {
    blackTile.style.backgroundColor = 'black';
    blackTile.style.width = '11.1%';
    blackTile.style.float = 'left';
    blackTile.style.paddingBottom = '11.1%';
    document.body.appendChild(blackTile);
  } else {
    redTile.style.backgroundColor = 'red';
    redTile.style.width = '11.1%';
    redTile.style.float = 'left';
    redTile.style.paddingBottom = '11.1%';
    document.body.appendChild(redTile);
  }
}
