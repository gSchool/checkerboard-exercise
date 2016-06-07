//first, let's create a div container
//then let's create a div for red
//then let's create a div for black
//then let's style the red div
//then let's style the black div

var divContainer = document.createElement('div');
var divRed = document.createElement('div');
var divBlack = document.createElement('div');
// var body = document.getElementsbyTagName('body');


for(i=0;i<81;i++){
  if(i % 2 === 0){
    // divRed.innerHTML = divRed;
    var divColor = document.createElement('div');
    divColor.style.backgroundColor= 'red';
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';
    console.log(divRed);
    //append your new red div to your container div
    document.getElementsByTagName('body')[0].appendChild(divColor);
  } else{
    // divContainer.innerHTML = divBlack;
    var divColor = document.createElement('div')
    divColor.style.backgroundColor= 'black';
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';
    // console.log(divRed);
    //append your new red div to your container div
    document.getElementsByTagName('body')[0].appendChild(divColor);
  }
  divContainer.appendChild.divRed;
}
