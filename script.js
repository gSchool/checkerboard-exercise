function createRows(number) {
  var body = document.getElementsByTagName('body')[0];
  for (var i = 0; i < number; i++) {
    var row = document.createElement('section');
    row.className = "row";
    row.setAttribute("style", "display:inline-block;width:60px;");
    body.appendChild(row);
  }
}

function addTiles() {
  var row_array = document.querySelectorAll('.row');
  row_array.forEach(function(element) {
    for (var i = 0; i < 9; i++) {
    var tile = document.createElement('div');
    tile.className = "tile";
    tile.innerHTML = " ";
    element.appendChild(tile);
    }
  });
}

function styleTiles() {
  var columns = document.querySelectorAll('section');
  for (var i = 0; i < columns.length; i++) {
    var divs = columns[i].childNodes;
    if (i%2 === 0) {
      divs.forEach( function(element, index) {
        if (index%2 === 0) {
          element.setAttribute("style", "background-color:red; width:100%; height:60px;");
        } else {
          element.setAttribute("style", "background-color:black; width:100%; height:60px");
        }
      });
    } else {
      divs.forEach( function(element, index) {
        if (index%2 !== 0) {
          element.setAttribute("style", "background-color:red; width:100%; height:60px;");
        } else {
          element.setAttribute("style", "background-color:black; width:100%; height:60px");
        }
      });
    }
  }
}

function checkerboard() {
  createRows(9);
  addTiles();
  styleTiles();
}

checkerboard();
