// Your JS goes here
// var page = document.getElementsByTagName('body')
// var text = document.createTextNode('hello')
document.body.style.padding = '0'
document.body.style.margin='0'
for (var i = 0; i < 81 ; i++) {
  var tile = document.createElement('div')
  if (i%2 === 0){
    tile.style.backgroundColor= 'black'
    tile.style.width='11.1%';
    tile.style.height='11.1%';
    tile.style.paddingBottom='11.1%';
    tile.style.float='left';
    document.body.appendChild(tile);
  }
  else{
    tile.style.backgroundColor= 'red'
    tile.style.width='11.1%';
    tile.style.height='11.1%';
    tile.style.paddingBottom='11.1%';
    tile.style.float='left'
    document.body.appendChild(tile);
  }
}
