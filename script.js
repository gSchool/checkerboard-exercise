// Your JS goes here
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < 81; i++) {
  var newDiv = document.createElement('div');
  newDiv.style.width = '11.1%';
  newDiv.style.cssFloat = 'left';
  newDiv.style.paddingBottom = '11.1%';
  function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    newDiv.style.backgroundColor = getRandomColor();
    body.appendChild(newDiv);
}
