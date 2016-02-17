// Your JS goes here
var body = document.getElementsByTagName('body')[0];
var container = document.createElement('div');
body.insertBefore(container, body.firstChild);

for (i = 0; i < 99; i++) {
  var div1 = document.createElement('div');
  container.appendChild(div1);
  div1.style.background = 'rgb(' + (99-i) + ',' + (i*4) +', 255)';
  div1.style.width = '11.1%';
  div1.style.float = 'left';
  div1.style.padding = '0 0 11.1% 0';
  var div2 = document.createElement('div');
  container.appendChild(div2);
  div2.style.background = 'rgb(' + (99+(i*3)) + ', 0, 255)';
  div2.style.width = '11.1%';
  div2.style.float = 'left';
  div2.style.padding = '0 0 11.1% 0';
}
