var interval =  setInterval(function(){
var body  = document.querySelector('body');

for (var i = 0; i < 63; i++) {
var iteration = 0;
var newDiv = document.createElement('div');

body.style.marginLeft = "-4px";
body.style.marginRight = "-4px";
body.style.marginTop = "-4px";
body.style.marginBottom = "-4px";

body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.float = "left";

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
newDiv.style.backgroundColor = getRandomColor();

if (iteration >= 63) {
     return clearInterval(interval);
   }
  }

  iteration++;
}, 1000);
