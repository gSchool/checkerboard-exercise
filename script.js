var bodyToAppend = document.getElementsByTagName('body')[0];
var audio = new Audio('audio/03-the-riders-of-rohan.mp3');
audio.play();

bodyToAppend.style.margin ='0px';
bodyToAppend.style.padding ='0px';
createBoxes();
setInterval(function () {
  bodyToAppend.innerHTML = '';
  createBoxes();
}, 2000);

function createBoxes(){
  for (var i = 0; i < 80; i++) {
    var newBox = [];
    newBox[i] = document.createElement('div');
    newBox[i].style.width = '11.1%';
    newBox[i].style.height = '11.1%';
    newBox[i].style.float = 'left';
    newBox[i].style.paddingBottom = '11.1%';
    if(i%2 === 0){
      newBox[i].style.backgroundColor = randomColor();
    }else {
      newBox[i].style.backgroundColor = randomColor();
    }
    bodyToAppend.appendChild(newBox[i]);
  }
}

function randomColor() {
    var colorLetter = '0123456789ABCDEF'.split('');
    var colorTotal = '#';
    for (var i = 0; i < 6; i++ ) {
        colorTotal += colorLetter[Math.floor(Math.random() * 16)];
    }
    return colorTotal;
}
