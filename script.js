// Your JS goes here
// multicolored:
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 63; i++) {
  let div = document.createElement('div');
  let red = (Math.floor(Math.random() * 256)).toString();
  let green = (Math.floor(Math.random() * 256)).toString();
  let blue = (Math.floor(Math.random() * 256)).toString();
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  body.appendChild(div);
}
function flash() {
  for (var i = 0; i < body.children.length; i++) {
    let red = (Math.floor(Math.random() * 256)).toString();
    let green = (Math.floor(Math.random() * 256)).toString();
    let blue = (Math.floor(Math.random() * 256)).toString();
    body.children[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  }
}

setInterval(flash, 2000);
