// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%

var container = document.createElement('div');
container.style.width = '700px';
container.style.height = '700px';
document.body.appendChild(container);

for (var i = 0; i < 81; i++) {
  if(i % 2 === 0) {
  var checker = document.createElement('div');
  checker.style.backgroundColor = "black";
  checker.style.float = 'left';
  checker.style.width = '11.1%';
  checker.style.height = '11.1%';
  container.appendChild(checker);
} else {
  var checker = document.createElement('div');
  checker.style.backgroundColor = "red";
  checker.style.float = 'left';
  checker.style.width = '11.1%';
  checker.style.height = '11.1%';
  container.appendChild(checker);
}
}
