var container = document.createElement('div');
container.style.width = '700px';
container.style.height = '700px';
document.body.appendChild(container);


  for (var i =10; i < 91; i++) {
    if(i%2 === 0) {
      var checker = document.createElement('div');
        var color = '#9900';
        color += i;
        checker.style.backgroundColor = color;
        checker.style.float = 'left';
        checker.style.width = '11.1%';
        checker.style.height = '11.1%';
        container.appendChild(checker);
} else {
  var checker = document.createElement('div');
  var color2 = '#0099';
  color2 += i;
  checker.style.backgroundColor = color2;
  checker.style.float = 'left';
  checker.style.width = '11.1%';
  checker.style.height = '11.1%';
  container.appendChild(checker);
  }
}
