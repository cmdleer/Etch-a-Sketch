const buttonContainer = document.createElement('div');
const gridContainer = document.createElement('div');
const buildButton = document.createElement('button');

function buildGrid(size){
    container.innerHTML = ``;
    for (i = 0; i < columns; i++) {
        document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

document.body.appendChild(buildButton);
buttonContainer.appendChild(buildButton);
document.body.appendChild(gridContainer);


buildGrid(16);

container.addEventListener('mouseover', function(event){
    if (event.target.classList.contains('grid-square')){
        event.target.style.backgroundColor = 'green';
    }
})


