// Your JS goes here
var containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
document.body.appendChild(containerDiv);

var blackBox = document.createElement('div');
blackBox.setAttribute('class', 'odd');
var redBox = document.createElement('div');
redBox.setAttribute('class', 'even');

// function randomRGB () {
// 	var number = Math.floor(Math.random() * 255) + 1;
// 	return number;
// }
//
// function randomColor() {
//   var r = randomRGB();
//   var g = randomRGB();
//   var b = randomRGB();
//   return 'rgb(' + r + ',' + g + ',' + b + ')';
// }


var numberOfBoxes = document.querySelectorAll('.odd').length + document.querySelectorAll('.even').length;

//blackBox rgb variables
var rOdd = 255;
var gOdd = 255;
var bOdd = 100;

//evenBox variables
var rEven = 255;
var gEven = 100;
var bEven = 255;

//console.log(rgb);

while (numberOfBoxes < 81) {
	var blackBoxClone = blackBox.cloneNode(true);
  containerDiv.appendChild(blackBoxClone);
	var rgbOdd = 'rgb(' + rOdd + ',' + gOdd + ',' + bOdd + ')';
  blackBoxClone.style.backgroundColor = rgbOdd;
	rOdd -= 3;
	gOdd -= 3
	console.log(rOdd + "," + gOdd);
  numberOfBoxes += 1;
  if (numberOfBoxes < 81) {
    var redBoxClone = redBox.cloneNode(true);
    containerDiv.appendChild(redBoxClone);
		var rgbEven = 'rgb(' + rEven + ',' + gEven + ',' + bEven + ')';
    redBoxClone.style.backgroundColor = rgbEven;
		rEven -= 3
		gEven -= 3;
		console.log(rEven + "," + gEven);
    numberOfBoxes += 1;
  }
}

// ******* STYLES ******* //
var containerDivs = document.querySelectorAll('.container');
for (var i = 0; i < containerDivs.length; i++) {
  containerDivs[i].style.width = "100%";
  containerDivs[i].style.float = "left";
}

var blackBoxes = document.querySelectorAll('.odd');
for (var i = 0; i < blackBoxes.length; i++) {
  blackBoxes[i].style.paddingBottom = "11.1%";
  blackBoxes[i].style.width = "11.1%";
  blackBoxes[i].style.float = "left";
}

var redBoxes = document.querySelectorAll('.even');
for (var i = 0; i < redBoxes.length; i++) {
  redBoxes[i].style.paddingBottom = "11.1%";
  redBoxes[i].style.width = "11.1%";
  redBoxes[i].style.float = "left";
}
