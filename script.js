// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
// 9x9 array dimensions

var body = document.getElementsByTagName('body')[0];

for (var x=0; x<81; x++){
  var div = document.createElement('div');
  div.style.width = '11.1%';
  div.style.height = div.style.width;
  div.style.paddingBottom = '11.1%';
  div.style.float = "left";
  div.style.backgroundColor = x%2 === 1 ? 'red' : 'black';
  body.appendChild(div);
}
