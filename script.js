// Your JS goes here
  var bodyTarget = document.getElementsByTagName("body")[0];
  window.addEventListener("load", checkerBoard);

function checkerBoard(){

  for (var i = 0; i <= 8; i ++){
    for (var k = 0; k <= 8; k ++){
      if ((i%2 != 0 || k%2 == 0) && (i%2 == 0 || k%2 !=0)){
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = "black";
        newDiv.style.width = "11.1%";
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.float = "left";
      }else {
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = "red";
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.width = "11.1%";
        newDiv.style.float = "left";


      }
    }
  }
}
