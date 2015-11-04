document.body.onload = checkerboard;

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (j = 0; j < 6; j++){
    color = color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function checkerboard (){
  board = document.createElement('div');
  document.body.appendChild(board);
  board.style.width = '700px';
  board.style.height = '700px';
  // board.style.position = 'relative';

  for (i = 0; i < 64; i++){
    checker = document.createElement('div');
    board.appendChild(checker);
      checker.style.width = '12.5%';
      checker.style.height = '12.5%';
      checker.style.backgroundColor = getRandomColor();
      checker.style.float = 'left';
    }


};


// Your JS goes here
