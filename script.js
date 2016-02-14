// Your JS goes here

for(i=0; i<9; i++) {
  for(x=0; x<9 ; x++) {
    var newTile = document.createElement('div');
    var body = document.getElementsByTagName('body');
    newTile.className = "tile";
    document.body.appendChild(newTile);
    newTile.style.width = "11.1%";
    newTile.style.paddingBottom = "11.1%";
    newTile.style.float = "left";
    newTile.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }
}
