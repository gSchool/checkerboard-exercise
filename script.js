// Your JS goes here
document.body.style.padding="0";
document.body.style.margin="0";


for(i=0;i<108;i++){
  var box = document.createElement('div');
  box.style.width = '11.1vw';
  box.style.padding = '0';
  box.style.margin = '0';
  box.style.height = '11.1vh';
  box.style.float = "left";

  if(i%2===0){
    box.style.backgroundColor = "black";
  } else {
    box.style.backgroundColor = "red";
  }
  document.body.appendChild(box);
}
