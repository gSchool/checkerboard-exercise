var container = document.createElement('container')
document.body.appendChild(container)
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.height = '800px'
container.style.width = '800px'

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

for (var i = 0; i < 64; i++) {
    makeSquareRandomColor();
}