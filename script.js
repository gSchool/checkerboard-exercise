// Your JS goes here
// Your JS goes here
document.addEventListener('DOMContentLoaded', () => {

    let colorToggle = 0;
    let randomColor1;
    let randomColor2;
    let randomColor3;
    let randomColorString;
    
    for (let j=0; j < 4; j++) {
        for (let i = 0; i < 8; i++) {
            // colorToggle ++;
            randomColor1 = Math.floor(Math.random() * 256);
            randomColor2 = Math.floor(Math.random() * 256);
            randomColor3 = Math.floor(Math.random() * 256);
            randomColorString = `${randomColor1}, ${randomColor2}, ${randomColor3}`
            const tile = document.createElement('div');
            document.body.appendChild(tile);
            // if (colorToggle % 2 === 0) {
            //     tile.style.backgroundColor = 'red';
            // } else {
            //     tile.style.backgroundColor = 'black';
            // };
            tile.style.backgroundColor = `rgb(${randomColorString})`;
            tile.style.cssFloat = 'left';
            tile.style.width = '11.1%'
            tile.style.height = '100px';
            tile.style.margin = '1px';
            tile.style.borderColor = 'black'
        };
        colorToggle -= 1;
        for (let i = 0; i < 8; i++) {
            // colorToggle ++;
            randomColor1 = Math.floor(Math.random() * 256);
            randomColor2 = Math.floor(Math.random() * 256);
            randomColor3 = Math.floor(Math.random() * 256);
            randomColorString = `${randomColor1}, ${randomColor2}, ${randomColor3}`
            const tile = document.createElement('div');
            document.body.appendChild(tile);
            // if (colorToggle % 2 === 0) {
            //     // tile.style.backgroundColor = 'red';
            // } else {
            //     // tile.style.backgroundColor = 'black';
            // };
            tile.style.backgroundColor = `rgb(${randomColorString})`
            tile.style.cssFloat = 'left';
            tile.style.width = '11.1%'
            tile.style.height = '100px';
            tile.style.margin = '1px';
            tile.style.borderColor = 'black'
            // tile.textContent = colorToggle;
        };
        // colorToggle ++;
    };
})