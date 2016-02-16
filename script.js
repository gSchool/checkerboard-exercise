for ( var i = 0; i < 81; i++ ) {

  var body = document.getElementsByTagName('body')[0];

  body.style.margin= "0";

  var square = document.createElement('div');
  var randoColor = 'rgba(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ' ,' + (Math.random()) + ')';

  square.style.width = "11.1%";
  square.style.float = "left";
  square.style.paddingBottom = "11.1%";
  square.style.backgroundColor = randoColor;

  body.appendChild(square);

};
