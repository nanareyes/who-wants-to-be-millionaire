class GameState{
  currentSection = "intro";
  questionLevel = 0;
  selectedAnswer = undefined;
  prizes = ['100.000', '500.000', '2.000.000', '5.000.000', '10.000.000'];
  question = {};
  isCorrectAnswer = false;
  events = {
    //funcion que se ejecuta cada que cambia current section
    onSetCurrentSection:()=>{},
    // funcion que se ejecuta cada que cambia selected answer
    onSetSelectedAnswer:()=>{},
    // funcion que ejecuta al dar siguiente en la vista de respuestas
    onPlayNext:()=>{},
  };

  reset(){
    this.currentSection = 'intro';
    this.questionLevel = 0;
    this.selectedAnswer = undefined;
    this.question = {};
    this.isCorrectAnswer = false;
  }

  setCurrentSection(currentSection){
    this.currentSection = currentSection;
    this.events.onSetCurrentSection();
  }

  setQuestionLevel(questionLevel){
    this.questionLevel = questionLevel
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