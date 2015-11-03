window.onload = function () {
//making it show on the screen
makeBoxes();

};

var makeBoxes = function() {

  for (var i = 0; i < 90; i++){
    //creating the boxes
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.height = "40px";
    div.style.float = "left";

    var body = document.getElementsByTagName("body");

    if(i % 2 === 0){
      // making even tiles red
      div.style.backgroundColor = "red";
      div.id = i;
      document.body.appendChild(div);
    }

    else {
      //making odd tiles black
      div.style.backgroundColor = "black";
      div.id = i;
      document.body.appendChild(div);
    }
  }
};
