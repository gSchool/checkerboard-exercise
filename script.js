var checkerboard = function() {
    document.body.style.margin = "0";
    for (i=0; i<45; i++){
      var div = document.createElement('div');
      div.style.width = "11.1%";
      div.style.cssFloat = "left";
      div.style.paddingBottom = "11.1%"
      if (i % 2 == 0) {
        div.style.backgroundColor = "#FF0000";
      } else {
        div.style.backgroundColor = "#000000";
      }
      document.body.appendChild(div);
    }
}

checkerboard();
