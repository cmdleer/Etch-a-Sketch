const button = document.createElement("button");
button.style.width = '10vw'
button.style.height=  '10vw'


function createGrid(rows, columns, parent) {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.width = '100vw';
    grid.style.height = '100vh';
    grid.style.boxSizing = 'border-box';

    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.style.boxSizing = 'border-box';
        
        cell.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'yellow'; 
        });

        grid.appendChild(cell);
    }
    parent.appendChild(button);
    parent.appendChild(grid);
}

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';

createGrid(16, 16, document.body);