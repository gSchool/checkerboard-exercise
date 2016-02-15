var body = document.querySelector('body');
var div = [];
var check = 0;

body.style.width = ' 1000px ';
body.style.height = ' 500px ';

for (var i = 0; i < 63; i++) {
  div[i] = document.createElement('div');
  document.body.appendChild(div[i]);
  if( check ){
    div[i].style.backgroundColor = 'red';
    check = false;
  }else{
    div[i].style.backgroundColor = 'black';
    check = true;
  }
  div[i].style.float = 'left'
  div[i].style.width = '11.1%';
  div[i].style.height = '100px';
  div[i].style.position = 'relative';

}
