// Your JS goes here
  var bodyTarget = document.getElementsByTagName("body")[0];
  window.addEventListener("load", checkerBoard);

function checkerBoard(){
 window.setInterval (function(){

  function randomizer() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

  document.body.innerHTML="";
    for (var i = 0; i <= 8; i ++){

      for (var k = 0; k <= 8; k ++){
        if ((i%2 != 0 || k%2 == 0) && (i%2 == 0 || k%2 !=0)){
          var newDiv = document.createElement("div");
          bodyTarget.appendChild(newDiv);
          newDiv.style.backgroundColor = randomizer();
          newDiv.style.width = "11.1%";
          newDiv.style.paddingBottom = "11.1%"
          newDiv.style.float = "left";
        }else {
          var newDiv = document.createElement("div");
          bodyTarget.appendChild(newDiv);
          newDiv.style.backgroundColor = randomizer();
          newDiv.style.paddingBottom = "11.1%"
          newDiv.style.width = "11.1%";
          newDiv.style.float = "left";
          }
      }
    }
  }, 2000);
}
