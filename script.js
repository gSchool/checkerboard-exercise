// gradient
for (var i = 0; i < 63; i++) {
  var body = document.querySelector('body');
  body.style.margin = '0px';

  var counter = 0;
  var squareEvenGradient = 'rgba (102, 207, 222, ' + '.' + counter + ')';
  var squareOddGradient = 'rgba (231, 83, 225, ' + '.' + counter + ')';

  var squareEven = document.createElement('div');
  squareEven.style.width = '11.1%';
  squareEven.style.float = 'left';
  squareEven.style.paddingBottom = '11.1%';
  squareEven.style.backgroundColor = squareEvenGradient;

  var squareOdd = document.createElement('div');
  squareOdd.style.width = '11.1%';
  squareOdd.style.float = 'left';
  squareOdd.style.paddingBottom = '11.1%';
  squareOdd.style.backgroundColor = squareOddGradient;

  if ( i < counter ) {
    counter++;
    if ( i % 2 === 0) {
      body.appendChild(squareEven);
    } else {body.appendChild(squareOdd)};
  }
}
