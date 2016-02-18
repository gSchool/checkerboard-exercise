// Your JS goes here


//Not My Work.

setInterval(function() {
  var body = document.querySelector('body');

  while (body.hasChildNodes())
  // may your child, be a masculine child - godfather
  body.removeChild(body.lastChild);

  for (var i = 0; i < 72; i++) {
    body.style.margin = '0px';

    var randomColor = 'rgb(' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ', ' + Math.floor(Math.random() * (255)) + ')';

    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.backgroundColor = randomColor;

    body.appendChild(square);
  }

}, 1000);
