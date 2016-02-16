function checkerBoard() {
  for (var i = 0; i < 63; i++) {
    var checkBox = document.createElement('div');
    checkBox.style.width = '11.1%';
    checkBox.style.float = 'left';
    checkBox.style.paddingBottom = '11.1%';
    if (i % 2 === 0) {
      checkBox.style.backgroundColor = 'black';
    } else {
      checkBox.style.backgroundColor = 'red';
    }
    document.body.appendChild(checkBox);
  }
}
checkerBoard();
