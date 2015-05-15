for (var i=0; i<81; i++) {
  var newDiv =
	 document.createElement("div");
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.paddingBottom = "11.1%";
	newDiv.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
	document.body.appendChild(newDiv);
};
