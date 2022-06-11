// 4. functions to allow players to click to place markers
// add event listeners to cells, calling a mark function on click
// add mark function to player. mark will need to use player name and symbol

const player = (name, symbol) => {
   
    // Mark with symbol on cell click
    const mark = (e) => {
        e.target.textContent = `${symbol}`;
    }
    return {mark};
}

const p1 = player('jeff', 'x');


const board = (() => {
    let values = ['', '', '', '', '', '', '', '', ''];
    let cells = getBoard();
    
    const init = () => {
        render();
        listen();
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
            cells[i].addEventListener('click', p1.mark);
        }
    }

    return {init};
    })();
    
    board.init();
  

