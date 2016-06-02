var addToBody = document.getElementsByTagName('body')[0];
addToBody.style.height = "100vh";
addToBody.style.width = "100vh";

for (var i = 0; i <= 62; i++) {
  var box = document.createElement('div');
  box.style.width = "11.1%";
  box.style.float = "left";
  box.style.paddingBottom = "11.1%";
  (i % 2 === 0) ? box.style.backgroundColor = "black" : box.style.backgroundColor = "red";
  addToBody.appendChild(box);
};
