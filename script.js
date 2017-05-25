// Your JS goes here
var getBody = document.getElementsByTagName("body");

function createBlackDiv() {
  var createBlackDiv = document.createElement("div");
  document.body.appendChild(createBlackDiv)
  createBlackDiv.style.paddingBottom = "11.1%"
  createBlackDiv.style.width = "11.1%"
  createBlackDiv.style.background = "linear-gradient(rgba(255,0,0,0),rgba(255,123,0,1))";
  createBlackDiv.style.float = "left"

}

function createRedDiv() {
  var createRedDiv = document.createElement("div");
  document.body.appendChild(createRedDiv)
  createRedDiv.style.paddingBottom = "11.1%"
  createRedDiv.style.width = "11.1%"
  createRedDiv.style.background = "linear-gradient(rgba(0,123,255,0.5),rgba(255,255,0,1))";
  createRedDiv.style.float = "left"
}

for (let x = 0; x < 81; x++) {
  if (x % 2 == 0) {
    createBlackDiv();
  } else {
    createRedDiv();
  }
}
