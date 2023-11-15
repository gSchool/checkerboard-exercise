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
