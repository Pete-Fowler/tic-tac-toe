

const board = (() => {
    init: function() {
        let values = ['X', 'O', 'X', 'O', 'X', 'O','X', 'O'];
    },
    cacheDom: function () {
        for(let i = 0; i <= 8; i++) {
            const board[i] = document.getElementById(`#${i}`);   
        }
    },
    render: function () {

    },
    })();

const player = (name, symbol) => {

    return {name, symbol};
};