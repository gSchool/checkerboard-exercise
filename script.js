// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var container = document.createElement('section');
body.insertBefore(container, body.firstChild);

for (i = 0; i < 99; i++) {
  var div1 = document.createElement('div');
  container.appendChild(div1);
  div1.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  div1.style.width = '11.1%';
  div1.style.float = 'left';
  div1.style.padding = '0 0 11.1% 0';
  var div2 = document.createElement('div');
  container.appendChild(div2);
  div2.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  div2.style.width = '11.1%';
  div2.style.float = 'left';
  div2.style.padding = '0 0 11.1% 0';
}

function flashing() {
    for (i = 0; i < 198; i++) {
      var x = document.getElementsByTagName('div')[i];
      x.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    }
}

setInterval(flashing, 2000)
