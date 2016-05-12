// Your JS goes here
var containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
document.body.appendChild(containerDiv);

var blackBox = document.createElement('div');
blackBox.setAttribute('class', 'odd');
var redBox = document.createElement('div');
redBox.setAttribute('class', 'even');

function randomRGB () {
	var number = Math.floor(Math.random() * 255) + 1;
	return number;
}

function randomColor() {
  var r = randomRGB();
  var g = randomRGB();
  var b = randomRGB();
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var numberOfBoxes = document.querySelectorAll('.odd').length + document.querySelectorAll('.even').length;


//console.log(rgb);

	while (numberOfBoxes < 81) {
		var blackBoxClone = blackBox.cloneNode(true);
	  containerDiv.appendChild(blackBoxClone);
	  blackBoxClone.style.backgroundColor = randomColor();
	  numberOfBoxes += 1;
	  if (numberOfBoxes < 81) {
	    var redBoxClone = redBox.cloneNode(true);
	    containerDiv.appendChild(redBoxClone);
	    redBoxClone.style.backgroundColor = randomColor();
	    numberOfBoxes += 1;
	  }
	}
	setTimeout(function () { location.reload(1); }, 1000);

// ******* STYLES *******/////
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
