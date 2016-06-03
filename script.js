// Your JS goes here
document.addEventListener('DOMContentLoaded',function(){
  document.body.style.margin = '-8px';
  for(i = 0; i < 81; i ++){
    var div = document.createElement('div');
    addDivStyle(div);
    colorRandom(div);
    document.body.appendChild(div);
  }
})

function addDivStyle(div){
  div.style.width = '11.1%';
  div.style.cssFloat = 'left';
  div.style.paddingBottom = '11.1%';
}

function colorBlack(div){
  div.style.backgroundColor = 'black';
}

function colorRed(div){
  div.style.backgroundColor = 'red';
}

function colorRandom(div){
  var hexaDec = makeHexaDec();
  div.style.backgroundColor = hexaDec;
}

function makeHexaDec(){
  var hexaDec = '#';
  for(i = 0; i < 6; i ++){
    var number = Math.floor(Math.random()*15);
    var choices = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var char = choices[number];
    hexaDec += char;
  }; return hexaDec;
}
