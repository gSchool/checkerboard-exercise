// Your JS goes here
var body = document.getElementsByTagName("body");

  for (var i = 0; i < 81; i++) {
    var box = document.createElement("div");
    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    box.style.float = "left";
    var characters = "0123456789ABCDEF"
    var hex = function() {
      var arr = [];
      for (var i = 0; i < 6; i++) {
        arr.push(characters[Math.floor(Math.random()*16)]);
      }
      return "#" + arr.join('');
    }
    box.style.backgroundColor = hex();
    body[0].appendChild(box);
  };
