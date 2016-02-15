// Your JS goes here
setInterval ( function () {
  var body = document.querySelector('body');
  body.style.marginLeft= "-5px";
  body.style.marginRight= "-5px";
  body.style.marginTop= "-5px";

  while(body.hasChildNodes() === true)
  body.removeChild(body.lastChild);

  for (var i = 0; i < 63; i++) {
    var randomColors = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';

    var square = document.createElement('div');
    square.style.width = "11.1%";
    square.style.float = "left";
    square.style.paddingBottom = "11.1%";
    square.style.backgroundColor = randomColors;

    body.appendChild(square);
  }

}, 1000);


var audio = new Audio ('audioChoro.mp3');
audio.play();
body.appendChild(audio);
