var divContainer = document.createElement('div');

function colorPicker (){
  var stri = 'ABCDEFGHIJKLMN'.split('') ;
  var color = '#';
  for (var i=0; i<6; i++){
    color += stri[Math.floor(Math.random()*6)];
  }
  return color;
};


colorFlasher();


function colorFlasher (){
  document.getElementsByTagName('body')[0].innerHTML = ""
  for(var i = 0;i<63;i++){
    var divColor = document.createElement('div');
    divColor.style.backgroundColor= colorPicker();
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';
    document.getElementsByTagName('body')[0].appendChild(divColor);
  }
}
setInterval(colorFlasher, 2000);
