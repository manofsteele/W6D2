class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('ul').on("click", (event) => {
      console.log($(event.target));
      console.log($(event.target).data("pos"));
      console.log(event);
      this.makeMove($(event.target));
    });
  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));
    $square.css("background-color", "white");
    $square.text(`${mark}`);
    // $("li").css("background-color", "white");
  }

  setupBoard() {
    let $grid = $("<ul></ul>");
    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        let $li = $("<li></li>");
        $li.data("pos", [i,j]);
        $grid.append($li);
      }
    }
    this.board.append($grid);
  }

}

module.exports = View;
