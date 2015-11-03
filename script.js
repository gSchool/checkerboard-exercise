var body = document.getElementsByTagName('body')[0];
body.style.margin = "0";

var i = 0;
while (i<99) {
  var tile  = document.createElement('div');
  tile.style.width = "11.1%";
  tile.style.float = "left"
  tile.style.margin = "0";
  tile.style.paddingBottom = "11.1%";
  if(i % 2 === 0){
    tile.style.backgroundColor = "black";
  } else {
    tile.style.backgroundColor = "red";
  }
  document.body.appendChild(tile);
  i++;
}
