// Your JS goes here
var body = document.getElementsByTagName('body')[0];
//
//black and red
var sheet1 = document.createElement('style')
sheet1.innerHTML = "* {margin: 0;padding: 0;}";
body.appendChild(sheet1);
var sheet = document.createElement('style')
// sheet.innerHTML = "white";
body.appendChild(sheet);
//
//
// for (var i = 0; i < 81; i++) {
//   if(i % 2 == 0){
//
//     var divi = document.createElement('div');
//     divi.style.backgroundColor = "black";
//     divi.style.float = "left";
//     divi.style.width = "11.1%";
//     divi.style.paddingBottom = "11.1%";
//     body.appendChild(divi)
//   }else{
//     var divi2 = document.createElement('div');
//     divi2.style.backgroundColor = "red";
//     divi2.style.float = "left";
//     divi2.style.width = "11.1%";
//     divi2.style.paddingBottom = "11.1%";
//     body.appendChild(divi2);
//   }
// }

// randomColors***
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (var i = 0; i < 81; i++) {
  var divi = document.createElement('div');
  divi.style.backgroundColor = getRandomColor();
  divi.style.float = "left";
  divi.style.width = "11.1%";
  divi.style.paddingBottom = "11.1%";
  body.appendChild(divi)

}

// //gradient***
//
// var c = divi;
// var ctx = c.getContext("2d");
// var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
// my_gradient.addColorStop(0, "black");
// my_gradient.addColorStop(1, "white");
// ctx.fillStyle = my_gradient;
// ctx.fillRect(20, 20, 150, 100);
//
// for (var i = 0; i < 41; i++) {
//
//
//   var divi = document.createElement('div');
//   divi.style.backgroundColor = "green";
//   divi.style.float = "left";
//   divi.style.width = "11.1%";
//   divi.style.paddingBottom = "11.1%";
//   body.appendChild(divi)
//
//
// "<br>"
//   var divi2 = document.createElement('div');
//   divi2.style.backgroundColor = "blue";
//   divi2.style.float = "left";
//   divi2.style.width = "11.1%";
//   divi2.style.paddingBottom = "11.1%";
//   body.appendChild(divi2);
// }
