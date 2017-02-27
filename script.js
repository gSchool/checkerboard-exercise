window.onload = function() {
  var createBorder = document.createElement("div");
  document.body.appendChild(createBorder);
  var board = document.body.children[0];
  document.body.setAttribute("style", "margin: 0; padding 0;")


  board.setAttribute("style", "margin: 0px; border:2px solid black; height:100vh; width:100vw");
  // board.setAttribute("style", "margin: 0px; height:600px; width:600px");


  for (let i = 0; i <= 80; i++) {
    let createTile = document.createElement("div");
    board.appendChild(createTile);
    tile = board.children[i];
    tile.setAttribute("style", "box-sizing: border-box; height:11.1%; width: 11.1%; float: left");
  }
  for (let i = 0; i <= 80; i += 2) {
    let everyOtherTile = board.children[i];
    everyOtherTile.setAttribute("style", "background-color: black; box-sizing: border-box; height:11.1%; width: 11.1%; float: left")
  }
  for (let i = 1; i <= 80; i += 2) {
    let everyOtherTile = board.children[i];
    everyOtherTile.setAttribute("style", "background-color: red; box-sizing: border-box; height:11.1%; width: 11.1%; float: left")
  }
}
