const jQ = document.createElement("script");

jQ.addEventListener("load", JQCode);
jQ.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.querySelector("head").appendChild(jQ);

function JQCode() {

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      let $tileElement = $('<div class="tile"></div>');
      let baseColor = '#' + Math.floor(Math.random() * 12323232).toString(16);
      $tileElement.css('width', '11.1%');
      $tileElement.css('float', 'left');
      $tileElement.css('paddingBottom', '11.1%');
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          $tileElement.css('background', 'rgb(15,50,' + (60 + i*j) + ')');
        } else {
          $tileElement.css('background', 'rgb(15,60,' + (60 + i*j) + ')');
        }
      } else if(i % 2 !== 0){
        if (j % 2 === 0) {
          $tileElement.css('background', 'rgb(15,60,' + (60 + i*j) + ')');
        } else {
          $tileElement.css('background', 'rgb(15,50,' + (60 + i*j) + ')');
        }
      }
      $tileElement.css('margin', 'auto');
      $('body').append($tileElement);
    }
  }
  // Vanilla JS
  let boxes = document.getElementsByClassName('tile');

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', changeColor);
    boxes[i].addEventListener('click', changeAgain);
  }

  function changeColor(){
    this.style.background = 'lime';
  }

  function changeAgain(){
    this.style.background = 'orange';
  }

}
