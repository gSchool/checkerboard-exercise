

  // for (var i = 0; i < 63; i++) {
  //   var tile=document.createElement('div');
  //   tile.style.width = '11.1%'
  //   tile.style.float = 'left'
  //   tile.style.paddingBottom = '11.1%'
  //   document.body.appendChild(tile);
  //
  // (i%2 === 0 ? tile.style.backgroundColor = 'red': tile.style.backgroundColor = 'black');
  //   }



//     for (var i = 0; i < 63; i++) {
//       var tile=document.createElement('div');
//       tile.style.width = '11.1%'
//       tile.style.float = 'left'
//       tile.style.paddingBottom = '11.1%'
//       tile.style.backgroundColor =getRandomColor()
//       document.body.appendChild(tile);
//       }
//
//       function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

var body = document.getElementsByTagName('body')[0];
body.style.background = "linear-gradient(135deg, red, blue)";
for (var i = 1; i <= 63; i++) {
  let div = document.createElement('div');
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  if (i % 2 === 0) {
    div.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
  } else {
    div.style.backgroundColor = "rgba(13, 133, 199, " + (.02 * i) + ")";
  }
  body.appendChild(div);
}
