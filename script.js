// Your JS goes here


var checkerBoard = document.getElementsByTagName('checkerBoard')[0];
var checkerBoard = document.createElement('div');
checkerBoard.id = 'checkerBoard';
document.checkerBoard.appendChild(checkerBoard);
for(var i = 0; i<63; i++){
  var tile  = document.createElement('div');
  var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.margin = "0";
  tile.style.paddingBottom = "11.1%";
  tile.style.backgroundColor = randomColor;

  checkerBoard.appendChild(tile);
}


setInterval(function(){
  var checkerBoard = document.getElementById('checkerBoard');
  if (checkerBoard.hasChildNodes()) {
    var children = checkerBoard.childNodes;
    for (var i = 0; i < children.length; i++) {
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      children[i].style.backgroundColor = randomColor;
    }
  }

},2000);
