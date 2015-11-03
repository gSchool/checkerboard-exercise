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

//random color checkerboard
// for(var i = 0; i < 81; i++){
//   var divCreate = document.createElement('div');
//   console.log(divCreate);
//   var R = Math.floor(Math.random()*360);
//   var G = Math.floor(Math.random()*360);
//   var B = Math.floor(Math.random()*360);
//   if(i%2){
//     divCreate.style.backgroundColor = 'rgb('+R+','+G+','+B+')'
//   }else{divCreate.style.backgroundColor = 'rgb('+R+','+G+','+B+')'}
//   divCreate.style.width = '11.1%';
//   divCreate.style.cssFloat = 'left'
//   divCreate.style.paddingBottom = '11.1%'
//   document.body.appendChild(divCreate);
// }

var r1 = 25;
var g1 = 0;
var b1 = 255;
var r2 = 0;
var g2 = 25;
var b2 = 255;
for(var i = 0; i < 81; i++){
  var divCreate = document.createElement('div');
  console.log(divCreate);
  if(i%2){
    divCreate.style.backgroundColor = 'rgb('+r1+','+g1+','+b1+')';
    r1 += 5;
  }else{divCreate.style.backgroundColor = 'rgb('+r2+','+g2+','+b2+')'
    g2 += 5;
  }
  divCreate.style.width = '11.1%';
  divCreate.style.cssFloat = 'left'
  divCreate.style.paddingBottom = '11.1%'
  document.body.appendChild(divCreate);
}
