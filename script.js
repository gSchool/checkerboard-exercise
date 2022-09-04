// function square(color){
//     let tile = document.createElement('div');
//     tile.style.width = '11.1%';
//     tile.style.paddingBottom = '11.1%';
//     tile.style.cssFloat = 'left';
//     tile.style.backgroundColor = color;
//     document.body.appendChild(tile)
// } 


// for (let i = 0; i < 63; i++){
//     if ( i % 2 !== 0){
//         square('black')
//     } else if ( i % 2 === 0){
//         square('red')
//     }
// }

// function square(){
//     let tile = document.createElement('div');
//     tile.style.width = '11.1%';
//     tile.style.paddingBottom = '11.1%';
//     tile.style.cssFloat = 'left';
//     tile.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
//     document.body.appendChild(tile)
// } 


// for (let i = 0; i < 63; i++){
//         square()
// }


// function addGradient(){
//     let gradient = document.createElement('div');
//     gradient.style.width = "100%"
//     gradient.style.height = "100%"
//     gradient.style.background = 'linear-gradient(to left, rgba(0, 10, 255, 0.78), rgba(0, 100, 255, .15) 100%)';
//     gradient.style.position = 'fixed'
//     document.body.appendChild(gradient)
// }

// setInterval(square(), '2000')
    
// addGradient()  


function square(){
        let tile = document.createElement('div');
        tile.style.width = '11.1%';
        tile.style.paddingBottom = '11.1%';
        tile.style.cssFloat = 'left';
        tile.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        document.body.appendChild(tile)
    } 

  
for (let i = 0; i < 63; i++){
    square()
}


// setInterval(function() {square.style.backgroundColor = randomColor}, '2000')
setInterval(changeColor, '2000')
function changeColor(){
    let newSquare = document.getElementsByTagName('div');
    for (let i = 0; i < newSquare.length; i++){
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        newSquare[i].style.backgroundColor = randomColor
    }
}
