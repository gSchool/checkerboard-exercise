document.addEventListener('DOMContentLoaded', function(){
  var empty=document.getElementsByTagName('body')[0]

  for (var i = 0; i < 63; i++) {
    var tile_i = document.createElement('div')
    function addBlackTile(){
      empty.appendChild(tile_i)
      tile_i.style.width = "11.1%"
      tile_i.style.paddingBottom = "11.1%"
      tile_i.style.float = "left"
      tile_i.style.backgroundColor = "black"
    }
    function addRedTile(){
      tile_i.style.width = "11.1%"
      tile_i.style.paddingBottom = "11.1%"
      tile_i.style.float = "left"
      tile_i.style.backgroundColor = "red"
      empty.appendChild(tile_i)
    }
    if(i%2==0){
      addBlackTile()
    }
  else{addRedTile()}
  }
})
