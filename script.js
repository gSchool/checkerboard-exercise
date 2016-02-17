// Your JS goes here
var body = document.getElementsByTagName('body')[0];
for (i = 0; i < 99; i++) {
  var div1 = document.createElement('div');
  body.insertBefore(div1, body.firstChild);
  div1.setAttribute("style", "background-color: red; width: 11.1%; float: left; padding: 0 0 11.1% 0");
  var div2 = document.createElement('div');
  body.insertBefore(div2, body.firstChild);
  div2.setAttribute("style", "background-color: black; width: 11.1%; float: left; padding: 0 0 11.1% 0");
}
