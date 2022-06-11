const board = (() => {
    let values = ['X', 'O', 'X', 'O', 'X', 'O','X', 'O', 'X'];
    function init() {
        render();
    }
    function getBoard() { 
        const board = Array.from(document.querySelectorAll('.cell'));
        return board;
    }
    
    function render() { 
        let board = getBoard();
        for(let i = 0; i <= 8; i++) {
            board[i].textContent = `${values[i]}`;
        }
    }
    return {init};
    })();

const player = (name, symbol) => {

    return {name, symbol};
};

board.init();