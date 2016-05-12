'use strict';

var body = document.body;
for (var i = 0; i < 81; i++){
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
  // Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
  newDiv.style.width = "11.1%";
  newDiv.style.cssFloat = "left";
  newDiv.style.paddingBottom = "11.1%";
  if (i % 2 == 0) {
    newDiv.style.backgroundColor = "black";
  }
  else {
    newDiv.style.backgroundColor = "red";
  }
}
