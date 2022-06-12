The most difficult thing about this project for me was learning how to make the separate immediately invoked function expression revealing modules work together. The main source I was using to learn did a great job of introducing factories and IIFE modules, but hardly touched on how to make them work together and how to actually use the exposed return objects.

The greatest challenge here was trying to use the currentPlayer variable within the player.newGame. It took quite a bit of struggling to eventually learn that I could not simply declare currentPlayer in the play IIFE and outside the newGame method, and then change it within the newGame method (a click event listener), and then return currentPlayer. This is because that way is returning an object that was a snapshot of the variable at moment in time. Returning a getPlayer method that returns currentPlayer solved this problem. It also required realizing I must use play.getPlayer() instead of play.getPlayer.

pseudocode:

You land on the page and see a title, a blank board, and some buttons:
    A way start a new game (reset board but keep player names)

The text box on the bottom will display buttons for playerNames that get highlighted on whose turn it is

You enter X's and O's until the match is detected, and a message goes into the text box about winner


