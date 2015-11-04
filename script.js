// Your JS goes here

var body = document.getElementsByTagName('body')[0];
body.style.background = 'linear-gradient(to bottom, #3441FB, #3DC7FC)';

var i = 0;
 while (i<63) {
 var tile  = document.createElement('div');
 var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  tile.style.width = "11.1%";
  tile.style.float = "left"
  tile.style.margin = "0";
  tile.style.paddingBottom = "11.1%";
  tile.style.opacity = "0.5";
  if(i % 2 === 0){
      tile.style.backgroundColor = "#3DC7FC";
    } else {
      tile.style.backgroundColor = "#D12DFB";
    }
    document.body.appendChild(tile);
    i++;
  }




//background: linear-gradient(top,  #2E2E28 0%,#4D4C48 100%);
