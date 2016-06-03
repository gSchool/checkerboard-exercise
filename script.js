// Your JS goes here
document.addEventListener('DOMContentLoaded',function(){
  document.body.style.margin = '-8px';
  for(var i = 0; i < 81; i++){
    var div = document.createElement('div');
    addDivStyle(div);
    div.style.backgroundColor = makeHexaDec();
    document.body.appendChild(div);
  }
  var intervalID = window.setInterval(function(){
    var number = Math.floor(Math.random()*80);
    for(var i = 1; i < 82 ; i++){
      var div = document.body.children[i];
      div.style.backgroundColor = makeHexaDec();
    }
  },2000);
})

function addDivStyle(div){
  div.style.width = '11.1%';
  div.style.cssFloat = 'left';
  div.style.paddingBottom = '11.1%';
}

function makeHexaDec(){
  var hexaDec = '#';
  for(var i = 0; i < 6; i++){
    var number = Math.floor(Math.random()*15);
    var choices = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var char = choices[number];
    hexaDec += char;
  }
  return hexaDec;
}
