// Your JS goes here
var containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
document.body.appendChild(containerDiv);

var oddBox = document.createElement('div');
oddBox.setAttribute('class', 'odd');
var evenBox = document.createElement('div');
evenBox.setAttribute('class', 'even');

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

//oddBox rgb variables
var rOdd = 100;
var gOdd = 113;
var bOdd = 180;

//evenBox variables
var rEven = 255;
var gEven = 100;
var bEven = 255;

//console.log(rgb);

while (numberOfBoxes < 81) {
	var oddBoxClone = oddBox.cloneNode(true);
  containerDiv.appendChild(oddBoxClone);
	var rgbOdd = 'rgb(' + rOdd + ',' + gOdd + ',' + bOdd + ')';
  oddBoxClone.style.backgroundColor = rgbOdd;
	rOdd -= 3;
	gOdd -= 3
	console.log(rOdd + "," + gOdd);
  numberOfBoxes += 1;
  if (numberOfBoxes < 81) {
    var evenBoxClone = evenBox.cloneNode(true);
    containerDiv.appendChild(evenBoxClone);
		var rgbEven = 'rgb(' + rEven + ',' + gEven + ',' + bEven + ')';
    evenBoxClone.style.backgroundColor = rgbEven;
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

var oddBoxes = document.querySelectorAll('.odd');
for (var i = 0; i < oddBoxes.length; i++) {
  oddBoxes[i].style.paddingBottom = "11.1%";
  oddBoxes[i].style.width = "11.1%";
  oddBoxes[i].style.float = "left";
}

var evenBoxes = document.querySelectorAll('.even');
for (var i = 0; i < evenBoxes.length; i++) {
  evenBoxes[i].style.paddingBottom = "11.1%";
  evenBoxes[i].style.width = "11.1%";
  evenBoxes[i].style.float = "left";
}
