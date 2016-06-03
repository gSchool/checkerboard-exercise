var body = document.getElementsByTagName("body")[0];

function rowOfRandom() {
for (var i=0; i<9; i++) {
  var tileRandomColor = document.createElement("div");
  var color = '#'+ Math.floor(Math.random()*16777215).toString(16);
  tileRandomColor.style.width = "11.1%";
  tileRandomColor.style.height = "11.1%";
  tileRandomColor.style.background = color;
  tileRandomColor.style.float = "left";
  tileRandomColor.style.paddingBottom = "11.1%";
  document.body.appendChild(tileRandomColor);
}
}

for (var i=0; i<5; i++) {
  rowOfRandom();
}
