// Your JS goes here
document.addEventListener('DOMContentLoaded',function(){
  document.body.style.margin = '-8px';
  for(i = 0; i < 81; i ++){
    var div = document.createElement('div');
    addDivStyle(div);
    if(i%2 === 0){
      colorBlack(div);
    } else {
      colorRed(div);
    };
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
