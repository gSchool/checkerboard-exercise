var body  = document.querySelector('body');
for (var i = 0; i < 2000; i++) {
var newDiv = document.createElement('div');

body.style.marginLeft = "-4px";
body.style.marginRight = "-4px";
body.style.marginTop = "-4px";
body.style.marginBottom = "-4px";

body.appendChild(newDiv);

newDiv.style.width = "11.1%";
newDiv.style.paddingBottom = "11.1%";
newDiv.style.float = "left";

if (i%2 === 0) {
  newDiv.style.backgroundColor = "blue";
  }
else {
  newDiv.style.backgroundColor = "green";
  }
  
if (i>=9) {
  newDiv.style.opacity = ".1";
  }
else {
  newDiv.style.backgroundColor = "green";
  }
}




//
// var newImg = document.createElement("img");
// newImg.src = "http://placekitten.com/345/543";
// var newH1 = document.createElement("h1");
// var newP = document.createElement("p");
//
// var body = document.getElementsByTagName("body")[0];
// body.appendChild(newImg);
// body.appendChild(newH1);
// body.appendChild(newP);
//
// newH1.innerText = "Cats have invaded";
// newImg.src = "http://placekitten.com/444/567";
// newP.innerText = "We're here to take over!";
