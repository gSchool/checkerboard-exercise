var square;
function randomRGB(){
  return Math.floor(Math.random() * 255);
}
var randomColor = "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
console.log(randomColor);

//Solution for the black and red checkerboard
// for(var i = 0; i < 81 ; i ++){
//   square  = document.createElement('div');
//   square.style.width = "11.1%";
//   square.style.float = "left"
//   square.style.margin = "0";
//   square.style.paddingBottom = "11.1%";
//   if(i % 2 === 0){
//     square.style.backgroundColor = "black";
//   }else{
//     square.style.backgroundColor = "red";
//   }
//   var body = document.getElementsByTagName('body')[0];
//   body.style.margin = "0"
//   document.body.appendChild(square);
// }


Solution for the random color checkerboard
for(var i = 0; i < 81 ; i ++){
  square  = document.createElement('div');
  square.style.width = "11.1%";
  square.style.float = "left"
  square.style.margin = "0";
  square.style.paddingBottom = "11.1%";
  square.style.backgroundColor = "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
  var body = document.getElementsByTagName('body')[0];
  body.style.margin = "0"
  document.body.appendChild(square);
}
