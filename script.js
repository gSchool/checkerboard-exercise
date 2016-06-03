var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 63; i++) {
  var div = document.createElement('div');
  div.style.float = 'left';
  div.style.width = '11.1%';
  div.style.paddingBottom = '11.1%';
  if (i % 2 === 0) {
    div.style.background = 'linear-gradient(135deg, red, blue)';
  } else {
    div.style.background = 'linear-gradient(135deg, orange, purple)';
  }
  body.appendChild(div);
}

// flashing random colors
// var id=setInterval(flash,2000)
// function flash() {
//   // var el=document.getElementsByTagName("body")[0].innerHTML;
//   var el="";
//   for (var i = 1; i < 65; i++) {
//     var randomColor = "#";
//     for (var j = 0; j < 3; j++) {
//       randomColor += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
//     }
//     el += `<div style="width: 11.2%; float:left; padding-bottom: 11.2%; background-color: ${randomColor}"></div>`;
//   }
//   document.getElementsByTagName("body")[0].innerHTML = el;
// }
