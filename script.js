var percent = '45';

document.addEventListener('DOMContentLoaded',function(){
  document.body.style.margin = '-8px';
  for(var i = 0; i < 81; i++){
    var colorA = 'hsl(201,100%,'+percent+'%)';
    var colorB = 'hsl(153,100%,'+percent+'%)';
    if(i>0 && i%9===0){
      percent = makeLighter(percent);
    }
    var div = document.createElement('div');
    addDivStyle(div);
    if(i%2===0){
      div.style.backgroundColor = colorA;
    } else{
      div.style.backgroundColor = colorB;
    }
    document.body.appendChild(div);
  }
})

function makeLighter(percent){
  percent = (parseInt(percent)+5).toString();
  return percent;
}

function addDivStyle(div){
  div.style.width = '11.1%';
  div.style.cssFloat = 'left';
  div.style.paddingBottom = '11.1%';
}
