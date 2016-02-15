var squares = document.createElement('div');
document.body.appendChild(squares);
var randomColors = ["#61FF4C","#00FF00","#84007C","#B9AF12","#1500F5","#58E869","#F30053","#FB0006"]

for(i=0; i<= 100; i++){
  var randomColor = randomColors[Math.floor(Math.random() * 8)];
  var square = document.body.appendChild(document.createElement("div"))
  square.style.paddingBottom = "11.1%";
  square.style.float = "left";
  square.style.width = "11.1%";
  square.style.backgroundColor = randomColor;
  document.body.appendChild(squares);
}
//     if(i % 2 === 0){
//       square.style.backgroundColor = "black"
//     } else{
//       square.style.backgroundColor = "red"
//     }


// ASK IN CLASS -- - - - - -   "#"+((1<<24)*Math.random()|0).toString(16);