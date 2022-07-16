class GameState{
  currentSection = "start-question";
  questionLevel = 0;
  selectedAnswer = undefined;
  totalPrize = 0;
  question = {};
  isCorrectAnswer = false;
  events = {
    //funcion que se ejecuta cada que cambia current section
    onSetCurrentSection:()=>{},
    // funcion que se ejecuta cada que cambia selected answer
    onSetSelectedAnswer:()=>{}
  };

  setCurrentSection(currentSection){
    this.currentSection = currentSection;
    this.events.onSetCurrentSection();
  }

  setQuestionLevel(questionLevel){
    this.questionLevel = questionLevel
  }

  setTotalPrize(totalPrize){
    this.totalPrize = totalPrize
  }
  setQuestion(question){
    this.question = question
  }
  setEvents(events){
    this.events = events;
  }

  setSelectedAnswer(selectedAnswer){
    this.selectedAnswer = selectedAnswer;
    this.events.onSetSelectedAnswer();
    console.log(selectedAnswer)
  }
  setIsCorrectAnswer(isCorrectAnswer){
    this.isCorrectAnswer = isCorrectAnswer;
  }

}

export {GameState};