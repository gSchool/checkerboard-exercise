document.addEventListener('DOMContentLoaded', function(){

    let body = document.querySelector('body')
    let getDiv;
    let odd = document.getElementsByClassName('odd')
    let even = document.getElementsByClassName('even')
    let newDiv;
    let count = 0;
    function color(){
        let color1 = Math.floor(Math.random()*255)
        let color2 = Math.floor(Math.random()*255)
        let color3 = Math.floor(Math.random()*255)
        return 'rgb('+color1+', '+color2+', '+color3+')'
    }
    console.log(color())

    makeDivs(81)

    body.setAttribute('style', 'display:grid; grid-template: repeat(9, 1fr)/repeat(9, 1fr); height:100vh')

    for(let i of getDiv){
        if (count%2==1){
            i.className = 'even'
        } else {
            i.className = 'odd'
        }
        i.style.backgroundColor = color()
        count++
    }

    function makeDivs(num){
        for(let i = 0; i<num; i++){
            newDiv = document.body.prepend(document.createElement('div'))
            getDiv = document.querySelectorAll('div')
        }
    }
})
