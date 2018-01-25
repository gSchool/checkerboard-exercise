var body = document.body;

var container = document.createElement("div");
container.style.height = "101vh";
container.style.width = "101vw";
container.style.backgroundColor = "gray";
container.style.margin = "-8px";
body.appendChild(container);

for(var i=0; i<41; i++){
  var block1 = document.createElement("div");
  block1.style.backgroundColor = "black";
  block1.style.height = "11.1%";
  block1.style.width = "11.1%";
  block1.style.float = "left";
  container.appendChild(block1);
  if (i==40){break};
  var block2 = document.createElement("div");
  block2.style.backgroundColor = "red";
  block2.style.height = "11.1%";
  block2.style.width = "11.1%";
  block2.style.float = "left";
  container.appendChild(block2);
}
