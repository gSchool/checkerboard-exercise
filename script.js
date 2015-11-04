window.onload = function () {
//making it show on the screen
makeBoxes();

};

var makeBoxes = function() {

  for (var i = 0; i < 90; i++){
    //creating the boxes
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.height = "100px";
    div.style.float = "left";

    if(i % 2 === 0){
      // making even tiles red
      div.style.backgroundColor = "red";
    }else {
      //making odd tiles black
      div.style.backgroundColor = "black";
    }
    document.body.appendChild(div);
  }
};
