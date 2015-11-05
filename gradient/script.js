
document.body.onload = checkerboard;

function checkerboard (){
  board = document.createElement('div');
  document.body.appendChild(board);
  board.style.width = '700px';
  board.style.height = '700px';
  board.style.position = 'relative';

  var flip = true;

  for (i = 0; i < 64; i++){
    checker = document.createElement('div');
    board.appendChild(checker);
      checker.style.width = '12.5%';
      checker.style.height = '12.5%';
      if (i % 8 == 0){
        flip = !flip;
      }
        if (flip){
          if (i % 2 == 0){
          checker.style.backgroundColor = 'hsla(' + 40 + i + ' , 90%, 80%, 0.8)';
        } else {
          checker.style.backgroundColor = 'hsla(262, 15%, ' + i + '%, 0.8)';
        }
      } else {
        if (i % 2 == 0){
          checker.style.backgroundColor = 'hsla(262, 15%, ' + i + '%, 0.8)';
        } else {
          checker.style.backgroundColor = 'hsla(' + 40 + i + ' , 90%, 80%, 0.8)';
        }
      }
        checker.style.float = 'left';
    };

}



// Your JS goes here
