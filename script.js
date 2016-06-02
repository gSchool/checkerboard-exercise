// Your JS goes here
document.addEventListener("DOMContentLoaded",function(){
  var theBody          = document.getElementsByTagName('body')[0];
  theBody.style.height = "100vh";
  theBody.style.width  = "100vh";
  for (var i = 0; i <= 62; i++) {
    var checker          = document.createElement('div');
    checker.style.height = "11.1%";
    checker.style.width  = "11.1%";
    checker.style.float  = "left";
    if(i % 2 === 0) {
      checker.style.backgroundColor = "black";
      theBody.appendChild(checker)
    } else {
      checker.style.backgroundColor = "red";
      theBody.appendChild(checker)
    }
  }

})
