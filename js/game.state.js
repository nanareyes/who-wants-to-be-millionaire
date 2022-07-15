class GameState{
  currentSection = "intro";
  questionLevel = 0;
  totalPrize = 0;
  question = {};
  events = {
    //funcion que se ejecuta cada que cambia current section
    onSetCurrentSection:()=>{}
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

}

export {GameState};