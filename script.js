var body = document.getElementsByTagName('body')[0];
// var div1 = document.createElement('div');
// var div2 = document.createElement('div');
// div1.style.display="inline-block";

// div2.style.display="inline-block";







for(i=0; i<63; i++){
  if(i===0 || i%2===0){
    div1 = document.createElement('div');
    div1.style.backgroundColor='red';
    div1.style.width="11.1%";
    div1.style.float="left";
    div1.style.paddingBottom="11.1%"
    body.appendChild(div1)
  } else {
    div2 = document.createElement('div');
    div2.style.backgroundColor='black';
    div2.style.width="11.1%";
    div2.style.float="left";
    div2.style.paddingBottom="11.1%"
    body.appendChild(div2)
  }
}

//
// body.appendChild(div1);
// body.appendChild(div2);
// body.appendChild(div1);
