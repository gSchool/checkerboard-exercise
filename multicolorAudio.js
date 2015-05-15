
$(document).ready(function () {

    soundManager.onload = function () {
        // SM2 is ready to go!
        var mySound = soundManager.createSound({
            id: 'aSound',
            url: 'https://www.dropbox.com/s/l3xj9qpv9rynac1/heaven_17_-_let_me_go_extended_mix_.mp3?dl=0',
            autoLoad: true,
            autoPlay: true
        });

        // Play/Pause Toggle Button
        $('#toggleBtn').click(function () {
            soundManager.togglePause('aSound');
        });
    }
});






for (var i=0; i<81; i++) {
  var newDiv =
	 document.createElement("div");
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
	document.body.appendChild(newDiv);
};
