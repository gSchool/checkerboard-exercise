// Your JS goes here
var body = document.getElementsByTagName("body");
body[0].style.backgroundImage = "linear-gradient(45deg, white, #0000cc)";

for (var i = 0; i < 81; i++) {
  var box = document.createElement("div");
  box.style.width = "11.1%";
  box.style.paddingBottom = "11.1%";
  box.style.float = "left";
  body[0].appendChild(box);
  (i%2 === 0) ? box.style.backgroundColor = "#CF2DF9" : box.style.backgroundColor = "#3DCEF2";
  box.style.opacity = "0.5";
};
