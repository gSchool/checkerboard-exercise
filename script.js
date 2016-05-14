'use strict'
//function to create rows
function createRow(){
  for(var i=0; i<81;i++){
    if(i % 2 === 0){
  var sqr = document.createElement('div');
  sqr.style.width = "11.1%";
  sqr.style.height = "11.1%";
  sqr.style.float="left";
  sqr.style.paddingBottom = "11.1%";
  sqr.style.backgroundColor = "red";
  document.body.appendChild(sqr);
    }else{
  var sqr = document.createElement('div');
  sqr.style.width = "11.1%";
  sqr.style.height = "11.1%";
  sqr.style.float="left";
  sqr.style.paddingBottom = "11.1%";
  sqr.style.backgroundColor = "black";
  document.body.appendChild(sqr);
    }
  }return console.log([i] + "?");
  }
  
createRow();
