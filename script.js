
for (var i = 0; i < 81; i++) {
  var tile1 = document.createElement('div');
    tile1.style.backgroundColor = getRandomColor();
    tile1.style.width = '11.1%';
    tile1.style.float = 'left';
    tile1.style.paddingBottom = '11.1%';
    document.body.appendChild(tile1);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
