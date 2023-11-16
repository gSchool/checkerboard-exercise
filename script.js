var container = document.createElement('container')
document.body.appendChild(container)
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.height = '800px'
container.style.width = '800px'

// var gradientDiv = document.createElement("div");
// gradientDiv.style.background = "linear-gradient(to right, red, yellow, green)";
// gradientDiv.style.width = "100%";
// gradientDiv.style.height = "100%";
// gradientDiv.style.position = "fixed";
// gradientDiv.style.top = "0";
// gradientDiv.style.left = "0";
// gradientDiv.style.zIndex = "-1";
// document.body.appendChild(gradientDiv);

function makeSquareGradient(startColor, endColor) {
    let div = document.createElement('div')
    div.style.height = "12.5%"
    div.style.width = "12.5%"
    div.style.background = `linear-gradient(${startColor}, ${endColor})`
    container.appendChild(div)
}

function makeRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeSquareRandomColor() {
    let div = document.createElement('div')
    div.style.height = "12.5%"
    div.style.width = "12.5%"
    div.style.backgroundColor = makeRandomColor();
    container.appendChild(div)
}

function makeSquareRed() {
    let div = document.createElement('div')
    div.style.height = "12.5%"
    div.style.width = "12.5%"
    div.style.backgroundColor = 'red'
    container.appendChild(div)
}

function makeSquareBlack() {
    let div = document.createElement('div')
    div.style.height = "12.5%"
    div.style.width = "12.5%"
    div.style.backgroundColor = 'black'
    container.appendChild(div)
}

var row = 0
for (var i = 1; i < 65; i++) {
    if (i % 2 === 1 && row % 2 === 0 || i % 2 === 0 && row % 2 === 1) {
        makeSquareGradient('blue', 'yellow')
    } else {
        makeSquareGradient('green', 'black')
    }
    if (i % 8 === 0 && i != 0) {
        row++
    }
}