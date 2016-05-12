// Your JS goes here
'use strict';

// var body = document.getElementsByTagName('body');



var checkBoard = document.createElement('div');
  checkBoard.style.width =  "100%";

var red = document.createElement('div');
  red.style.width = "11.1%";
  red.style.backgroundColor = "#D50000";
  red.style.float = "left";
  red.style.paddingBottom = "11.1%";

var black = document.createElement('div');
  black.style.width = "11.1%";
  black.style.backgroundColor = "#000000";
  black.style.float = "left";
  black.style.paddingBottom = "11.1%";

//create an object which can be reused over and over again on the DOM
//initialize first two children
document.body.appendChild(checkBoard);
checkBoard.appendChild(red);
checkBoard.appendChild(black);
//increment i each time
for (var i = 0; i < 98; i++) {
  //initialize my clones with the distinctive of i
  var redClone = red.cloneNode(i);
  var blackClone = black.cloneNode(i);

  //push the distinctive clones to the checkBoard node
  checkBoard.appendChild(redClone);
  checkBoard.appendChild(blackClone);
}
//profit
