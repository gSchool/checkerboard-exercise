// Your JS goes here
// Set the random colors
var randDegree = Math.floor((Math.random() * 364));

function getRandColor() {
  return "rgb(" + Math.floor((Math.random() * 255)) +
  "," + Math.floor((Math.random() * 255)) +
  "," + Math.floor((Math.random() * 255)) +
  ")";
};

function GetRedSquare(){
  var redSquare = document.createElement('div');
  redSquare.style.width = '11.1%';
  redSquare.style.paddingBottom = '11.1%';
  redSquare.style.float = 'left';

  setInterval(function(){
    redSquare.style.backgroundColor = getRandColor();
  }, 2000);

  return redSquare;
}

function GetBlackSquare(){
  var blackSquare = document.createElement('div');
  blackSquare.style.width = '11.1%';
  blackSquare.style.paddingBottom = '11.1%';
  blackSquare.style.float = 'left';

  setInterval(function(){
    blackSquare.style.backgroundColor = getRandColor();
  }, 2000);

  return blackSquare;
}

function GetRow(isEvenRow){
  var newRow = document.createElement('div');

  if (isEvenRow) {
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
  } else {
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
    newRow.appendChild(GetBlackSquare());
    newRow.appendChild(GetRedSquare());
  }
  return newRow;
}

var mainBody = document.getElementsByTagName('body')[0];

// loop through each row
for (var i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    mainBody.appendChild( GetRow(true) );
  } else {
    mainBody.appendChild( GetRow(false) );
  }
}
