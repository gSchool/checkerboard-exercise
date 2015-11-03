document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
var check = 0;
var colors1 = ['#B7FF6E','#ADFF5B','#A3FF47','#99FF33','#89FF14','#7AF400','#6AD400','#5BB500','#4B9600'];
var colors2 = ['#B76EFF','#AD5BFF','#A347FF','#9933FF','#8914FF','#7A00F4','#6A00D4','#5B00B5','#4B0096'];
function addChecker(n,row){
  while(n>0) {
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.style.width = '11.1%';
    newDiv.style.float = 'left';
    newDiv.style.paddingBottom = '11.1%';
    if (check === 0) {
      newDiv.style.backgroundColor = colors1[row];
      check = 1;
    } else {
      newDiv.style.backgroundColor = colors2[row];
      check = 0;
    }
    n--;
  }
}
for (i=0;i<9;i++){
  addChecker(9, i);
}
