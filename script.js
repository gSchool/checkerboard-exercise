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

  var hex = '#';
  for(k=0;k<6;k++){
  hex += Math.floor(Math.random()*10);
}
  box.style.backgroundColor = hex;

  document.body.appendChild(box);
}
