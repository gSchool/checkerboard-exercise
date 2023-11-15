var container = document.createElement('container')
document.body.appendChild(container)
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.height = '800px'
container.style.width = '800px'


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
        makeSquareRed()
    } else {
        makeSquareBlack()
    }
    if (i % 8 === 0 && i != 0) {
        row++
    }
}