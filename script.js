// Your JS goes here

for (var i = 0; i < 63; i++) {
  var body = document.querySelector('body');
  body.style.marginLeft= "-5px";
  body.style.marginRight= "-5px";
  body.style.marginTop= "-5px";

  var black = document.createElement('div');
  black.style.width = "11.1%";
  black.style.float = "left";
  black.style.paddingBottom = "11.1%";
  black.style.backgroundColor = "rgb(0, 0, 0)";

  var red = document.createElement('div');
  red.style.width = "11.1%";
  red.style.float = "left";
  red.style.paddingBottom = "11.1%";
  red.style.backgroundColor = "rgb(200, 35, 35)";

  if(i % 2 == 0) {
  body.appendChild(black);
  } else {
    body.appendChild(red);
  }
};
