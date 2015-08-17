window.onload = function(){
	makeDivs();
};

function makeDivsGradient(){
	var parent = document.getElementsByTagName("body")[0];
	for (var i = 0; i<100; i++){
		var div = document.createElement("div");
		div.style.width="11.1%";
		div.style.float="left";
		div.style.paddingBottom="11.1%";
		div.style.height="11.1%";
		div.style.backgroundColor="rgba(255,0,0, "+(i/100)+")";
		parent.appendChild(div);
	}
}
