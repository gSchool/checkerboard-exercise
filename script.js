

for (var i = 0; i < 5000; i++) {
var body = document.querySelector("body");
  body.style.marginBottom = "-4px";
  body.style.marginLeft = "-4px";
  body.style.marginRight = "-4px";
  body.style.marginTop = "-4px";

var blackBox = document.createElement("div");
  blackBox.style.width = '11.1%';
  blackBox.style.float ='left';
  blackBox.style.paddingBottom ='11.1%';
  blackBox.style.backgroundColor = 'black';

var redBox = document.createElement("div");
  redBox.style.width = '11.1%';
  redBox.style.float = 'left';
  redBox.style.paddingBottom ='11.1%';
  redBox.style.backgroundColor = "red";


  if (i % 2 == 0) {
     body.appendChild(blackBox);
  } else {
     body.appendChild(redBox);
  }
var randomColor = 'rgb(' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ')';
window.setTimeout( "setbackground()", 2000);
blackBox.style.backgroundColor = randomColor;
redBox.style.backgroundColor = randomColor;
}
