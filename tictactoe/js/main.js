const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

$( () => {
  game = new Game();
  const $board = $("figure");
  view = new View(game, $board);
});
