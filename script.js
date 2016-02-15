// checkerboard
for (var i = 0; i < 63; i++) {
  var body = document.querySelector('body');
  body.style.margin = '0px';

  var black = document.createElement('div');
  black.style.width = '11.1%';
  black.style.float = 'left';
  black.style.paddingBottom = '11.1%';
  black.style.backgroundColor = 'black';

  var red = document.createElement('div');
  red.style.width = '11.1%';
  red.style.float = 'left';
  red.style.paddingBottom = '11.1%';
  red.style.backgroundColor = 'red';

  if ( i % 2 === 0 ) {
    body.appendChild(black);
  } else { body.appendChild(red)}
}
