var body = document.getElementsByTagName('body')[0];
for (i = 0; i <= 197; i++) {
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';
  newDiv.style.backgroundColor = (i%2) ? 'black' : 'red';
}

document.getElementsByTagName('html')[0].style.height = '100%';
document.getElementsByTagName('html')[0].style.margin = '0';
body.style.height = '100%';
body.style.margin = '0';
