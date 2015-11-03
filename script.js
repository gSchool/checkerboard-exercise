// created the checkerboard
for(var i = 0; i < 81; i++){
  var divCreate = document.createElement('div');
  console.log(divCreate);
  if(i%2){
    divCreate.style.backgroundColor = 'red';
  }else{divCreate.style.backgroundColor = 'black';}
  divCreate.style.width = '11.1%';
  divCreate.style.cssFloat = 'left'
  divCreate.style.paddingBottom = '11.1%'
  document.body.appendChild(divCreate);
}
