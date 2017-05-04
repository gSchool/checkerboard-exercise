const jQ = document.createElement("script");

jQ.addEventListener("load", JQCode);
jQ.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.querySelector("head").appendChild(jQ);

function JQCode() {

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      let $tileElement = $('<div class="tile"></div>');
      $tileElement.css('width', '11.1%');
      $tileElement.css('float', 'left');
      $tileElement.css('paddingBottom', '11.1%');
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          $tileElement.css('background', 'salmon');
        } else {
        $tileElement.css('background', 'rebeccapurple');
        }
      } else if(i % 2 !== 0){
        if (j % 2 === 0) {
          $tileElement.css('background', 'rebeccapurple');
        } else {
        $tileElement.css('background', 'salmon');
        }
      }
      $tileElement.css('margin', 'auto');
      $('body').append($tileElement);
    }
  }
}
