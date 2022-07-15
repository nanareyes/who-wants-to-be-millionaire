import { GameView } from "./game.view.js";

class Game {
  currentSection = "lose";
  currentQuestion = 0;
  totalPrize = 0;
  gameView;

  start() {

    this.gameView = new GameView();
    this.gameView.createViews({
      onChangeCurrentSection:  (currentSection) => {
        this.changeCurrentSection(currentSection);
      }
    });
    this.gameView.displayCurrentSection(this.currentSection);
    console.log("current ", this)
  }

  changeCurrentSection(currentSection){
    console.log("current ", this)
    console.log("current section", currentSection)
    console.log("current ", this)

    this.currentSection = currentSection;
    this.gameView.displayCurrentSection(this.currentSection);

  }
}

const game = new Game();
game.start();
