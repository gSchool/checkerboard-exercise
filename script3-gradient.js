document.addEventListener('DOMContentLoaded', function(){

    let body = document.querySelector('body')
    let getDiv;
    let odd = document.getElementsByClassName('odd')
    let even = document.getElementsByClassName('even')
    let newDiv;
    let count = 0;
    let color = 100;
    function color1(){
        color--
        return 'rgb(0, '+color+', 100)'
    }
    function color2(){
        color++
        return 'rgb('+color+',50, 0)'
    }


    makeDivs(81)

    body.setAttribute('style', 'display:grid; grid-template: repeat(9, 1fr)/repeat(9, 1fr); height:100vh')

    for(let i of getDiv){
        if (count%2==1){
            i.className = 'even'
        } else {
            i.className = 'odd'
        }
        count++
    }

    for(let i of odd){
        i.style.backgroundColor = color1()
    }
    for(let i of even){
        i.style.backgroundColor = color2()
    }

    function makeDivs(num){
        for(let i = 0; i<num; i++){
            newDiv = document.body.prepend(document.createElement('div'))
            getDiv = document.querySelectorAll('div')
        }
    }
})
