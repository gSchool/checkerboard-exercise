// Your JS goes here

  for (var i = 0; i < 63; i++) {

    var body = document.querySelector('body');

    body.style.marginLeft= "-5px";
    body.style.marginRight= "-5px";
    body.style.marginTop= "-5px";
    body.style.backgroundImage = "linear-gradient(rgb(36, 23, 82), rgb(248, 250, 174))";


    var blue = document.createElement('div');
    blue.style.width = "11.1%";
    blue.style.float = "left";
    blue.style.paddingBottom = "11.1%";
    blue.style.backgroundColor = "rgba(6, 4, 70, 0.4)";

    var pink = document.createElement('div');
    pink.style.width = "11.1%";
    pink.style.float = "left";
    pink.style.paddingBottom = "11.1%";
    pink.style.backgroundColor = "rgba(93, 3, 8, 0.4)";

  if( i % 2 == 0) body.appendChild(blue);
  else body.appendChild(pink);

  };
