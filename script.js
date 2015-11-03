// Your JS goes here
function ran() {
  return Math.floor(Math.random() * 256);
}

var body = document.getElementsByTagName('body')[0];
body.style.margin = '0';
for (var i = 0; i < 9 * 7; i ++)
{
  var div = document.createElement('div');
  div.style.width = div.style.paddingBottom = '11.1%';
  div.style.float = 'left';
  div.id = 'div' + i;
  body.appendChild(div);
}
var audio = document.createElement('audio');
var source = document.createElement('source');
source.src = 'sound/trippy.mp3';
audio.appendChild(source);
audio.autoplay = 'autoplay';
body.appendChild(audio);

(function changeColors() {
  for (var i = 0; i < 9 * 7; i ++) {
    var div = document.getElementById('div' + i);
    div.style.backgroundColor = 'rgb(' + [ran(), ran(), ran()].join(', ') + ')';
  }
  setTimeout(changeColors, 2000);
})();
