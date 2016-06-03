var bodyToAppend = document.getElementsByTagName('body')[0];
var bodyDivBackground = document.createElement('div');

bodyDivBackground.style.padding = '0';
bodyDivBackground.style.margin ='0';
bodyDivBackground.style.background= "-webkit-linear-gradient(bottom, rgba(255,255,255,0),#3CC9FA)";
bodyDivBackground.style.position ='absolute';
bodyDivBackground.style.zIndex ='+1';
bodyDivBackground.style.height = '100vh';
bodyDivBackground.style.width ='100vw';
bodyToAppend.appendChild(bodyDivBackground);
function createBoxes(){
  for (var i = 0; i < 80; i++) {
    var newBox = [];
    newBox[i] = document.createElement('div');
    newBox[i].style.width = '11.1%';
    newBox[i].style.height = '11.1%';
    newBox[i].style.float = 'left';
    newBox[i].style.position = 'relative';
    // newBox[i].style.display = 'inline-block';
    newBox[i].style.left = 'auto';
    newBox[i].style.paddingBottom = '11.1%';
    if(i%2 === 0){
      newBox[i].style.backgroundColor = '#C32CF7';
    }else {
      newBox[i].style.backgroundColor = '#3CC9FA';
    }
    bodyToAppend.appendChild(newBox[i]);
  }
}
createBoxes();
