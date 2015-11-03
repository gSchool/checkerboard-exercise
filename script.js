var body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = '#000000'
body.style.margin = '50px auto'
body.style.width = '600px'


for (var i=0; i < 81; i++) {
  var square = document.createElement('div')
  square.style.width = '11.1%'
  square.style.paddingBottom = '11.1%'
  square.style.backgroundColor = 'gray'
  if (i%2 === 0) {
    square.style.backgroundColor = 'tomato'
  }
  square.style.float = 'left'
  body.appendChild(square)
}
