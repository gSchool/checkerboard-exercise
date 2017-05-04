function makeCheckerBoard(ammount){

  for (var i = 0; i < ammount; i++) {
    if (i % 2 !== 0) {
        document.querySelector('body').appendChild(document.createElement('div')).setAttribute(
   "style", "background: red; width: 11.1%; height: 100px; float: left; paddingBottom:11.1%;");
    }
    else if (i% 2 == 0){
      document.querySelector('body').appendChild(document.createElement('div')).setAttribute(
 "style", "background: black; width: 11.1%; height: 100px; float: left; paddingBottom:11.1%;");
    }
  }
}

makeCheckerBoard(100);
