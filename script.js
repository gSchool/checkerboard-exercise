for (var i = 0; i < 99; i++){

if (i % 2 === 0){

var divvy = document.createElement('div');
divvy.style.backgroundColor = "black";
divvy.style.position = "relative";
divvy.style.float = "left"
divvy.style.width = "11.1%";
divvy.style.paddingBottom = "11.1%";
divvy.className = "evens"


} else {

var divvy = document.createElement('div');
divvy.style.backgroundColor = "red";
divvy.style.position = "relative";
divvy.style.float = "left";
divvy.style.width = "11.1%";
divvy.style.paddingBottom = "11.1%";
divvy.className = "odds"



}

document.body.appendChild(divvy);

}
