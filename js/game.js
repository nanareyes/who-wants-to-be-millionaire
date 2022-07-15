import { GameView } from "./game.view.js";
import {questions} from "./dbQuestions.js"

class Game {
  currentSection = "start-question";
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
  }

  changeCurrentSection(currentSection){
    this.currentSection = currentSection;
    this.gameView.displayCurrentSection(this.currentSection);
    if(currentSection === "question"){
      const question = this.getQuestion();
      console.log(question);
    }

  }
  getQuestion(){
    const questionsArray = questions[this.currentQuestion]
    const numberQuestion = Math.floor(Math.random()*(questionsArray.length))
    console.log(numberQuestion)
    const question = questionsArray[numberQuestion];
    console.log(question)
  }

}
//console.log(questionsArray)
const game = new Game();
game.start();
