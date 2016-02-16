

for (var i = 0; i < 101; i++) {
var body = document.querySelector("body");
var boxOne = document.createElement("div");
var boxTwo = document.createElement("div");

  body.style.marginBottom = "-4px";
  body.style.marginLeft = "-4px";
  body.style.marginRight = "-4px";
  body.style.marginTop = "-4px"; 

  body.appendChild(boxOne);
  body.appendChild(boxTwo);

  boxOne.style.width = '11.1%';
  boxOne.style.float ='left';
  boxOne.style.paddingBottom ='11.1%';
  boxOne.style.backgroundColor = 'black';

  boxTwo.style.width = '11.1%';
  boxTwo.style.float = 'left';
  boxTwo.style.paddingBottom ='11.1%';
  boxTwo.style.backgroundColor = "red";

  body.style.backgroundImage = 'linear-gradient(black, purple)';

  if (i % 2 == 0) {
     boxOne.style.backgroundColor = 'grey';
     boxOne.style.opacity = ".4";
  } else {
    boxTwo.style.backgroundColor = 'purple';
     boxTwo.style.opacity = ".4";
   }
 };

var randomColor = 'rgb(' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ')';
window.setTimeout( "setbackground()", 2000);
boxOne.style.backgroundColor = randomColor;
boxTwo.style.backgroundColor = randomColor;
