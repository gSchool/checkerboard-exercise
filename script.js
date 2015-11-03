// Your JS goes here
var body = document.getElementsByTagName('body')[0];
body.style.margin = '0';
for (var i = 0; i < 9 * 7; i ++)
{
  var div = document.createElement('div');
  div.style.width = div.style.paddingBottom = '11.1%';
  div.style.float = 'left';
  div.style.backgroundColor = i % 2 === 0 ? 'black' : 'red';
  body.appendChild(div);
}
