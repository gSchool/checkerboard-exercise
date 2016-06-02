var addToBody = document.getElementsByTagName('body')[0];
addToBody.style.height = "100vh";
addToBody.style.width = "100vh";

for (var i = 0; i <= 62; i++) {
  var randomNumber1 = Math.floor(Math.random()*256);
  var randomNumber2 = Math.floor(Math.random()*256);
  var randomNumber3 = Math.floor(Math.random()*256);
  var box = document.createElement('div');
  var colorId = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  box.style.width = "11.1%";
  box.style.float = "left";
  box.style.paddingBottom = "11.1%";
  box.style.backgroundColor = colorId;
  addToBody.appendChild(box);
};
