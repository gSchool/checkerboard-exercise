document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
var check = 0;
function addChecker(n){
  while(n>0) {
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.width = '11.1%';
    newDiv.style.float = 'left';
    newDiv.style.paddingBottom = '11.1%';
    if (check === 0) {
      newDiv.style.backgroundColor = 'red';
      check = 1;
    } else {
      newDiv.style.backgroundColor = 'black';
      check = 0;
    }
    n--;
  }
}

addChecker(100);
