

'use strict';
var red= 40;
var blue= 120;
var green;
function gradient(i){
      if (i % 2 === 0) {
          red += 3;
          green = 50;
      } else {
          green = 150;
      }
      return "rgb(" + red + "," + green + "," + blue + ")";
  }




function checkerboard() {
    for (var i = 0; i < 63; i++) {
        if (i % 2 === 0) {
            var div1 = document.createElement('div');
            document.body.appendChild(div1);
            div1.style.backgroundColor = gradient(i);
            div1.style.width = '11.1%';
            div1.style.paddingBottom = `11.1%`;
            div1.style.float = 'left';

          }

            else {
                var div2 = document.createElement('div');
                document.body.appendChild(div2);
                div2.style.backgroundColor = gradient();
                div2.style.width = '11.1%';
                div2.style.paddingBottom = `11.1%`;
                div2.style.float = 'left';

              }

            }
          }


checkerboard();
