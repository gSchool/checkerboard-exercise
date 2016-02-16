
window.addEventListener('load', function(){

  var body = document.body;
  body.style.margin = '0';

  var bgDiv = document.createElement('div');

  bgDiv.style.width  = '100vw';
  bgDiv.style.height = '100vh';
  bgDiv.style.position = 'fixed';

  bgDiv.style.background = '-webkit-linear-gradient(top, rgba(0, 0, 255, 0.8), rgba(255, 255, 255, 0))';

  body.appendChild(bgDiv);

  var boxes = [];

  for(var i=0; i<=53; i++){

    var box1 = document.createElement('div');
    var box2 = document.createElement('div');

    box1.style.backgroundColor = 'seagreen';
    box2.style.backgroundColor = 'coral';

    boxes.push(box1, box2);

    boxes[i].style.float = 'left';
    boxes[i].style.width = '11.1%';
    boxes[i].style.paddingBottom = '11.1%';

    body.appendChild(boxes[i]);
  }

});







