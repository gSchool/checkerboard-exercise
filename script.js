
window.addEventListener('load', function(){


  setInterval(function(){



    function generateColors() {
      var letters = '0123456789ABCDEF'.split('');
      var hex = '#';

      for (var i = 0; i < 6; i++ ) {
        hex += letters[Math.floor(Math.random() * 16)];

      }
      return hex;
    }




    var body = document.body;

    body.style.margin = '0';

    while(body.hasChildNodes())
    body.removeChild(body.lastChild);

    var boxes = [];



    for(var i=0; i<=53; i++){

      var box = document.createElement('div');

      boxes.push(box);

      boxes[i].style.backgroundColor = generateColors();
      boxes[i].style.float = 'left';
      boxes[i].style.width = '11.1%';
      boxes[i].style.paddingBottom = '11.1%';

      body.appendChild(boxes[i]);
    }

  }, 2000);



});







