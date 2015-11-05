// Your JS goes here
document.body.style.height = "100vh";
document.body.style.width = "100vw";
document.body.style.padding = "0";
document.body.style.margin = "0";
document.body.style.border = "1px solid black";

var hypno = document.createElement('img');
hypno.src = "http://sukhanov.net/images/hypnotoad.svg";
hypno.style.height = "200px";
hypno.style.width = "200px";
hypno.style.marginTop = "25%";
hypno.style.marginLeft = "50%";
hypno.style.top = "-100px";
hypno.style.left = "-100px";
hypno.style.position = "fixed";
// hypno.style.zIndex = '99';

var track = document.createElement('audio');
track.src = "trippy.mp3";
track.autoplay = "autoplay";

document.body.appendChild(hypno);
document.body.appendChild(track);


for (var i = 0; i < 36; i++) {

  var target = document.createElement('div');
  target.style.width = '11.1%';
  target.style.float = 'left';
  target.style.paddingBottom = '13%';
  target.style.margin = '0';

  var r = Math.floor(Math.random() * 256).toString();
  var g = Math.floor(Math.random() * 256).toString();
  var b = Math.floor(Math.random() * 256).toString();

  target.style.background = 'rgb('+ r +','+ g + ',' + b +' )';
  document.body.appendChild(target);
}

var div = document.getElementsByTagName('div');
console.log(div);



var interval;

function cycle() {
  interval = setInterval(changeColor, 100);
}

// var counter = 0;
var changeColor = function() {
  for (var i = 0; i < div.length; i++) {
    var target = div[i];
    var r = Math.floor(Math.random() * 256).toString();
    var g = Math.floor(Math.random() * 256).toString();
    var b = Math.floor(Math.random() * 256).toString();

    target.style.background = 'rgb('+ r +','+ g + ',' + b +' )';
  }
};

cycle();
