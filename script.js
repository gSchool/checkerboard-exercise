// Your JS goes here
for (var x = 0; x < 7; x++) {
  
  for (var i = 0; i < 9; i++) {

    var body = document.querySelector('body');
    body.style.marginLeft= "-5px";
    body.style.marginRight= "-5px";
    body.style.marginTop= "-5px";

    var blue = document.createElement('div');
    blue.style.width = "11.1%";
    blue.style.float = "left";
    blue.style.paddingBottom = "11.1%";
    blue.style.backgroundColor = "rgb(1, 7, 54)";

    var pink = document.createElement('div');
    pink.style.width = "11.1%";
    pink.style.float = "left";
    pink.style.paddingBottom = "11.1%";
    pink.style.backgroundColor = "rgb(70, 4, 59)";


    if(i % 2 == 0) {
    body.appendChild(blue);
    } else {
      body.appendChild(pink);
    }
  }

}
