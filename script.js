// Your JS goes here
var body = document.getElementsByTagName("body");

  for (var i = 0; i < 81; i++) {
    var box = document.createElement("div");
    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    box.style.float = "left";
    body[0].appendChild(box);
    (i%2 === 0) ? box.style.backgroundColor = "black" : box.style.backgroundColor = "red";
  };
