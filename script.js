// Your JS goes here


var body = document.getElementsByTagName("body")[0];
var containerDiv = document.createElement("div");
containerDiv.setAttribute('id',"container");
body.appendChild(containerDiv);
var containerDivSet = document.getElementById('container');
var allTheDivs = containerDivSet.children;


function rowOfRandom() {
for (var i=0; i<9; i++) {
  var tileRandomColor = document.createElement("div");
  var color = '#'+'0123456789abcdef'.split('').map(function(v,index,array) {
  return index>5 ? null : array[Math.floor(Math.random()*16)]}).join('');
  tileRandomColor.style.width = "11.1%";
  tileRandomColor.style.height = "11.1%";
  tileRandomColor.style.background = color;
  tileRandomColor.style.float = "left";
  tileRandomColor.style.paddingBottom = "11.1%";
  containerDivSet.appendChild(tileRandomColor);
}
}

function allDivsRandom () {
  for (var i=0; i<5; i++) {
  rowOfRandom();
}
}
allDivsRandom () ;

function mySwitch() {
for (var i= 0; i<allTheDivs.length;i++) {
  var color = '#'+'0123456789abcdef'.split('').map(function(v,index,array) {
  return index>5 ? null : array[Math.floor(Math.random()*16)]}).join('');
  allTheDivs[i].style.background = color;
}
}

window.setInterval(function(){
mySwitch();
}, 2000);
