
var con = document.createElement("Container")
document.body.appendChild(con);
con.style.display = "flex";
con.style.flexWrap = "wrap";
con.style.width = "900px";
con.style.height = "900px";
con.style.margin = "auto";

for (var i = 0; i<36; i++){
    var div = con.appendChild(document.createElement("div"));
    div.style.height = "150px";
    div.style.width = "150px";
    div.style.backgroundColor = "#D8D5D3"
}
 
var tiles = con.children;
var count = 0;

for (var i = 1; i< 7; i++){
    for (var j = 1; j< 7; j++){
        var img = document.createElement("img");
        img.setAttribute("src", `images/bear${j}.png`)
        tiles[count].appendChild(img);
        img.style.width = "150px";
        img.style.height = "150px";
            //tiles[count].style.backgroundImage = `url("images/bear${j}.png")`;
            //tiles[count].style.backgroundRepeat = "no-repeat";
        img.style.visibility = "hidden";
            count++;
    }
}
count = 0;

//while (count < 36){
setInterval( function() {
    var bear = document.querySelectorAll("img");
     //bear[count].style.visibility="visible";
    if (count === 0){
        bear[count].style.visibility= "visible";
        bear[35].style.visibility= "hidden";
    } else {
        bear[count].style.visibility= "visible";
        bear[count - 1].style.visibility= "hidden";
    }
        
    count++;
    if (count == 36){
        count = 0
    }
 }, 500);

