// Your JS goes here
'use strict';

var body = document.getElementsByTagName('body');

var checkBoard = document.createElement('div');
  checkBoard.height = "900px";
  checkBoard.width = "100%";

var red = document.createElement('div');
  red.style.height = "11.1%";
  red.style.width = "11.1%";
  red.style.backgroundColor = "#D50000";
  red.style.float = "left";
  red.style.paddingBottom = "11.1%";

var black = document.createElement('div');
  black.style.height = "11.1%";
  black.style.width = "11.1%";
  black.style.backgroundColor = "#000000";
  black.style.float = "left";
  black.style.paddingBottom = "11.1%";

body.appendChild(checkBoard);
checkBoard.appendChild(red);
checkBoard.appendChild(black);
