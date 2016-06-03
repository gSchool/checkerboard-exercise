

  for (var i = 0; i < 63; i++) {
    var tile=document.createElement('div');
    tile.style.width = '11.1%'
    tile.style.float = 'left'
    tile.style.paddingBottom = '11.1%'
    document.body.appendChild(tile);

  (i%2 === 0 ? tile.style.backgroundColor = 'red': tile.style.backgroundColor = 'black');
    }
