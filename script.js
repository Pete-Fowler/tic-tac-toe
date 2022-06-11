// 4. functions to allow players to click to place markers
// add event listeners to cells, calling a mark function on click
// add mark function to player. mark will need to use player name and symbol

const board = (() => {
    let values = ['X', 'O', 'X', 'O', 'X', 'O','X', 'O', 'X'];
    let cells = getBoard();
    
    const init = () => {
        render();
    }
    function getBoard () { 
        const cells = Array.from(document.querySelectorAll('.cell'));
        return cells;
    }
    const render = () => {
        for(let i = 0; i <= 8; i++) {
            cells[i].textContent = `${values[i]}`;
        }
    }

    // bind cell event listeners
    const listen = () => {
        for(let i = 0; i <= 8; i++) {
            cells[i].addEventListener('click', player.mark);
        }
    }

    return {init, listen};
    })();

const player = (name, symbol) => {
  
    return {};
}

board.init();
// const p1 = player('Alex', 'X');   ---- this was able too use board.test()
// p1.play();