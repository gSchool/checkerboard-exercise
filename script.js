// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 81; i++) {
  var newDiv = document.createElement('div');
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';
  body.appendChild(newDiv);
  body.style.backgroundImage = "linear-gradient(blue, purple)";
  if (i%2 === 0) {
  newDiv.style.backgroundColor = "blue";
  newDiv.style.opacity = ".4";
  }
  else {
  newDiv.style.backgroundColor = "green";
  newDiv.style.opacity = ".4";
  }
}
