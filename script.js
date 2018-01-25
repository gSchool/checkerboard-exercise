// Your JS goes here
var body = document.getElementsByTagName("body")[0];
for (var i = 0; i < 36; i++) {
  var bblock = document.createElement("div");
  var rblock = document.createElement("div");
  bblock.style.backgroundColor = "black";
  bblock.style.width = "11.1%";
  bblock.style.cssFloat = "left";
  bblock.style.paddingBottom = "11.1%";
  rblock.style.backgroundColor = "red";
  rblock.style.width = "11.1%";
  rblock.style.cssFloat = "left";
  rblock.style.paddingBottom = "11.1%";

  body.appendChild(rblock);
  body.appendChild(bblock);
}
