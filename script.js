// Your JS goes here

var body = document.querySelector('body');
body.style.marginLeft= "-5px";
body.style.marginRight= "-5px";
body.style.marginTop= "-5px";

for (var i = 0; i < 63; i++) {

function changeColor() {
  var interval = setInterval(change, 1000);
}

function change () {
  blue.style.backgroundColor = randomColors;
}

  var randomColors = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';

  var blue = document.createElement('div');
  blue.style.width = "11.1%";
  blue.style.float = "left";
  blue.style.paddingBottom = "11.1%";
  blue.style.backgroundColor = changeColor;

  body.appendChild(blue);

};

var audio = new Audio ('audioChoro.mp3');
audio.play();
body.appendChild(audio);
