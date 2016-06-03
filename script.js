// Your JS goes here
var bodyToAppend = document.getElementsByTagName('body')[0];
var newArr = [];

function createBoxes(){
  for (var i = 0; i < 80; i++) {
    var newBox = [];
    newBox[i] = document.createElement('div');
    newBox[i].style.width = '11.1%';
    newBox[i].style.height = '11.1%';
    newBox[i].style.float = 'left';
    newBox[i].style.paddingBottom = '11.1%';
    if(i%2 === 0){
      console.log('work');
      newBox[i].style.backgroundColor = '#000000';
    }else {
      newBox[i].style.backgroundColor ='red';
    }
    bodyToAppend.appendChild(newBox[i]);
  }
  // var newBlackBox = document.createElement('div');
  // var newRedBox = document.createElement('div');

}

createBoxes();
