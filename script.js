var styles = document.createElement("style");
styles.innerHTML = "* {margin: 0;padding: 0;}"


var canvas = document.getElementsByTagName("body")[0];
canvas.appendChild(styles);

for (var i = 0; i < 63; i++) {
  var squaresRed = document.createElement("div");
  var squaresBlack = document.createElement('div');

  squaresRed.style.backgroundColor = "red";
  squaresRed.style.width = "11.1%"
  squaresRed.style.paddingBottom = "11.1%"
  squaresRed.style.float = "left"

  squaresBlack.style.backgroundColor = "black";
  squaresBlack.style.width = "11.1%"
  squaresBlack.style.paddingBottom = "11.1%"
  squaresBlack.style.float = "left"

  if(i % 2 == 0) {
    canvas.appendChild(squaresRed);
  }
  else {
    canvas.appendChild(squaresBlack);
  }
}
