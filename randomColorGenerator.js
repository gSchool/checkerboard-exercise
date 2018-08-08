let randomColor1;
let randomColor2;
let randomColor3;
let randomColorString;
let x;
    // let randomColor2 = Math.floor(Math.random() * 16);
    // let randomColor3 = Math.floor(Math.random() * 16);
    function hexMaker() {
        for (let i = 0; i < 3; i++) {
            randomColor1 = Math.floor(Math.random() * 256);
            randomColor2 = Math.floor(Math.random() * 256);
            randomColor3 = Math.floor(Math.random() * 256);
            randomColorString = `${randomColor1}, ${randomColor2}, ${randomColor3}`
        }
        return randomColorString;
    };

console.log(hexMaker());