var body = document.getElementsByTagName('body')[0];
for (i = 0; i <= 197; i++) {
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';
  newDiv.style.backgroundColor = (function randomColor() {
      var letterString = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letterString[Math.floor(Math.random() * 16)];
      }
      return color;
  })();
}

document.getElementsByTagName('html')[0].style.height = '100%';
document.getElementsByTagName('html')[0].style.margin = '0';
body.style.height = '100%';
body.style.margin = '0';
