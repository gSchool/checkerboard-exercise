// Your JS goes here
window.onload = function(){
	makeDivs();
	getRandomColor();
};

function makeDivs(){
	var parent = document.getElementsByTagName("body")[0];
	for (var i = 0; i<100; i++){
		var div = document.createElement("div");
		div.style.width="11.1%";
		div.style.float="left";
		div.style.paddingBottom="11.1%";
		div.style.height="11.1%";
		div.style.backgroundColor=getRandomColor();
		parent.appendChild(div);
	}
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}