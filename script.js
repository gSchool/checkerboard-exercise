var bodyToAppend = document.getElementsByTagName('body')[0];
var newArr = [];
bodyToAppend.style.padding = '0';
bodyToAppend.style.margin = '0';
function createBoxes(){
  for (var i = 0; i < 80; i++) {
    var newBox = [];
    newBox[i] = document.createElement('div');
    newBox[i].style.width = '11.1%';
    newBox[i].style.height = '11.1%';
    newBox[i].style.float = 'left';
    newBox[i].style.paddingBottom = '11.1%';
    if(i%2 === 0){
      newBox[i].style.backgroundColor = '#000000';
    }else {
      newBox[i].style.backgroundColor ='red';
    }
    bodyToAppend.appendChild(newBox[i]);
  }
}
createBoxes();
