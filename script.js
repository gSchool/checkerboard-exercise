document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
function randomHex(){
  var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var color = '#'
  while(color.length < 7)
    color += hex[Math.floor(Math.random() * 16)];
  return color;
}
function addChecker(n){
  while(n>0) {
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.width = '11.1%';
    newDiv.style.float = 'left';
    newDiv.style.paddingBottom = '11.1%';
    newDiv.style.backgroundColor = randomHex();
    n--;
  }
}

addChecker(100);
