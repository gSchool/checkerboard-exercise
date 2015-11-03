// Your JS goes here
document.body.style.padding="0";
document.body.style.margin="0";
document.body.style.width="100vw";
document.body.style.height="100vh";


for(i=0;i<108;i++){
  var box = document.createElement('div');
  box.style.width = '11.1%';
  box.style.padding = '0';
  box.style.margin = '0';
  box.style.height = '11.1%';
  box.style.float = "left";

  if(i%2===0){
    box.style.backgroundColor = "black";
  } else {
    box.style.backgroundColor = "red";
  }
  document.body.appendChild(box);
}
