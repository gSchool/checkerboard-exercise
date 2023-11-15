var con = document.createElement("Container")
document.body.appendChild(con);
con.style.display = "flex";
con.style.flexWrap = "wrap";
con.style.width = "800px";
con.style.height = "800px";

for (var i = 0; i<64; i++){
    var tile = con.appendChild(document.createElement("div"));
    tile.style.height="12.5%";
    tile.style.width="12.5%";
    tile.style.backgroundColor = randomColor();
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

// var tiles = document.querySelectorAll("div");
// //var blackTiles = document.querySelectorAll("div:nth-of-type(even)");
// //var redTiles = document.querySelectorAll("div:nth-of-type(odd)");

// var row = 1;
// var col = 0;
// for (var i = 0; i < tiles.length; i++) {
//   //console.log("row: " + row + "i : " + i+ "col: " + col);
//   //if row is odd, want odd col red & if row is even, even col are red
//   if (row % 2 == 1 && (i + 1) % 2 == 1 || row % 2 == 0 && (i + 1) % 2 == 0) {
//     tiles[i].style.backgroundColor = "red";
//     tiles[i].style.height = "12.5%";
//     tiles[i].style.width = "12.5%";
//   } else {
//     tiles[i].style.backgroundColor = "black";
//     tiles[i].style.height = "12.5%";
//     tiles[i].style.width = "12.5%";
//   }

//   if (col % 7 == 0 && col != 0) {
//     row++;
//     col = 0;
//   } else {
//     col++;
//   }
// }  