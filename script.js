var el="";
for (var i = 1; i < 65; i++) {
  el += `<div style="width: 11.1%; float:left; padding-bottom: 11.1%; background-color: ${i%2 === 0 ? "red" : "black"}"></div>`;
}
document.getElementsByTagName("body")[0].innerHTML = el;
