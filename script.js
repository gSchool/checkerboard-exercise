// // Your JS goes here
// var divRed = document.createElement("div");
// divRed.style.backgroundColor = "red";
// divRed.style.width = "11.1%";
// divRed.style.height = "100px";
// divRed.style.display = "inline-block";
// divRed.style.float = "left";
//
//  var divBlack = document.createElement("div");
// divBlack.style.backgroundColor = "black";
// divBlack.style.width = "11.1%";
// divBlack.style.height = "100px";
// divBlack.style.display = "inline-block";
// divBlack.style.float = "left";

prop = function(r,g,b,body){
  var N = document.createElement("div");
  N.style.width = "11.1%";
  N.style.height = "100px";
  N.style.display = "inline-block";
  N.style.float = "left";
  N.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  body.appendChild(N);
}

g

var body = document.getElementsByTagName('body')[0];
body.style.margin = "0px";
// body.appendChild(divRed);
// body.appendChild(divBlack);

var col = 9;
var row = 7;
var count = 1;
//Random Colors
for(var i=0; i < row*col; i++){
      var r = Math.floor(Math.random()*256);
      console.log(r);
      var g = Math.floor(Math.random()*256);
      console.log(g);
      var b = Math.floor(Math.random()*256);
      console.log(b);
      prop(r,g,b,body);
      // body.appendChild(divRed);

}
