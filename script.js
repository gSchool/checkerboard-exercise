// Your JS goes here
//red and black

var gotBody = document.getElementById("body")

var div_black = document.createElement("div");
var div_red = document.createElement("div");




for (var i = 0; i < 63; i++) {
  if (i % 2 === 1){
  var div_black = document.createElement("div");
  div_black.style.width = "11.1%";
  div_black.style.height = "11.1%";
  div_black.style.backgroundColor = "black";
  div_black.style.float = "left";
  div_black.style.paddingBottom = "11.1%";
  div_black.style.margin = "0px";


  gotBody.appendChild(div_black);

  } else {
    var div_red = document.createElement("div");
    div_red.style.width = "11.1%";
    div_red.style.height = "11.1%";
    div_red.style.backgroundColor = "red";
    div_red.style.float = "left";
    div_red.style.paddingBottom = "11.1%";
    div_red.style.margin = "0px";

    gotBody.appendChild(div_red);
  }
};
