

const player = (name, symbol) => {
   return {name, symbol};
}

const p1 = player('jeff', 'X'); // for testing, will need to be moved to gameplay handler

const play = (() => {
    let currentPlayer = p1;
    return {currentPlayer}
})();

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
        e.target.textContent = `${play.currentPlayer.symbol}`;
        values[e.target.id] = play.currentPlayer.symbol;
    }

    return {init};
    })();
    
    // move this to gamePlay and activate on new game button click
    board.init(); 
  

