

const player = (name, symbol) => {
  
    return { name, symbol}
}

const board = (() => {
    let values = ['', '', '', '', '', '', '', '', ''];
    let cells = getBoard();
    
    const init = () => {
        // render();                                may not be needed
        listen();
    }
    
    function getBoard () { 
        const cells = Array.from(document.querySelectorAll('.cell'));
        return cells;
    }
    
    // const render = () => {                       may not be needed
    //     for(let i = 0; i <= 8; i++) {
    //         cells[i].textContent = `${values[i]}`;
    //     }
    // }
    
    const listen = () => {
        for(let i = 0; i <= 8; i++) {
            cells[i].addEventListener('click', mark);
        }
    }
    
    const mark = (e) => {
        if (values[e.target.id] === '') {
            e.target.textContent = `${play.getPlayer().symbol}`;
            values[e.target.id] = play.getPlayer().symbol;
            play.checkWin();
            play.switchPlayers();
        }

    }

    const getValues = () => {
        return values;
    }

    return {init, getValues};
    })();

const play = (() => {
    let p1, p2, currentPlayer;
    
    const newGame = () => {
        let p1Name = prompt("What is player one's name?");
        let p2Name = prompt("what is player two's name?");
        board.init();

        p1 = player(p1Name, 'X');
        p2 = player(p2Name, 'O');
        currentPlayer = p1;
    }
   
    const switchPlayers = () => {
        if (currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
        return currentPlayer;
    }

    const getPlayer = () => {
        return currentPlayer;
    }

    const checkWin = () => {
        // 012 345 678 048 642
        const condition = ((board.getValues()[0] && board.getValues()[1] && 
        board.getValues()[2]) || (board.getValues()[3] && board.getValues()[4] 
        && board.getValues()[5]) || (board.getValues()[6] && 
        board.getValues()[7] && board.getValues()[8]) || (board.getValues()[0] 
        && board.getValues()[4] && board.getValues()[8]) || 
        (board.getValues()[6] && board.getValues()[4] && 
        board.getValues()[2]));
        
        if ( condition === ('X')) {
                declareWinner();
            } else if (condition === 'O') {
                declareWinner();
            }
    }

    const declareWinner = () => {
        let text = document.querySelector('#text-box');
        text.textContent = `${play.getPlayer.name} is the winner!`;
    }

    return {newGame, getPlayer, switchPlayers, checkWin};
})();

const newGameBtn = (() => {
    const btn = document.getElementById("new-game");
    btn.addEventListener('click', play.newGame);
})();


    
  

