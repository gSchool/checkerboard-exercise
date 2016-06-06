document.addEventListener('DOMContentLoaded', function(){
  var empty=document.getElementsByTagName('body')[0]



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
  }

var tiles = setInterval(function(){
  empty.innerHTML="";
  for (var i = 0; i < 63; i++) {
    var tile_i = document.createElement('div')
    function addTile(){
      empty.appendChild(tile_i)
      tile_i.style.width = "11.1%"
      tile_i.style.paddingBottom = "11.1%"
      tile_i.style.float = "left"
      tile_i.style.backgroundColor = getRandomColor()
    }
  addTile()}
}, 2000)

var tiles;
  })
