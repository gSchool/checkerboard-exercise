function checkerBoard() {
  for (var i = 0; i < 63; i++) {
    var checkBox = document.createElement('div');

    checkBox.style.width = '11.1%';
    checkBox.style.float = 'left';
    checkBox.style.paddingBottom = '11.1%';
    if (i % 2 === 0 && i < 9) {
      checkBox.style.backgroundColor = 'rgb(0,0,100)';
    } else if (i % 2 === 0 && i > 8 && i < 18) {
      checkBox.style.backgroundColor = 'rgb(0,0,124)';
    } else if (i % 2 === 0 && i > 17 && i < 27){
      checkBox.style.backgroundColor = 'rgb(0,0,148)';
    } else if (i % 2 === 0 && i > 26 && i < 36){
      checkBox.style.backgroundColor = 'rgb(0,0,172)';
    } else if (i % 2 === 0 && i > 35 && i < 45){
      checkBox.style.backgroundColor = 'rgb(0,0,196)';
    } else if (i % 2 === 0 && i > 44 && i < 54){
      checkBox.style.backgroundColor = 'rgb(0,0,220)';
    } else if (i % 2 === 0 && i > 52 && i < 63){
      checkBox.style.backgroundColor = 'rgb(0,0,244)';
    } else if (i % 2 !== 0 && i < 9) {
      checkBox.style.backgroundColor = 'rgb(50,0,100)';
    } else if (i % 2 !== 0 && i > 8 && i < 18) {
      checkBox.style.backgroundColor = 'rgb(62,0,124)';
    } else if (i % 2 !== 0 && i > 17 && i < 27) {
      checkBox.style.backgroundColor = 'rgb(74,0,148)';
    } else if (i % 2 !== 0 && i > 26 && i < 36) {
      checkBox.style.backgroundColor = 'rgb(86,0,172)';
    } else if (i % 2 !== 0 && i > 35 && i < 45) {
      checkBox.style.backgroundColor = 'rgb(98,0,196)';
    } else if (i % 2 !== 0 && i > 44 && i < 54) {
      checkBox.style.backgroundColor = 'rgb(110,0,220)';
    } else {
      checkBox.style.backgroundColor = 'rgb(122,0,244)';
    }
    document.body.appendChild(checkBox);
  }
}
checkerBoard();
