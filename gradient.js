

'use strict';
function gradient(){
var diffRed = 158 - 0;
var diffGreen = 225 - 208;
var diffBlue = 103 - 0;

diffRed = (diffRed * 70% + 158);
diffGreen = (diffGreen * 10% + 225);
diffBlue = (diffBlue * 50% + 103);
return "rgb(" + diffRed+ "," +diffGreen + "," + diffBlue + ")";
}



function checkerboard() {
    for (var i = 0; i < 63; i++) {
        if (i % 2 === 0) {
            var div1 = document.createElement('div');
            document.body.appendChild(div1);
            div1.style.backgroundColor = gradient();
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
