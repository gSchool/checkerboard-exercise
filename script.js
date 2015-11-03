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
//Light Blue 65	185	250
//Purple 188	58	253
g

var body = document.getElementsByTagName('body')[0];
body.style.margin = "0px";
// body.appendChild(divRed);
// body.appendChild(divBlack);

var col = 9;
var row = 7;
var count = 1;
var r = 65;
var g = 185;
var b = 250;

var pr = 188;
var pg = 58;
var pb = 253;
var increment =10;
//Random Colors
for(var i=0; i < row; i++){
      for (var j = 0; j < col; j++) {
        if(j%2 ==0){
          prop(r,g,b,body);
        }
        else{
          prop(pr,pg,pb,body);
        }
      }
      r += -1*increment;
      g += increment;
      b += increment;
      pr += 5*increment;
      pg += increment;
      pb += increment;
      // body.appendChild(divRed);

}
