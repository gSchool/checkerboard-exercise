// gradient

var bg = document.createElement('div');
bg.style.width = '100vw';
bg.style.height = '100vh';
bg.style.position = 'fixed';
bg.style.background = '-webkit-linear-gradient(top, rgba(16, 28, 136, .7), rgba(16, 28, 136, 0))';

var body = document.querySelector('body');
body.style.margin = '0px';

body.appendChild(bg);

for (var i = 0; i < 63; i++) {
  var squareEven = document.createElement('div');
  squareEven.style.width = '11.1%';
  squareEven.style.float = 'left';
  squareEven.style.paddingBottom = '11.1%';
  squareEven.style.backgroundColor = 'rgb(60, 199, 218)';

  var squareOdd = document.createElement('div');
  squareOdd.style.width = '11.1%';
  squareOdd.style.float = 'left';
  squareOdd.style.paddingBottom = '11.1%';
  squareOdd.style.backgroundColor = 'rgb(217, 35, 177)';

  if ( i % 2 === 0) {
    body.appendChild(squareEven);
  } else {body.appendChild(squareOdd)};
}
