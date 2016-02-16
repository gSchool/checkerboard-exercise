// Your JS goes here
  var bodyTarget = document.getElementsByTagName("body")[0];
  window.addEventListener("load", checkerBoard);

function checkerBoard(){



  for (var i = 0; i <= 8; i ++){
    function getColor1 (){
      var color = "rgb(75, 0, "+ 20 * i +")"
      return color;
    }

    function getColor2 (){
        var color = "rgb(30, 144, "+ 20 * i +")"
        return color;
      }

    for (var k = 0; k <= 8; k ++){


      if ((i%2 != 0 || k%2 == 0) && (i%2 == 0 || k%2 !=0)){
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = getColor1();
        newDiv.style.width = "11.1%";
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.float = "left";
      }else {
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = getColor2();
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.width = "11.1%";
        newDiv.style.float = "left";


      }
    }
  }
}
