function checkerBoard() {
  for (var i = 0; i < 63; i++) {
    var checkBox = document.createElement('div');
    checkBox.style.width = '11.1%';
    checkBox.style.float = 'left';
    checkBox.style.paddingBottom = '11.1%';
    var colors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    checkBox.style.backgroundColor = colors;
    document.body.appendChild(checkBox);
  }
}
checkerBoard();

function flasher() {
  var theDivs = document.getElementsByTagName('div');
  for (var i = 0; i < theDivs.length; i++) {
    var colors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    theDivs[i].style.backgroundColor = colors;
  }
}
setInterval(flasher, 1000);

var audio = document.createElement('div');
audio.innerHTML = '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241182641&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
document.body.appendChild(audio);
