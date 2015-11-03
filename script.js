var square;

for(var i = 0; i < 81 ; i ++){
  square  = document.createElement('div');
  square.style.width = "11.1%";
  square.style.float = "left"
  square.style.margin = "0";
  square.style.paddingBottom = "11.1%";
  if(i % 2 === 0){
    square.style.backgroundColor = "black";
  }else{
    square.style.backgroundColor = "red";
  }
  var body = document.getElementsByTagName('body')[0];
  body.style.margin = "0"
  document.body.appendChild(square);
}
