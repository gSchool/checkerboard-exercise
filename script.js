// Your JS goes here
document.addEventListener("DOMContentLoaded",function(){
  var theBody          = document.getElementsByTagName('body')[0];
  theBody.style.height = "100vh";
  theBody.style.width  = "100vh";

function checkers(){(function timer(){
  theBody.innerHTML = "";
  for (var i = 0; i <= 62; i++) {
    var checker          = document.createElement('div');
    checker.style.height = "11.1%";
    checker.style.width  = "11.1%";
    checker.style.float  = "left";
    var r = Math.floor(Math.random()*255).toString()
    var g = Math.floor(Math.random()*255).toString()
    var b = Math.floor(Math.random()*255).toString()
    checker.style.backgroundColor = `rgb(${r},${g},${b})`
    theBody.appendChild(checker)
  }

    setTimeout(timer,2000);
})()}
checkers();


})
