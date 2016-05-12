// Your JS goes here
for (var i = 0; i < 63; i++) {
  var red = (Math.floor(Math.random()*256));
  var green = (Math.floor(Math.random()*256));
  var blue = (Math.floor(Math.random()*256));
  $('body').append("<div class='" + i + "'></div>");
  $('.' + i).css({"float": "left", "width": "11.1%", "padding-bottom": "11.1%", "background-color": "rgb(" + red + ", " + green + ", " + blue + ")"});
}
