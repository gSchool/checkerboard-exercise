// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

for (var i = 0; i < 81; i++) {
  var block = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  document.body.append(block);
  block.style.width = '11.1%';
  block.style.paddingBottom = '11.1%';
  block.display = 'float';
  block.style.float = 'left';

  if (i % 2 === 0) {
    block.style.backgroundColor = 'Black';
  } else {
    block.style.backgroundColor = 'Red';
  }
}
