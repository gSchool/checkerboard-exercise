var addToBody = document.getElementsByTagName('body')[0];
addToBody.style.height = "100vh";
addToBody.style.width = "100vh";

var randomNumber1 = Math.floor(Math.random()*256);
var randomNumber2 = Math.floor(Math.random()*256);
var randomNumber3 = Math.floor(Math.random()*256);
var colorId = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
var colorId2 = `rgb(${randomNumber3}, ${randomNumber2}, ${randomNumber1})`;

for (var i = 0; i <= 62; i++) {
  var box = document.createElement('div');
  box.style.width = "11.1%";
  box.style.float = "left";
  box.style.paddingBottom = "11.1%";
  box.style.opacity = i*.016;
  (i % 2 === 0) ? box.style.backgroundColor = colorId : box.style.backgroundColor = colorId2;
  addToBody.appendChild(box);
};
