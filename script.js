// Your JS goes here

// var board = function () {
//   this.width = width;
//   this.height = height;
// }

// var width = prompt("How wide is the board?");
// var height = prompt("How tall is the board?");
// var counter = 0;

var board = function(height) {
var body = document.getElementsByTagName('body')[0];

  for (var i = 0; i < height * 9; i++) {
    document.createElement('div');
    body.appendChild('div')[i];
    var target = document.getElementsByTagName('div')[i];
    target.style.width = '11.1%';
    target.style.paddingBottom = '11.1%';
    target.style.float = 'left';
    target.style.border = '1px solid black';

      }
    };

board(3);
