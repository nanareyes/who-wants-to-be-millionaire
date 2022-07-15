import { GameView } from "./game.view.js";
import {questions} from "./dbQuestions.js"
import { GameState } from "./game.state.js";

class Game {
  gameView;
  gameState;


  start() {
    this.gameView = new GameView();
    this.gameState = new GameState();
    this.gameView.setState(this.gameState);
    this.gameView.createViews();
    this.gameView.displayCurrentSection();
    this.gameState.events.onSetCurrentSection = ()=>{
      this.changeCurrentSection();
    }
  }

  changeCurrentSection(){
    if(this.gameState.currentSection === "question"){
      const question = this.getQuestion();
      this.gameState.setQuestion(question);
    }
    this.gameView.displayCurrentSection();


  }
  getQuestion(){
    const questionsArray = questions[this.gameState.questionLevel]
    const numberQuestion = Math.floor(Math.random()*(questionsArray.length))
    //console.log(numberQuestion)
    return questionsArray[numberQuestion];
  }

}
//console.log(questionsArray)
const game = new Game();
game.start();
