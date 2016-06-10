

//PART TWO

for (var i = 0; i < 63; i++) {

var div = document.createElement("div");
div.style.width = "11.1%";
// div.style.color = backgroundColor();
div.style.float = "left";
div.style.paddingBottom = "11.1%";

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };
  div.style.backgroundColor = getRandomColor();
  div.style.color = getRandomColor();
  document.body.appendChild(div);
  }

  //PART ONE

//   for (var i = 0; i < 63; i++) {
//
// var div = document.createElement("div");
// div.style.width = "11.1%";
// div.style.background = "red";
// div.style.color = "white";
// div.style.float = "left";
// div.style.paddingBottom = "11.1%";
//
// document.body.appendChild(div);
//
// var div = document.createElement("div");
// div.style.width = "11.1%";
// div.style.background = "black";
// div.style.color = "white";
// div.style.float = "left";
// div.style.paddingBottom = "11.1%";
//
// document.body.appendChild(div);
//
//   if(i % 2 == 0) {
//   }
//   else {
//
//   }
// }
