window.addEventListener('load', main);

let character: HTMLElement | null;
let position = {
    bottom: 0,
    left: 0
}
function main() {
    character = document.querySelector('img');
    turnOnGravity()
    runGameLoop()
    addEventListeners();
}

function addEventListeners() {
    window.addEventListener('keydown', handleUserInput);
}

function runGameLoop() {
    setInterval(function() {
        turnOnGravity()
        renderCharacter()
    }, 10)
}

function turnOnGravity(){
        position.bottom -= 1;
        if(position.bottom < 0){
            position.bottom = 0;
        } 
    }
}

function renderCharacter() {
    if(character){
        character.style.bottom = position.bottom + "%";
        character.style.left = position.left + "%"
    } 
}

function handleUserInput(event: KeyboardEvent) {
    console.log(event.key)
    switch (event.key) {
        case 'ArrowLeft': 
            position.left -= 1;
            break;
        case 'ArrowRight': 
            position.left += 1;
            break;
        case ' ': 
            position.bottom += 20;
            break;
        case 'ArrowDown': 
            position.bottom -= 10;
            break;
    }
  
}

