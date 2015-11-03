// created the checkerboard
// for(var i = 0; i < 81; i++){
//   var divCreate = document.createElement('div');
//   console.log(divCreate);
//   if(i%2){
//     divCreate.style.backgroundColor = 'red';
//   }else{divCreate.style.backgroundColor = 'black';}
//   divCreate.style.width = '11.1%';
//   divCreate.style.cssFloat = 'left'
//   divCreate.style.paddingBottom = '11.1%'
//   document.body.appendChild(divCreate);
// }

for(var i = 0; i < 81; i++){
  var divCreate = document.createElement('div');
  console.log(divCreate);
  var R = Math.floor(Math.random()*360);
  var G = Math.floor(Math.random()*360);
  var B = Math.floor(Math.random()*360);
  if(i%2){
    divCreate.style.backgroundColor = 'rgb('+R+','+G+','+B+')'
  }else{divCreate.style.backgroundColor = 'rgb('+R+','+G+','+B+')'}
  divCreate.style.width = '11.1%';
  divCreate.style.cssFloat = 'left'
  divCreate.style.paddingBottom = '11.1%'
  document.body.appendChild(divCreate);
}
