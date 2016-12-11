// Your JS goes here
function checker(){

  for (var i = 0; i < 81; i++) {
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.style.width = "11.1%";
    div.style.paddingBottom = "11.1%";
    div.style.float = 'left';

    if (i%2===0){
      div.className="black";
      div.style.backgroundColor = "black";
    }else{
      div.className="red";
      div.style.backgroundColor = "red";
    }
  }
}

checker();
