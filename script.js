// Your JS goes here
var body = document.getElementsByTagName("body")[0];
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");

div1.id = "container";
div1.style.boxSizing = "border-box";
div1.style.margin = "-10px -10px 0px -10px";
body.appendChild(div1);

var container = document.getElementById("container");


for(var i = 0; i < 81; i++){
  if(i % 2){
    var div_even = document.createElement("div");
    div_even.style.background = "red";
    div_even.style.width = "11.1%";
    div_even.style.height = "11.1vw";
    div_even.style.display = "inline-block";
    div_even.style.float = "left";

    container.appendChild(div_even)
  } else {
    var div_odd = document.createElement("div");
    div_odd.style.background = "black";
    div_odd.style.width = "11.1%";
    div_odd.style.height = "11.1vw";
    div_odd.style.display = "inline-block";
    div_odd.style.float = "left";

    container.appendChild(div_odd)
  }
}
