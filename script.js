
divContainer = document.createElement('div');
divNew = document.createElement('div');


for(i=0;i<81;i++){
  if(i % 2 === 0 ){
    var gradientColor = 'darkred'+9;
    var divColor = document.createElement('div');
    divColor.style.backgroundColor= '#0000ff';
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';
    document.getElementsByTagName('body')[0].appendChild(divColor);

  } else{

    var divColor = document.createElement('div')
    divColor.style.backgroundColor= 'pink';
    divColor.style.width = '11.1%'
    divColor.style.paddingBottom = '11.1%';
    divColor.style.float = 'left';
    document.getElementsByTagName('body')[0].appendChild(divColor);
  }
  divContainer.appendChild(divNew);
}
