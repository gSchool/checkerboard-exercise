var body = document.body
var container = document.createElement('div')

container.style.height = '700px'
container.style.width = '700px'

body.appendChild(container)

var blueVal = 30
var greenVal = 92



for (var i = 0; i < 9; i++) {
    if (i % 2 === 0) {
        for (var j = 0; j < 9; j++) {
            var newDiv = document.createElement('div')
            newDiv.style.height = '11.1%'
            newDiv.style.width = '11.1%'
            newDiv.style.float = 'left'
            container.appendChild(newDiv)
            if (j % 2 === 0) {
                newDiv.style.backgroundColor = 'rgb(' + greenVal + ',190,30)'
            }
            else {
                newDiv.style.backgroundColor = 'rgb(' + blueVal + ',49,190)'
            }

        }
    }
    else {
        for (var k = 0; k < 9; k++) {
            var newDiv = document.createElement('div')
            newDiv.style.height = '11.1%'
            newDiv.style.width = '11.1%'
            newDiv.style.float = 'left'
            container.appendChild(newDiv)
            if (k % 2 !== 0) {
                newDiv.style.backgroundColor = 'rgb(' + greenVal + ',190,30)'
            }
            else {
                newDiv.style.backgroundColor = 'rgb(' + blueVal + ',49,190)'
            }
        }


    }
    blueVal += 25
    greenVal += 25
}
