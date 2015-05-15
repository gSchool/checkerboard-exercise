// Your JS goes her
for (var i= 0 ; i < 89; i++){
		var newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
		newDiv.style.width = "11.1%";
		newDiv.style.float= "left";
		newDiv.style.padding = "0 0 11.1% 0";
		
		if(i%2 === 0)	{
			newDiv.style.background = "red";
        }
		else {
				newDiv.style.background = "black";}
	}
