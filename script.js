// // Your JS goes here


function makeTile(color) {
    let body = document.getElementsByTagName('body')//gets body element from html through tagName "body"
    let square = document.createElement('div') //creates a square div
    //styles the square div
    square.style.width = "11.1%";
    square.style.float = "left";
    square.style.paddingBottom = "11.1%";
    square.style.backgroundColor = color;
    document.body.appendChild(square) //appends the square div to the body in html
}



function checkerboard() {
    let rows = 62
    for (let i = 0; i <= rows; i++) {
        if (i % 2 == 0) {
        makeTile('red');
    } else if (i % 2 != 0) {
        makeTile('black')
    }
}

}
checkerboard()