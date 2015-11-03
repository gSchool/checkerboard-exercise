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
  div.style.backgroundColor =
    'rgb(' + [ran(), ran(), ran()].join(', ') + ')';
  body.appendChild(div);
}
