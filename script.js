function checkerBoardExercise() {// Your JS goes here
    for(let i = 0; i < 63; i++) {
        let body = document.querySelector('body');
        let div = document.createElement('div');
        body.appendChild(div);
        div.style.width = '11.1%';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        if(i % 2 ==0) {
            div.style.backgroundColor = 'red'
        } else {
            div.style.backgroundColor = 'black'
        }
    }
    
}
console.log(checkerBoardExercise())
