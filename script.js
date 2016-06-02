// Your JS goes here
var body = document.getElementsByTagName("body")[0];
var grad = document.createElement("div");
grad.style.background="linear-gradient(red,blue,black)";
grad.style.width = "100%";
grad.style.height="925px";
grad.style.position = "absolute";
grad.style.opacity = "0.6";
body.appendChild(grad);

for (var i = 0; i < 27; i++) {
  var bblock = document.createElement("div");
  var rblock = document.createElement("div");
  bblock.style.backgroundColor = "green";
  bblock.style.width = "11.1%";
  bblock.style.cssFloat = "left";
  bblock.style.paddingBottom = "11.1%";
  rblock.style.backgroundColor = "black";
  rblock.style.width = "11.1%";
  rblock.style.cssFloat = "left";
  rblock.style.paddingBottom = "11.1%";

  body.appendChild(rblock);
  body.appendChild(bblock);
}
