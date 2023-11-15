makeContainer();
makeRow(8);
maketile(8);

function makeContainer() {
    let container = document.createElement('div');
    container.classList.add('container');
    container.style.width = '800px';
    container.style.height = '800px';
    container.style.border = '10px solid';
    container.style.borderImage = 'linear-gradient(to top, black, red) 1';
    document.body.appendChild(container);
}

function makeRow(X) {
    let page = document.querySelector('.container');
    for (let i = 0; i < X; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style.width = '100%'; // Set to full width
        row.style.height = '100px';
        row.style.display = 'flex';
        row.style.flexWrap = 'wrap'
        page.appendChild(row);
    }
}

function maketile(X) {
    let rows = document.querySelectorAll('.row');

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        let row = rows[rowIndex];

        for (let i = 0; i < X; i++) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.width = '12.5%';
            tile.style.height = '100%';

            row.appendChild(tile);
            tile.style.backgroundColor = `rgb(${createRandomNum()}, ${createRandomNum()}, ${createRandomNum()})`;
        }
    }
}

function createRandomNum() {
   return Math.floor(Math.random() * 255)
}