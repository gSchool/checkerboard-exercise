function createTile(color) {
  var div = document.createElement("div");
  div.style.width = '11.1%';
  div.style.float = 'left';
  div.style.paddingBottom = '11.1%';
  div.style.background = color;
  return div;
}


for (let i = 0; i < 63; i++) {
  if (i % 2 === 0) {
    document.body.appendChild(createTile('black'));
  } else {
    document.body.appendChild(createTile('red'));
  }
}
