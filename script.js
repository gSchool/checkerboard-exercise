 function timedColors (){
divContainer = document.createElement('div');

function colorPicker (){
  var stri = 'ABCDEFGHIJKLMN'.split('') ;
  var color = '#';
  for (var i=0; i<6; i++){
    color += stri[Math.floor(Math.random()*6)];
  }
  return color;
};

var interval = window.setInterval(colorPicker, 2000);
// var myInterval = setInterval(function(){ colorPicker()}, 2000);

for(var i=0;i<81;i++){

    var divColor = document.createElement('div');
    divColor.style.backgroundColor= colorPicker();
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';

    document.getElementsByTagName('body')[0].appendChild(divColor);
    // clearInterval(myInterval);
  }
  divContainer.appendChild.divColor;
}
setInterval(timedColors, 2000);
