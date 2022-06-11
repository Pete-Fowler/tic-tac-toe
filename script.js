

const player = (name, symbol) => {
   return {name, symbol};
}

const p1 = player('jeff', 'X'); // for testing, will need to be moved to gameplay handler


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
            cells[i].addEventListener('click', mark);
        }
    }
       // Mark with symbol on cell click
    const mark = (e) => {
        e.target.textContent = `${p1.symbol}`;
        values[e.target.id] = p1.symbol;
        console.log(values);
    }

    return {init};
    })();
    
    board.init();
  

