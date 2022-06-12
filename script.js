

const player = (name, symbol) => {
   return {name, symbol};
}

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
    const listen = () => {
        for(let i = 0; i <= 8; i++) {
            cells[i].addEventListener('click', mark);
        }
    }
    const mark = (e) => {
        e.target.textContent = `${play.currentPlayer.symbol}`;
        values[e.target.id] = play.currentPlayer.symbol;
        play.switchPlayers();
    }

    return {init};
    })();

const play = (() => {
    let p1Name = prompt("What is player one's name?");
    let p2Name = prompt("what is player two's name?");
    board.init();
    
    let p1 = player(p1Name, 'X');
    let p2 = player(p2Name, 'O');
    let currentPlayer = p1;
    
    const switchPlayers = () => {
        if (currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
        return currentPlayer;
    }

    return {currentPlayer, switchPlayers};
})();

const newGameBtn = (() => {
    const btn = document.getElementById("new-game");
    btn.addEventListener('click', board.init);
})();


    
  

