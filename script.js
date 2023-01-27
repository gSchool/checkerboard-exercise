function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  //empty

function checkerBoardExercise() {// Your JS goes here
    
    for(let i = 0; i < 63; i++) {
        let body = document.querySelector('body');
        let div = document.createElement('div');
        let color1 = getRandomIntInclusive(1, 255);
        let color2 = getRandomIntInclusive(1, 255);
        let color3 = getRandomIntInclusive(1, 255);
        body.appendChild(div);
        div.style.width = '11.1%';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        div.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    }
}
console.log(checkerBoardExercise())
