// Your JS goes here

var num = 8;
var body = document.getElementsByTagName("body");

function blackStart() {
for (var i=0; i<9; i++) {
  if(i%2===0) {
  var tileBlack = document.createElement("div");
  tileBlack.style.width = "11.1%";
  tileBlack.style.height = "160px";
  tileBlack.style.background = "black";
  tileBlack.style.color = "white";
  tileBlack.style.float = "left";
  document.body.appendChild(tileBlack);
} else {
    var tileRed = document.createElement("div");
    tileRed.style.width = "11.1%";
    tileRed.style.height = "160px";
    tileRed.style.background = "red";
    tileRed.style.color = "white";
    tileRed.style.float = "left";
    document.body.appendChild(tileRed);
}
}
}

function redStart() {
for (var i=0; i<9; i++) {
  if (i%2 === 0) {
    var tileRed = document.createElement("div");
    tileRed.style.width = "11.1%";
    tileRed.style.height = "160px";
    tileRed.style.background = "red";
    tileRed.style.color = "white";
    tileRed.style.float = "left";
    document.body.appendChild(tileRed);
  } else {
    var tileBlack = document.createElement("div");
    tileBlack.style.width = "11.1%";
    tileBlack.style.height = "160px";
    tileBlack.style.background = "black";
    tileBlack.style.color = "white";
    tileBlack.style.float = "left";
    document.body.appendChild(tileBlack);
  }
}
}

for (var i=0; i<5; i++) {
  if (i%2===0) {
    blackStart();
  }else {
    redStart();
  }
}
// } else {
//   var tileRed = document.createElement("div");
//   tileRed.style.width = "11.1%";
//   tileRed.style.height = "100px";
//   tileRed.style.background = "red";
//   tileRed.style.color = "white";
//   tileRed.style.float = "left";
//   tileRed.innerHTML = "Hello";
//   document.body.appendChild(tileRed);
// }
// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
