
for (var i = 0; i < 63; i++) {
var body  = document.querySelector('body');
var newDiv = document.createElement('div');

body.style.marginLeft = "-4px";
body.style.marginRight = "-4px";
body.style.marginTop = "-4px";
body.style.marginBottom = "-4px";

body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.float = "left";

body.style.backgroundImage = "linear-gradient(blue, orange)";

if (i%2 === 0) {
  newDiv.style.backgroundColor = "blue";
  newDiv.style.opacity = ".4";
  }
else {
  newDiv.style.backgroundColor = "green";
  newDiv.style.opacity = ".4";
  }
}
