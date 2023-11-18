const container = document.getElementById("root");
const cube = document.createElement('div');
    cube.className = "cube";
    container.appendChild(cube);

let cubePosition = { x: (container.clientWidth - cube.clientWidth) / 2, y: 0 };
const CUBESIZE = 50;
const GAMEWIDTH = 300;
const GAMEHEIGHT = 500;
const STEP = 50;

function updateCubePosition() {
    cube.style.left = `${cubePosition.x}px`;
    cube.style.top = `${cubePosition.y}px`;
}

function moveDown() {
    cubePosition.y += STEP;
    updateCubePosition();

    if (cubePosition.y >= GAMEHEIGHT - CUBESIZE) {
        clearInterval(moveInterval);
        document.removeEventListener('keydown', handleKeyPress); 
    }
}

const operations = {
    37: (cube) => cubePosition.x = Math.max(0, cubePosition.x - CUBESIZE),
    65: (cube) => cubePosition.x = Math.max(0, cubePosition.x - CUBESIZE),
    39: (cube) => cubePosition.x = Math.min(GAMEWIDTH - CUBESIZE, cubePosition.x + CUBESIZE),
    68: (cube) => cubePosition.x = Math.min(GAMEWIDTH - CUBESIZE, cubePosition.x + CUBESIZE),
};


function handleKeyPress(e){
    operations[e.keyCode](cube);
    updateCubePosition();
}

document.addEventListener('keydown', handleKeyPress);

const moveInterval = setInterval(moveDown, 1000);

updateCubePosition();