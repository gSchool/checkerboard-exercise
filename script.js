var body = document.body;

var container = document.createElement("div");
container.style.height = "101vh";
container.style.width = "101vw";
container.style.backgroundColor = "gray";
container.style.margin = "-8px";
body.appendChild(container);

for(var i=10; i<102; i+=2){
  var block1 = document.createElement("div");
  var color1 = "#33cc"
  color1 += i;
  console.log(color1);
  block1.style.backgroundColor = color1;
  block1.style.height = "11.1%";
  block1.style.width = "11.1%";
  block1.style.float = "left";
  container.appendChild(block1);
  if (i==101){break};
  var block2 = document.createElement("div");
  var color2 = "#ffff"
  color2 += i;
  console.log(color2);
  block2.style.backgroundColor = color2;
  block2.style.height = "11.1%";
  block2.style.width = "11.1%";
  block2.style.float = "left";
  container.appendChild(block2);
}
