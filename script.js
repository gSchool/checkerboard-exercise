function checkerBoard() {
  for (var i = 0; i < 63; i++) {
    var checkBox = document.createElement('div');
    checkBox.style.width = '11.1%';
    checkBox.style.float = 'left';
    checkBox.style.paddingBottom = '11.1%';
    var colors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    checkBox.style.backgroundColor = colors;
    document.body.appendChild(checkBox);
  }
}
checkerBoard();
