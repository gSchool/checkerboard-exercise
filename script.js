var body = document.body
var container = document.createElement('div')

container.style.height = '700px'
container.style.width = '700px'

body.appendChild(container)

var hex = '1 2 3 4 5 6 7 8 9 0 a b c d e f'.split(' ')
// console.log(Math.random);
// console.log(hex[Math.floor(Math.random * hex.length)]);

function randomGen() {
    var color = hex[Math.floor(Math.random() * hex.length).toString()] +
        hex[Math.floor(Math.random() * hex.length).toString()] +
        hex[Math.floor(Math.random() * hex.length).toString()] +
        hex[Math.floor(Math.random() * hex.length).toString()] +
        hex[Math.floor(Math.random() * hex.length).toString()] +
        hex[Math.floor(Math.random() * hex.length).toString()];

    color = '#' + color
    return color
}

console.log(randomGen());


for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var newDiv = document.createElement('div')
            newDiv.style.height = '11.1%'
            newDiv.style.width = '11.1%'
            newDiv.style.float = 'left'
            newDiv.style.backgroundColor = randomGen()
            container.appendChild(newDiv)
        }
}
