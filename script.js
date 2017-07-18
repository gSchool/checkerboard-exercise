// // Your JS goes here
// var newDiv = document.createElement("div");
// newDiv.style.backgroundColor = "black";
// newDiv.style.width = "11.1%";
// newDiv.style.float = "left";
// newDiv.style.paddingBottom = "11.1%";
// document.getElementsByTagName("body")[0].appendChild(newDiv);
//
// var newDiv = document.createElement("div");
// newDiv.style.backgroundColor = "red";
// newDiv.style.width = "11.1%";
// newDiv.style.float = "left";
// newDiv.style.paddingBottom = "11.1%";
// document.getElementsByTagName("body")[0].appendChild(newDiv);
//
// var newDiv = document.createElement("div");
// newDiv.style.backgroundColor = "black";
// newDiv.style.width = "11.1%";
// newDiv.style.float = "left";
// newDiv.style.paddingBottom = "11.1%";
// document.getElementsByTagName("body")[0].appendChild(newDiv);

for (var i = 0; i < 41; i++) {
  if (i === 40) {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
  } else {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);

    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "red";
    newDiv.style.width = "11.1%";
    newDiv.style.float = "left";
    newDiv.style.paddingBottom = "11.1%";
    document.getElementsByTagName("body")[0].appendChild(newDiv);
  }
}
