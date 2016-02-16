function randomColor () {
  var r = (Math.floor(Math.random() * 255));
  var g = (Math.floor(Math.random() * 255));
  var b = (Math.floor(Math.random() * 255));
  var randColor = 'rgba(' +r+ ', ' +  g + ', ' + b  + ', ' + (Math.random()) + ')';
  return randColor;
}

(function (){
  for (var i = 0; i < 81; i++) {
    var body = document.getElementsByTagName('body')[0];

    body.style.margin = "0";

    var square = document.createElement('div');

    square.style.display = "inline-block";
    square.style.width = "11.1%";
    square.style.float = "left";
    square.style.paddingBottom = "11.1%";
    square.style.backgroundColor = randomColor();

    body.appendChild(square);
  };
})();

setInterval(function() {
  for (var i = 0; i < 81; i++) {
    var newDiv = document.getElementsByTagName('div')[i];
    newDiv.style.backgroundColor = randomColor();
  };
}, 2000);
