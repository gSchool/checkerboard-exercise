// Your JS goes here

for(i = 0; i < 80; i++) {
  var newTile = document.createElement('div');
  var body = document.getElementsByTagName('body');
  document.body.appendChild(newTile);
  newTile.style.width = "11.1%";
  newTile.style.paddingBottom = "11.1%";
  newTile.style.float = "left";
  newTile.style.backgroundColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);
}

setInterval(function() {
  for(i = 0; i < 80; i++) {
   var newTile = document.getElementsByTagName('div')[i];
   newTile.style.backgroundColor = '#'+Math.floor(Math.random() *16777215).toString(16);
 }
}, 1000);
