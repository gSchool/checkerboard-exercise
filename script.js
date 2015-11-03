// Your JS goes here
var table = document.createElement('table');
table.style.borderCollapse = 'collapse';
var size = window.innerWidth / 9;

for (var i = 0; i < 7; i ++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 9; j ++) {
    var td = document.createElement('td');
    td.style.height = td.style.width = size + 'px';
    td.style.backgroundColor = ((j + i) % 2 === 0) ? 'black' : 'red';
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

var body = document.getElementsByTagName('body')[0];
body.appendChild(table);
body.style.margin = '0';
