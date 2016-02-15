// flashingColors
for (var i = 0; i < 63; i++) {
  var body = document.querySelector('body');
  body.style.margin = '0px';

  var randomColor = 'rgb(' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ')';
  var changeColorTimer = setInterval(changeColor, 1000);
  function changeColor () {
    square.style.backgroundColor = randomColor;
  }

  var square = document.createElement('div');
  square.style.width = '11.1%';
  square.style.float = 'left';
  square.style.paddingBottom = '11.1%';
  square.style.backgroundColor = randomColor;

  body.appendChild(square);
}
