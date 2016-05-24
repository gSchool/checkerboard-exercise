// Your JS goes here


for(var x = 0; x < 63; x++){
  var div = document.createElement("div");
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  if(x % 2 === 0){
    div.style.backgroundColor = "red";
  }else{
    div.style.backgroundColor = "black";
  }
  document.body.appendChild(div);
}
