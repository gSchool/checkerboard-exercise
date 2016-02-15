// Your JS goes here

  for (var i = 0; i < 63; i++) {

    var body = document.querySelector('body');

    body.style.marginLeft= "-5px";
    body.style.marginRight= "-5px";
    body.style.marginTop= "-5px";

    var counter = 0;
    var blueGra = "rgba(1, 7, 54, " + " ." + counter + ")";
    var pinkGra = "rgb(70, 4, 59, " + " ." + counter + ")";

    var blue = document.createElement('div');
    blue.style.width = "11.1%";
    blue.style.float = "left";
    blue.style.paddingBottom = "11.1%";
    blue.style.backgroundColor = blueGra;

    var pink = document.createElement('div');
    pink.style.width = "11.1%";
    pink.style.float = "left";
    pink.style.paddingBottom = "11.1%";
    pink.style.backgroundColor = pinkGra;

    if (i < counter) {
      counter++;
      if(i % 2 == 0) body.appendChild(blue);
      else body.appendChild(pink);
    }
    
  };
