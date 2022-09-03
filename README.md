<a href='https://pete-fowler.github.io/tic-tac-toe/'>Live page</a>

This game was written with vanilla JavaScript. It uses immediately invoked function expressions in a revealing module pattern. This seemed like an excellent way to better organize code, avoid using more global namespace, and to encapsulate variables or methods that don't need to be global.

The most difficult thing about this project was learning how to make the separate IIFE modules work together, such as trying to use the currentPlayer variable within the player.newGame. I had to learn that I could not simply declare currentPlayer in the play IIFE and outside the newGame method, and then change it within the newGame method (a click event listener), and then return currentPlayer. This is because that way returned essentailly a snapshot of the variable at moment in time rather than the actual current value. Returning a getPlayer method that returns currentPlayer solved this problem.

