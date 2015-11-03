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
  div.style.backgroundColor = (i % 2 === 0) ? 'blue' : 'red';
  div.style.opacity = '0.5';
  body.appendChild(div);
}
body.style.backgroundImage = 'linear-gradient(to top, #55c6ee, #f90067)';
