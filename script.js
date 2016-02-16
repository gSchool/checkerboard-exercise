for ( var i = 0; i < 81; i++ ) {

 var body = document.getElementsByTagName('body')[0];

  body.style.margin= "0";

  var square = document.createElement('div');

  square.style.width = "11.1%";
  square.style.float = "left";
  square.style.paddingBottom = "11.1%";
  body.style.background = 'linear-gradient(to bottom right, red, green)';

  if( i % 2 == 0 ) {
    square.style.backgroundColor = '';
  } else {
    square.style.background = 'blue';
  }
  body.appendChild(square);
};
