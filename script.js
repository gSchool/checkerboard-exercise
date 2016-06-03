// Your JS goes here


var body = document.getElementsByTagName("body");

function blackStart() {
for (var i=0; i<9; i++) {
  if(i%2===0) {
  var tileBlack = document.createElement("div");
  tileBlack.style.width = "11.1%";
  tileBlack.style.height = "11.1%";
  tileBlack.style.background = "black";
  tileBlack.style.color = "white";
  tileBlack.style.float = "left";
  tileBlack.style.paddingBottom = "11.1%";
  document.body.appendChild(tileBlack);
} else {
    var tileRed = document.createElement("div");
    tileRed.style.width = "11.1%";
    tileRed.style.height = "11.1%";
    tileRed.style.background = "red";
    tileRed.style.color = "white";
    tileRed.style.float = "left";
    tileRed.style.paddingBottom = "11.1%";
    document.body.appendChild(tileRed);
}
}
}

function redStart() {
for (var i=0; i<9; i++) {
  if (i%2 === 0) {
    var tileRed = document.createElement("div");
    tileRed.style.width = "11.1%";
    tileRed.style.height = "11.1%";
    tileRed.style.background = "red";
    tileRed.style.color = "white";
    tileRed.style.float = "left";
    tileRed.style.paddingBottom = "11.1%";
    document.body.appendChild(tileRed);
  } else {
    var tileBlack = document.createElement("div");
    tileBlack.style.width = "11.1%";
    tileBlack.style.height = "11.1%";
    tileBlack.style.background = "black";
    tileBlack.style.color = "white";
    tileBlack.style.float = "left";
    tileBlack.style.paddingBottom = "11.1%";
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
