

const player = (name, symbol) => {
  
    return {name, symbol}
}

const board = (() => {
    let values = [];
    let cells = getBoard();
    let text = document.querySelector('#text-box');
    
    const init = () => {
        values = ['', '', '', '', '', '', '', '', ''];
        if(text.textContent != '') {
            text.classList.toggle('fade');
        }
        setTimeout(() => {text.textContent = '';}, 700);
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

    const unlisten = () => {
        for(let i = 0; i <= 8; i++) {
            cells[i].removeEventListener('click', mark);
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

    return {init, getValues, unlisten};
    })();

const play = (() => {
    let p1, p2, currentPlayer;
    const text = document.querySelector('#text-box');
    const p1Box = document.querySelector('#p1');
    const p2Box = document.querySelector('#p2');
    
    const reset = () => {
        if(p1 === undefined) {
            return;
        } else {
            board.init();
            if(p2Box.classList.contains('active')) {
                toggleNamesUi();
            }
            currentPlayer = p1;
        }
    }
   
    const newGame = () => {
        let p1Name = prompt("What is player one's name?");;
        let p2Name = prompt("what is player two's name?");
        addNamesUi(p1Name, p2Name);
        p1 = player(p1Name, 'X');
        p2 = player(p2Name, 'O');
        board.init();
        currentPlayer = p1;
    }

    const addNamesUi = (p1Name, p2Name) => {
        document.querySelectorAll('#name1').forEach(e => e.remove());
        let name1 = document.createElement('p');
        name1.id = 'name1';
        name1.className = 'names';
        p1Box.classList.add('active');
        name1.textContent = p1Name;
        p1Box.appendChild(name1);

        document.querySelectorAll('#name2').forEach(e => e.remove());
        let name2 = document.createElement('p');
        name2.id = 'name2';
        name2.className = 'names';
        name2.textContent = p2Name;
        p2Box.appendChild(name2);
    }

    const toggleNamesUi = () => {
        p1Box.classList.toggle('active');
        p2Box.classList.toggle('active');
    }

    const switchPlayers = () => {
        if (currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
        toggleNamesUi();
        return currentPlayer;
    }

    const getPlayer = () => {
        return currentPlayer;
    }

    const checkWin = () => {   
        let row1 = [board.getValues()[0], board.getValues()[1], board.getValues()[2]]; 
        let row2 = [board.getValues()[3], board.getValues()[4], board.getValues()[5]];
        let row3 = [board.getValues()[6], board.getValues()[7], board.getValues()[8]];
        let col1 = [board.getValues()[0], board.getValues()[3], board.getValues()[6]];
        let col2 = [board.getValues()[1], board.getValues()[4], board.getValues()[7]];
        let col3 = [board.getValues()[2], board.getValues()[5], board.getValues()[8]];
        let diag1 = [board.getValues()[0], board.getValues()[4], board.getValues()[8]];
        let diag2 = [board.getValues()[2], board.getValues()[4], board.getValues()[6]]

        if ((row1.every(e => e === 'X')) || (row1.every(e => e === 'O')) || 
            (row2.every(e => e === 'X')) || (row2.every(e => e === 'O')) || 
            (row3.every(e => e === 'X')) || (row3.every(e => e === 'O')) || 
            (col1.every(e => e === 'X')) || (col1.every(e => e === 'O')) || 
            (col2.every(e => e === 'X')) || (col2.every(e => e === 'O')) || 
            (col3.every(e => e === 'X')) || (col3.every(e => e === 'O')) ||
            (diag1.every(e => e === 'X')) || (diag1.every(e => e === 'O')) || 
            (diag2.every(e => e === 'X')) || (diag2.every(e => e === 'O'))) 
            {   
                board.unlisten();
                declareWinner();
            } else if (board.getValues().every(e => e != '')) {
                board.unlisten();
                declareDraw();
            }
    }

    const declareDraw = () => {
        text.textContent = `It's a draw!`;
        text.classList.toggle('fade');
    }

    const declareWinner = () => {
        text.textContent = `${play.getPlayer().name} is the winner!`; 
        text.classList.toggle('fade');
    }

    return {reset, getPlayer, checkWin, switchPlayers, newGame};
})();

const resetBtn = (() => {
    const btn = document.getElementById("reset");
    btn.addEventListener('click', play.reset);
})();

const newGameBtn = (() => {
    const btn = document.querySelector('#new-game');
    btn.addEventListener('click', play.newGame);
})();


    
  

