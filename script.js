var el=document.getElementsByTagName("body")[0].innerHTML;
for (var i = 1; i < 64; i++) {
  el += `<div style="width: 11.1%; float:left; padding-bottom: 11.1%; background-color: ${i%2 === 0 ? "red" : "black"}"></div>`;
}
el += `</section>`;
document.getElementsByTagName("body")[0].innerHTML = el;

//; background: linear-gradient(135deg, red, blue)
// ${i%2 === 0 ? red : blue}
