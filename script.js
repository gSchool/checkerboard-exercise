var el=document.getElementsByTagName("body")[0].innerHTML;
for (var i = 1; i < 64; i++) {
  var randomColor = "#";
  for (var j = 0; j < 3; j++) {
    randomColor += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
  }
  el += `<div style="width: 11.1%; float:left; padding-bottom: 11.1%; background-color: ${randomColor}"></div>`;
}
document.getElementsByTagName("body")[0].innerHTML = el;
