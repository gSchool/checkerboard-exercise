var body = document.body;

var container = document.createElement("div");
container.style.height = "101vh";
container.style.width = "101vw";
container.style.backgroundColor = "gray";
container.style.margin = "-8px";
body.appendChild(container);

for(var i=0; i<41; i++){
  var block1 = document.createElement("div");
  var ranColor1 = "#" + (Math.random() * 1000000).toFixed(0);
  block1.style.backgroundColor = ranColor1;
  block1.style.height = "11.1%";
  block1.style.width = "11.1%";
  block1.style.float = "left";
  container.appendChild(block1);
  if (i==40){break};
  var block2 = document.createElement("div");
  var ranColor2 = "#" + (Math.random() * 1000000).toFixed(0);
  block2.style.backgroundColor = ranColor2;
  block2.style.height = "11.1%";
  block2.style.width = "11.1%";
  block2.style.float = "left";
  container.appendChild(block2);
}

console.log("#" + (Math.random() * 1000000));
