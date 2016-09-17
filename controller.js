var controller = {
  init: function() {
    model.init();
    view.init();
    this.getBoard();
    this.gameLoop();
  },

  getBoard: function() {
    var tiles = model.totalTiles;
    view.placeBoard(tiles);
  },

  getScore: function() {
    var score = model.score;
    view.renderScore(score);
  },

  reRender: function () {
    view.clear();
    view.render(model.currentPiece, model.grid);
  },

  gameLoop: function() {
    model.generatePiece();
    var counter = 0;
    thatController = this;
    setInterval(function() {
      if(counter % 1 === 0) {
        model.movePiece(model.keyPress);
      }
      if(counter % 10 === 0) {
        model.fallPiece();
      } 
      //logic, validations
      model.checkForBoundary();
      model.clearLines();
      //rerender
      thatController.reRender();
      thatController.getScore();
      counter ++;
    }, 20)
  }


}