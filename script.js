// Your JS goes here
function random() {
    var x = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += x[Math.floor(Math.random() * 16)];
    }
    return color;
}

var body = document.getElementsByTagName("body")[0];
for (var i = 0; i < 45; i++) {
  var block = document.createElement("div");
  block.style.backgroundColor = random();
  block.style.width = "11.1%";
  block.style.cssFloat = "left";
  block.style.paddingBottom = "11.1%";
  body.appendChild(block);
}
var blocks = document.getElementsByTagName("div");

function change(){
  for (var b in blocks){
    blocks[b].style.backgroundColor = random();
  }
}

setInterval('change()', 2000);
