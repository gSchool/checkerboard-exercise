//I know my code makes a checker board and I know my function makes a random color so I need to know how to connect them

'use strict';
function getcolor() {
var color = "#";
for (var k = 0; k < 3; k++) {
  color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
}
return color;
}

function checkerboard() {
    for (var i = 0; i < 63; i++) {
        if (i % 2 === 0) {
            var div1 = document.createElement('div');
            document.body.appendChild(div1);
            div1.style.backgroundColor = getcolor();
            div1.style.width = '11.1%';
            div1.style.paddingBottom = `11.1%`;
            div1.style.float = 'left';
          }

            else {
                var div2 = document.createElement('div');
                document.body.appendChild(div2);
                div2.style.backgroundColor =getcolor();
                div2.style.width = '11.1%';
                div2.style.paddingBottom = `11.1%`;
                div2.style.float = 'left';

              }

            }
          }


window.onload = checkerboard();
