const container = document.createElement('div');
const button = document.createElement('button');
function buildGrid(size){
    container.innerHTML = ``;
    for (i = 0; i < columns; i++) {
        document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    }
}

buildGrid(16);

container.addEventListener('mouseover', function(event){
    if (event.target.classList.contains('grid-square')){
        event.target.style.backgroundColor = 'green';
    }
})


