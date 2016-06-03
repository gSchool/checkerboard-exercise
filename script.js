

  // for (var i = 0; i < 63; i++) {
  //   var tile=document.createElement('div');
  //   tile.style.width = '11.1%'
  //   tile.style.float = 'left'
  //   tile.style.paddingBottom = '11.1%'
  //   document.body.appendChild(tile);
  //
  // (i%2 === 0 ? tile.style.backgroundColor = 'red': tile.style.backgroundColor = 'black');
  //   }

    for (var i = 0; i < 63; i++) {
      var tile=document.createElement('div');
      tile.style.width = '11.1%'
      tile.style.float = 'left'
      tile.style.paddingBottom = '11.1%'
      tile.style.backgroundColor =getRandomColor()
      document.body.appendChild(tile);
      }

      function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
