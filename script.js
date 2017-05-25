// Your JS goes here
var getBody = document.getElementsByTagName("body")

function createRandomColor() {
  let createRandomColorDiv = document.createElement("div");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  createRandomColorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  document.body.appendChild(createRandomColorDiv)
  createRandomColorDiv.style.paddingBottom = "11.1%"
  createRandomColorDiv.style.width = "11.1%"
  createRandomColorDiv.style.float = "left"
}

for (let x = 0; x < 81; x++) {
  if (x % 2 == 0) {
    createRandomColor();
  } else {
    createRandomColor();
  }
}
