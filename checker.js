// Your JS goes here
for (var i = 0; i < 63; i++) {
  $('body').append('<div></div>');
  $('div').css({"float": "left", "width": "11.1%", "padding-bottom": "11.1%", "background-color": "black"});
  $('div:nth-child(even)').css("background-color", "red");
}
