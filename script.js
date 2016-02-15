// Your JS goes here



for( var i = 0; i < 3000; i++ ) {

  var divOdd = document.createElement('div');

  divOdd.style.width = '11.1%';
  divOdd.style.paddingBottom = '11.1%';
  divOdd.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  divOdd.style.float = 'left';

  var divEven= document.createElement('div');

  divEven.style.width = '11.1%';
  divEven.style.paddingBottom = '11.1%';
  divEven.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  divEven.style.float = 'left';

  if(i % 2 !== 0){ document.body.appendChild(divOdd); }

  else { document.body.appendChild(divEven); }



}
