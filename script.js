const container = document.createElement('div')

function buildGrid(size){
    container.innerHTML = ``;
    for (i = 0; i < columns; i++) {
        document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

buildGrid()


