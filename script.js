// Your JS goes here
var body = document.getElementsByTagName('body')[0];
for (i = 0; i < 99; i++) {
  var div1 = document.createElement('div');
  body.insertBefore(div1, body.firstChild);
  div1.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  div1.style.width = '11.1%';
  div1.style.float = 'left';
  div1.style.padding = '0 0 11.1% 0';
  var div2 = document.createElement('div');
  body.insertBefore(div2, body.firstChild);
  div2.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
  div2.style.width = '11.1%';
  div2.style.float = 'left';
  div2.style.padding = '0 0 11.1% 0';
}
