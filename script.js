// Your JS goes here
var body = document.getElementsByTagName("body")[0];
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

body.style.background = rando();

div1.id = "container";
div1.style.boxSizing = "border-box";
div1.style.margin = "-10px -10px 0px -10px";
body.appendChild(div1);

var container = document.getElementById("container");


var op = 1;
var col1 = rando();
var col2 = rando();
for(var i = 0; i < 81; i++){
    if(i % 2){
      var div_even = document.createElement("div");
      div_even.style.background = col1;
      div_even.style.width = "11.1%";
      div_even.style.height = "11.1vw";
      div_even.style.display = "inline-block";
      div_even.style.float = "left";
      div_even.style.opacity = (op -= 0.016).toString();

      container.appendChild(div_even)
    } else {
      var div_odd = document.createElement("div");
      div_odd.style.background = col2;
      div_odd.style.width = "11.1%";
      div_odd.style.height = "11.1vw";
      div_odd.style.display = "inline-block";
      div_odd.style.float = "left";
      div_odd.style.opacity = (op -= 0.016);

      container.appendChild(div_odd)
  }
}

function rando(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgb = "rgb(" + r + "," + g + "," + b +")";
  return rgb
}
