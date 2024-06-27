function createGrid(rows, columns, parent) {
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        grid.appendChild(cell);
    }
    
    parent.appendChild(grid)
}
createGrid (5, 5, document.body);