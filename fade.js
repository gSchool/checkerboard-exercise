// Your JS goes here
for (var i = 0; i < 63; i++) {
  $('body').append("<div class='" + i + "'></div>");
  $('.' + i).css({"float": "left", "width": "11.1%", "padding-bottom": "11.1%", "background-color": "rgba(255, 0, 0, " + (i/63) + ")"});
}
