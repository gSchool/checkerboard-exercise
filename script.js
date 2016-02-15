// Your JS goes here

for (var i = 0; i < 63; i++) {

  var body = document.querySelector('body');
  body.style.marginLeft= "-5px";
  body.style.marginRight= "-5px";
  body.style.marginTop= "-5px";

  var blue = document.createElement('div');
  blue.style.width = "11.1%";
  blue.style.float = "left";
  blue.style.paddingBottom = "11.1%";
  blue.style.backgroundColor = "rgb(1, 13, 66)";

  var pink = document.createElement('div');
  pink.style.width = "11.1%";
  pink.style.float = "left";
  pink.style.paddingBottom = "11.1%";
  pink.style.backgroundColor = "rgb(85, 0, 67)";

  if(i % 2 == 0) {
  body.appendChild(blue);
  } else {
    body.appendChild(pink);
  }

};

var interval = setInterval(function () {

}, 200);



function whatIsTheKeyToSusccess (n) {
  var iteration = 0;

   var interval = setInterval(function () {
    if (iteration >= n) {
      console.log('I\'m DJ Khaled, THE BEST');
      return clearInterval(interval);
    }

    console.log("Another one!");
    iteration++;
  }, 500);
}
whatIsTheKeyToSusccess(3);
