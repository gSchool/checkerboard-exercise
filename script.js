// Your JS goes here

for (var i = 0; i < 63; i++) {

  var intervalBlue = setInterval(function () {
  var randomColors = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  return blue.style.backgroundColor = randomColors;
}, 2000);

  var intervalPink = setInterval(function () {
  var randomColors = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
  return pink.style.backgroundColor = randomColors;
}, 2000);

  var body = document.querySelector('body');
  body.style.marginLeft= "-5px";
  body.style.marginRight= "-5px";
  body.style.marginTop= "-5px";

  var blue = document.createElement('div');
  blue.style.width = "11.1%";
  blue.style.float = "left";
  blue.style.paddingBottom = "11.1%";
  blue.style.backgroundColor = intervalBlue;

  var pink = document.createElement('div');
  pink.style.width = "11.1%";
  pink.style.float = "left";
  pink.style.paddingBottom = "11.1%";
  pink.style.backgroundColor = intervalPink;

  if(i % 2 == 0) {
  body.appendChild(blue);
  } else {
    body.appendChild(pink);
  }

};
