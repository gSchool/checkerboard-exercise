var interval =  setInterval(function(){
var body  = document.querySelector('body');
for (var i = 0; i < 2000; i++) {
var newDiv = document.createElement('div');

body.style.marginLeft = "-4px";
body.style.marginRight = "-4px";
body.style.marginTop = "-4px";
body.style.marginBottom = "-4px";

body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.float = "left";

if (i%2 === 0) {
  newDiv.style.backgroundColor = "black";
  }
else {
  newDiv.style.backgroundColor = "red";
    }
  }
}, 1000);

clearInterval(interval);

// function flasher (n) {
//   var iteration = 0;
//
//    var interval = setInterval(function () {
//     if (iteration >= 63) {
//
//     }
//
//     console.log("Another one!");
//     iteration++;
//   }, 500);
// }
