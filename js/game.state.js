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

  saveToStorage(){
    localStorage.setItem("wwtbmCurrentSection", this.currentSection);
    localStorage.setItem("wwtbmQuestionLevel", this.questionLevel);
    localStorage.setItem("wwtbmQuestion", JSON.stringify(this.question));
    localStorage.setItem("wwtbmSelectedAnswer",this.selectedAnswer);
    localStorage.setItem("wwtbmIsCorrectAnswer", this.isCorrectAnswer);
  }

  reset(){
    this.currentSection = 'intro';
    this.questionLevel = 0;
    this.selectedAnswer = undefined;
    this.question = {};
    this.isCorrectAnswer = false;
    this.saveToStorage();
  }

  getCurrentSection(){
    const wwtbmCurrentSection = localStorage.getItem("wwtbmCurrentSection");
    if(wwtbmCurrentSection){
      this.currentSection = wwtbmCurrentSection;
    }
    return this.currentSection;
  }

  setCurrentSection(currentSection){
    this.currentSection = currentSection;
    localStorage.setItem("wwtbmCurrentSection", this.currentSection);
    this.events.onSetCurrentSection();
  }

  getQuestionLevel(){
    const wwtbmQuestionLevel = localStorage.getItem("wwtbmQuestionLevel");
    if(wwtbmQuestionLevel){
      this.questionLevel = parseInt(wwtbmQuestionLevel);
    }
    return this.questionLevel;
  }

  setQuestionLevel(questionLevel){
    this.questionLevel = questionLevel
    localStorage.setItem("wwtbmQuestionLevel", this.questionLevel);
  }

  getQuestion(){
    const wwtbmQuestion = localStorage.getItem("wwtbmQuestion");
    if(wwtbmQuestion){
      this.question = JSON.parse(wwtbmQuestion);
    }
    return this.question;
  }
  setQuestion(question){
    this.question = question
    localStorage.setItem("wwtbmQuestion", JSON.stringify(this.question));

  }
  setEvents(events){
    this.events = events;
  }

  getSelectedAnswer(){
    const wwtbmSelectedAnswer = localStorage.getItem("wwtbmSelectedAnswer")
    if(wwtbmSelectedAnswer){
      this.selectedAnswer = parseInt(wwtbmSelectedAnswer)
    }
    return this.selectedAnswer;
  }

  setSelectedAnswer(selectedAnswer){
    this.selectedAnswer = selectedAnswer;
    localStorage.setItem("wwtbmSelectedAnswer",this.selectedAnswer);
    this.events.onSetSelectedAnswer();
    console.log(selectedAnswer);
  }

  getIsCorrectAnswer(){
    const wwtbmIsCorrectAnswer = localStorage.getItem("wwtbmIsCorrectAnswer")
    if(wwtbmIsCorrectAnswer){
      this.isCorrectAnswer = wwtbmIsCorrectAnswer === "true"
    }
    return this.isCorrectAnswer;
  }

  setIsCorrectAnswer(isCorrectAnswer){
    this.isCorrectAnswer = isCorrectAnswer;
    localStorage.setItem("wwtbmIsCorrectAnswer", this.isCorrectAnswer);
  }

}

export {GameState};