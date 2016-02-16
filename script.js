
window.addEventListener('load', function(){

  var body = document.body;
  body.style.margin = '0';

  var boxes = [];


  for(var i=0; i<=53; i++){

    var box1 = document.createElement('div');
    var box2 = document.createElement('div');

    box1.style.backgroundColor = 'red';
    box2.style.backgroundColor = 'black';

    boxes.push(box1, box2);

    boxes[i].style.float = 'left';
    boxes[i].style.width = '11.1%';
    boxes[i].style.paddingBottom = '11.1%';

    body.appendChild(boxes[i]);
  }


});







