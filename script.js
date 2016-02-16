// // Your JS goes here
for(i=0; i<9; i++) {
  if(i % 2 === 1) {
    for(x=0; x<9 ; x++) {
      var newTile = document.createElement('div');
      var body = document.getElementsByTagName('body');
      newTile.className = "tile";
      document.body.appendChild(newTile);
      newTile.style.width = "11.1%";
      newTile.style.paddingBottom = "11.1%";
      newTile.style.float = "left";
      if(x % 2 === 0) {
        newTile.style.backgroundColor = "blue";
        newTile.style.opacity = "0.4";
      }
      if(x % 2 === 1) {
        newTile.style.backgroundColor = "pink";
        newTile.style.opacity = "0.4";
      }
    }
  }
  if(i % 2 === 0) {
    for(x=0; x<9 ; x++) {
      var newTile = document.createElement('div');
      var body = document.getElementsByTagName('body');
      newTile.className = "tile";
      document.body.appendChild(newTile);
      newTile.style.width = "11.1%";
      newTile.style.paddingBottom = "11.1%";
      newTile.style.float = "left";
      if(x % 2 === 0) {
        newTile.style.backgroundColor = "pink";
        newTile.style.opacity = "0.4";
      }
      if(x % 2 === 1) {
        newTile.style.backgroundColor = "blue";
        newTile.style.opacity = "0.4";
      }
    }
  }
}

var body = document.querySelector('body');
body.style.marginTop = "0%";
body.style.backgroundImage = "linear-gradient(blue, red)";
