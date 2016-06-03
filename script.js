// Your JS goes here
var container = document.createElement('div')
container.style.width = '900px'
container.style.height = '900px'
container.id = "container"
document.body.appendChild(container)

for (var i = 0; i < 81; i++) {
  var square = document.createElement('div')
  square.innerHTML = ' '
  square.style.width="100px"
  square.style.height="100px"
  square.style.display="inline-block"
  square.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8).toUpperCase();
  // i%2===0 ? square.style.backgroundColor = "red" : square.style.backgroundColor = "black"
  square.style.padding = 0
  square.style.marginBottom = "-5px"
  document.getElementById('container').appendChild(square)
}
