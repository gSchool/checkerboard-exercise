
window.onload = function(){
	makeDivs();
	changeColor();
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

function goThroughDivs(){
	//for each div, set color
	var divs = document.getElementsByTagName("div");

	for (var i = 0; i<divs.length; i++){
		divs[i].style.backgroundColor=getRandomColor();
	}
}

function changeColor(){
	setInterval(goThroughDivs,2000);
}