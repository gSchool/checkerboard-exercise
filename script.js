'use strict';
// Your JS goes here
// Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

var newDiv = document.createElement('div');
var stylingDivRed = newDiv.style.color = "red";
var stylingDivBlack = newDiv.style.color = "black";
var divSize = newDiv.style.width = "11.1%";
var divFloat = newDiv.style.float = "left";
var divPad = newDiv.style.paddingBottom = "11.1%";
var divBlock = newDiv.style.display = "inline-block";



function funDiv() {
  for(var i = 0; i < 81; i++){
    var newDiv = document.createElement('div');
    if(i % 2 === 1) {
      stylingDivRed = newDiv.style.backgroundColor = "red";
    } else {
      stylingDivBlack = newDiv.style.backgroundColor = "black";
    }
    document.body.appendChild(newDiv);
    divSize = newDiv.style.width = "11.1%";
    divPad = newDiv.style.paddingBottom = "11.1%";
    //divBlock = newDiv.style.display = "inline-block";
    divFloat = newDiv.style.float = "left";

    }
}
funDiv();

//
//
// var newAside = document.createElement('aside');
// var navBar = newAside.appendChild(document.createElement('nav'));
// var uNoL = navBar.appendChild(document.createElement('ul'));
// var liI = uNoL.appendChild(document.createElement('li'));       //will need to make 4 of these
// var products = liI.appendChild(document.createElement('a'));
// var liI1 = uNoL.appendChild(document.createElement('li'));
// var clients = liI1.appendChild(document.createElement('a'));
// var liI2 = uNoL.appendChild(document.createElement('li'));
// var aboutUs = liI2.appendChild(document.createElement('a'));
// var liI3 = uNoL.appendChild(document.createElement('li'));
// var blog = liI3.appendChild(document.createElement('a'));

//
// document.querySelectorAll('li')[2].innerHTML = "Clients"
// document.body.appendChild(newAside);
// document.newAside.appendChild(navBar);
// document.


//navBar.innerHTML = "I'm an article about the awesomeness of the DOM!"
