

const player = (name, symbol) => {
   return {name, symbol};
}

// const p1 = player('jeff', 'X'); // for testing, will need to be moved to gameplay handler

const play = (() => {

    // Handles click of New Game button
   
    const newGame = () => {
        let p1Name = prompt("What is player one's name?");
        let p2Name = prompt("what is player two's name?");
        board.init();
        let p1 = player(p1Name, 'X');
        let p2 = player(p2Name, 'O');
        let currentPlayer = p1;
        return {p1, p2, currentPlayer};
    }

    return {newGame};
    // for testing
    // let currentPlayer = p1;
    // return {currentPlayer}
})();

const newGameBtn = (() => {
    const init = () => {
        const btn = document.getElementById("new-game");
        console.log(btn);
        btn.addEventListener('click', play.newGame);
        
    }
    return {init};
})();
newGameBtn.init();

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
    
  

