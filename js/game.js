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
    if(currentSection === "question"){
      const question = this.getQuestion();
      this.gameView.setQuestion(question);

    }
    this.gameView.displayCurrentSection(this.currentSection);


  }
  getQuestion(){
    const questionsArray = questions[this.currentQuestion]
    const numberQuestion = Math.floor(Math.random()*(questionsArray.length))
    //console.log(numberQuestion)
    const question = questionsArray[numberQuestion];
    return question;
  }

}
//console.log(questionsArray)
const game = new Game();
game.start();
