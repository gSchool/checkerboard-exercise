

// Normal Checkerboard

// function createTilesOddRow() {
// var redTile = document.createElement('div');
// redTile.classname = "odd";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// redTile.style.background = "red";
// redTile.style.float = "left";
// document.body.appendChild(redTile);
//
// var blackTile = document.createElement('div');
// blackTile.classname = "even";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// blackTile.style.background = "black";
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
// };
//
// function createTilesEvenRow() {
// var blackTile = document.createElement('div');
// blackTile.classname = "odd";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// blackTile.style.background = "black";
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
//
// var redTile = document.createElement('div');
// redTile.classname = "even";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// redTile.style.background = "red";
// redTile.style.float = "left";
// document.body.appendChild(redTile);
// };
//
// function createChessBoard(){
// for(var i = 1; i <=4; i++){
//   createTilesOddRow(i);
//   }
// for(var i = 1; i <=4; i++){
//   createTilesEvenRow(i);
//   }
// }
// for(var i = 1; i <= 4; i++){
//   createChessBoard(i);
// }


// Random-Colors

// function createTilesOddRow() {
// var redTile = document.createElement('div');
// redTile.classname = "odd";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// redTile.style.background = randColor;
// redTile.style.float = "left";
// document.body.appendChild(redTile);
//
// var blackTile = document.createElement('div');
// blackTile.classname = "even";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// blackTile.style.background = randColor;
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
// };
//
// function createTilesEvenRow() {
// var blackTile = document.createElement('div');
// blackTile.classname = "odd";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// blackTile.style.background = randColor;
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
//
// var redTile = document.createElement('div');
// redTile.classname = "even";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// redTile.style.background = randColor;
// redTile.style.float = "left";
// document.body.appendChild(redTile);
// };
//
// function createChessBoard(){
// for(var i = 1; i <=4; i++){
//   createTilesOddRow(i);
//   }
// for(var i = 1; i <=4; i++){
//   createTilesEvenRow(i);
//   }
// }
// for(var i = 1; i <= 4; i++){
//   createChessBoard(i);
// }

// Gradient
//
// function createTilesOddRow() {
// var redTile = document.createElement('div');
// redTile.classname = "odd";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// redTile.style.background = "linear-gradient(teal, orange )";
// redTile.style.float = "left";
// document.body.appendChild(redTile);
//
// var blackTile = document.createElement('div');
// blackTile.classname = "even";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// blackTile.style.background = "linear-gradient(green, brown)";
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
// };
//
// function createTilesEvenRow() {
// var blackTile = document.createElement('div');
// blackTile.classname = "odd";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// blackTile.style.background = "linear-gradient(green, brown)";
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
//
// var redTile = document.createElement('div');
// redTile.classname = "even";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// redTile.style.background = "linear-gradient(teal, orange )";
// redTile.style.float = "left";
// document.body.appendChild(redTile);
// };
//
// function createChessBoard(){
// for(var i = 1; i <=4; i++){
//   createTilesOddRow(i);
//   }
// for(var i = 1; i <=4; i++){
//   createTilesEvenRow(i);
//   }
// }
// for(var i = 1; i <= 4; i++){
//   createChessBoard(i);
// }

// Flashing

// setInterval('window.location.reload()', 2000);
//
// function createTilesOddRow() {
// var redTile = document.createElement('div');
// redTile.classname = "odd";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// redTile.style.background = randColor;
// redTile.style.float = "left";
// document.body.appendChild(redTile);
//
// var blackTile = document.createElement('div');
// blackTile.classname = "even";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// blackTile.style.background = randColor;
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
// };
//
// function createTilesEvenRow() {
// var blackTile = document.createElement('div');
// blackTile.classname = "odd";
// blackTile.style.width = "12.5%";
// blackTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// blackTile.style.background = randColor;
// blackTile.style.float = "left";
// document.body.appendChild(blackTile);
//
// var redTile = document.createElement('div');
// redTile.classname = "even";
// redTile.style.width = "12.5%";
// redTile.style.paddingBottom = "12.5%";
// var rgb = [];
// for (var i = 0; i < 3; i++){
//   rgb.push(Math.floor(Math.random() * 255));
// }
// var randColor = 'rgb(' + rgb.join(',') + ')';
// redTile.style.background = randColor;
// redTile.style.float = "left";
// document.body.appendChild(redTile);
// };
//
// function createChessBoard(){
// for(var i = 1; i <=4; i++){
//   createTilesOddRow(i);
//   }
// for(var i = 1; i <=4; i++){
//   createTilesEvenRow(i);
//   }
// }
// for(var i = 1; i <= 4; i++){
//   createChessBoard(i);
// }
