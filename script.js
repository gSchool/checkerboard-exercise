// Your JS goes here
document.addEventListener("DOMContentLoaded",function(){
  var theBody          = document.getElementsByTagName('body')[0];
  theBody.style.height = "100vh";
  theBody.style.width  = "100vh";
  var num    = 0
  var green  = "rgb(0, 153, 0)"
  var red    = "rgb(204, 0, 0)"
  for (var i = 0; i <= 62; i++) {
    var checker          = document.createElement('div');
    checker.style.height = "11.1%";
    checker.style.width  = "11.1%";
    checker.style.float  = "left";


    if (i%2===0) {
      checker.style.backgroundColor = green;
    } else {
      checker.style.backgroundColor = red;
    }
    if (i % 9 === 0){

      num += 28;
      green  = `rgb(0, 153, ${num.toString()})`
      red = `rgb(204, 0, ${num.toString()})`

    }
    theBody.appendChild(checker)
  }
  // background-image:
  //  linear-gradient(
  //    red, #f06d06
  //  );
  // for (var i = 0; i <= 62; i++) {
  //   var checker          = document.createElement('div');
  //   checker.style.height = "11.1%";
  //   checker.style.width  = "11.1%";
  //   checker.style.float  = "left";
  //   var r = Math.floor(Math.random()*255).toString()
  //   var g = Math.floor(Math.random()*255).toString()
  //   var b = Math.floor(Math.random()*255).toString()
  //   checker.style.backgroundColor = `rgb(${r},${g},${b})`
  //   theBody.appendChild(checker)
  // }
})
