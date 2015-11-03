document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
var newAudio = document.createElement('audio');
document.body.appendChild(newAudio);
var newSource = document.createElement('source');
newAudio.appendChild(newSource);
newSource.src = 'audio/music.mp3';
newAudio.play();
function randomHex(){
  var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var color = '#'
  while(color.length < 7)
    color += hex[Math.floor(Math.random() * 16)];
  return color;
}
function addChecker(n){
  while(n>0) {
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    var raptor = document.createElement('img');
    raptor.src = "images/raptor.png";
    newDiv.appendChild(raptor);
    newDiv.style.width = '7.1%';
    newDiv.style.float = 'left';
    newDiv.style.padding = '2%';
    newDiv.style.backgroundColor = randomHex();
    newDiv.style.textAlign = 'center';
    n--;
  }
}
function flipRaptor(i){
  if (raptorDir === 0){
    allRaptors[i].style.transform = "rotateY(180deg)";
  } else {
    allRaptors[i].style.transform = "rotateY(0deg)";
  }
}
addChecker(100);
var allCheckers = document.getElementsByTagName('div');
var allRaptors = document.getElementsByTagName('img');
var raptorDir = 0;
setInterval(function(){
  for (var i=0;i<allCheckers.length;i++){
    allCheckers[i].style.backgroundColor = randomHex();
    flipRaptor(i);
  }
  if (raptorDir)
    raptorDir = 0;
  else
    raptorDir = 1;
}, 700);
