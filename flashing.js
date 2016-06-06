


var flashing = document.getElementsByTagName('div')


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color
      }

setInterval(function(){
    for (var i = 0; i < flashing.length; i++) {
        flashing[i].style.backgroundColor = getRandomColor();
        }
      }, 100);


for (var i = 0; i < 72; i++){
  var div = document.createElement('div');
  div.style.backgroundColor = getRandomColor();
  div.style.width = '11.1%'
  div.style.float = 'left'
  div.style.paddingBottom = '11.1%'
  body.appendChild(div);
}
