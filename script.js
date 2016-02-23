// Your JS goes here
//gradient:
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
