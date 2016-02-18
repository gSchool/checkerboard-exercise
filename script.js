//Your JS goes here
var body = document.getElementsByTagName("body")[0];

  for (var i = 0; i < 63; i++){

    body.style.margin = "2px";

    var redSquares = document.createElement("div");
      redSquares.style.width = "11.1%";
      redSquares.style.paddingBottom = "11.1%";
      redSquares.style.cssFloat = "left";
      redSquares.style.backgroundColor = "red";

        body.appendChild(redSquares);

    var blackSquares = document.createElement("div");
      blackSquares.style.width = "11.1%";
      blackSquares.style.paddingBottom = "11.1%";
      blackSquares.style.cssFloat = "left";
      blackSquares.style.backgroundColor = "black";

        body.appendChild(blackSquares);


}



//var anotherDiv = document.createElement("div");
//body.appendChild(anotherDiv);
