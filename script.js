// Your JS goes here

var bodyToAppend = document.getElementsByTagName('body')[0];
var newArr = [];

function createBoxes(){
  var newBlackBox = document.createElement('div');
  var newRedBox = document.createElement('div');
  newBlackBox.style.backgroundColor = '#000000';
  newBlackBox.style.width = '11.1%';
  newBlackBox.style.height = '11.1%';
  newBlackBox.style.float = 'left';
  newBlackBox.style.paddingBottom = '11.1%';
  newRedBox.style.backgroundColor = 'red';
  newRedBox.style.width = '11.1%';
  newRedBox.style.height = '11.1%';
  newRedBox.style.float = 'left';
  newRedBox.style.paddingBottom = '11.1%';
  bodyToAppend.appendChild(newBlackBox);
  bodyToAppend.appendChild(newRedBox);
}
for (var i = 0; i < 32; i++) {
  createBoxes();
}
