var body = document.getElementsByTagName('body')[0];
for (i = 0; i <= 89; i++) {
  var newDiv = document.createElement('div');
  var currentBlue = 0;
  body.appendChild(newDiv);
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';
  newDiv.style.backgroundColor = (i%2) ? "rgb(0,0,"+(i).toString()+")" : "rgb(100,0,"+(i).toString()+")";
}

document.getElementsByTagName('html')[0].style.height = '100%';
document.getElementsByTagName('html')[0].style.margin = '0';
body.style.height = '100%';
body.style.margin = '0';
