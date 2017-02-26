// Your JS goes here
"use strict";

/*--      First Attempt    -->*/

// window.onload = function() {
//
//     // SETTING HEIGHT AND WIDTH OF PARENT ELEMENTS
//     document.getElementsByTagName("html")[0].style.height = "100%";
//     document.getElementsByTagName("html")[0].style.width = "100%";
//     document.body.style.height = "100%";
//     // document.body.style.width = "100%";
//
//     // BOARD CREATION
//     var board = document.createElement("div");
//     document.body.append(board);
//     board.style.height = "100%";
//     // board.style.width = "100%";
//     board.style.backgroundColor = "gray";
//     board.style.display = "flex";
//     board.style.flexFlow = "row wrap";
//     board.setAttribute("id", "collection");
//
//
//     //ADDING DIVS TO THE BOARD COLLECTION
//     var collection = document.getElementById("collection");
//     for (var i = 0; i < 64; i++) {
//         if (i % 2 === 0) {
//             var red = document.createElement("div");
//             board.append(red);
//             red.style.height = "8%  ";
//             red.style.width = "8%";
//             red.style.backgroundColor = "red";
//         }
//         var black = document.createElement("div");
//         board.append(black);
//         black.style.height = "8%";
//         black.style.width = "8%";
//         black.style.backgroundColor = "black";
//     }
// };

/*     ZUBAIR's First Solution */


window.onload = function() {

    var board = document.createElement("div");
    var isEven = false;
    var box;
    // Create board, append it to body
    board.style.width = '100vw'
    board.style.height = '100vh'
    board.style.backgroundColor = 'red'

    document.body.append(board)

    for (let i = 0; i < 30; i++) {
        var box = makeBox(i);

        board.append(box);
    }

    function makeBox(boxNum) {


        if (boxNum % 5 === 0) {
            isEven = !isEven;
        }

        var box = document.createElement("div");

        box.style.height = '17vh'
        box.style.width = '10vw'
        box.style.float = 'left'
        box.style.backgroundColor = 'black'

        if (isEven) {
            box.style.marginLeft = '10vw'
        } else {
            box.style.marginRight = '10vw'
        }


        return box;
    }

}


// window.onload = function(){
//
//   var board = document.createElement("div");
//   var isEven = false;
//   var box;
//   // Create board, append it to body
//   board.style.width = '100vw'
//   board.style.height = '100vh'
//   board.style.backgroundColor = 'red'
//
//   document.body.append(board)
//
//   for (let i = 0; i < 30; i++) {
//     var box = makeBox(i);
//
//     box.addEventListener('click', function(ev){
//       ev.target.style.backgroundColor = "papayawhip"
//     })
//
//     board.append(box);
//   }
//
//
//   function makeBox(boxNum){
//
//
//     if (boxNum % 5 === 0) {
//       isEven = !isEven;
//     }
//
//     var box = document.createElement("div");
//
//     box.style.height = '17vh'
//     box.style.width = '10vw'
//     box.style.float = 'left'
//     box.style.backgroundColor = 'purple'
//
//     if (isEven) {
//       box.style.marginLeft = '10vw'
//     } else {
//       box.style.marginRight = '10vw'
//     }
//
//
//     return box;
//   }
//
//
//
// }
