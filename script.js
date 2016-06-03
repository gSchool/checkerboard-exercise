var container = document.createElement('div');
container.style.width = '700px';
container.style.height = '700px';
document.body.appendChild(container);

setInterval(function() {
  container.innerHTML = '';
  for (var i = 0; i < 81; i++) {
  var checker = document.createElement('div');
  function randomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
  }
  var checkerColor = ('#' + randomColor());
  checker.style.backgroundColor = checkerColor;
  checker.style.float = 'left';
  checker.style.width = '11.1%';
  checker.style.height = '11.1%';
  container.appendChild(checker);
}
}, 2000);
