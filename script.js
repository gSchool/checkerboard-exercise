var squares = document.createElement('div');
document.body.appendChild(squares);

for(i=0; i<= 100; i++){
  if(i < 99){
    var square = document.body.appendChild(document.createElement("div"))
    square.style.paddingBottom = "11.1%";
    square.style.float = "left";
    square.style.width = "11.1%";
    if(i % 2 === 0){
      square.style.backgroundColor = "black"
    } else{
      square.style.backgroundColor = "red"
    }
    
    // document.body.appendChild(squares);
  }
}

// var x=8;
// var y=8;

// var chessBoard = document.getElementById("chessBoard");

// for (var i=0; i<y; i++){
//     var row = chessBoard.appendChild(document.createElement("div"));
//     for (var j=0; j<x; j++){
//         row.appendChild(document.createElement("span"));
//     }
// }

    // var squares = document.createElement('div');

    // document.getElementById('squares').appendChild(squares);



