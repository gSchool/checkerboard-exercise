// Your JS goes here
document.addEventListener('DOMContentLoaded', () => {

    let colorToggle = 0;
    // testing my git branching abilities
    let coloRandom = '#000000';

    for (let j=0; j < 4; j++) {
        for (let i = 0; i < 8; i++) {
            colorToggle ++;
            const tile = document.createElement('div');
            document.body.appendChild(tile);
            if (colorToggle % 2 === 0) {
                tile.style.backgroundColor = 'red';
            } else {
                tile.style.backgroundColor = 'black';
            };
            tile.style.cssFloat = 'left';
            tile.style.width = '11.1%'
            tile.style.height = '100px';
            tile.style.margin = '1px';
            tile.style.borderColor = 'black'
            // tile.textContent = colorToggle;
        };
        colorToggle -= 1;
        for (let i = 0; i < 8; i++) {
            colorToggle ++;
            const tile = document.createElement('div');
            document.body.appendChild(tile);
            if (colorToggle % 2 === 0) {
                tile.style.backgroundColor = 'red';
            } else {
                tile.style.backgroundColor = 'black';
            };
            tile.style.cssFloat = 'left';
            tile.style.width = '11.1%'
            tile.style.height = '100px';
            tile.style.margin = '1px';
            tile.style.borderColor = 'black'
            // tile.textContent = colorToggle;
        };
        colorToggle ++;
    };
})