// Your JS goes here

for (var i = 0; i < 99; i++) {
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.style.float="right";
  div.style.paddingBottom="11.1%";
  div.style.width="11.1%";
  if (i % 2 === 0) {
    div.style.backgroundColor="red";
  } else {
    div.style.backgroundColor="black  ";
  }
  console.log(div)
};
