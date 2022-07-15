export class GameView {
  gameState;

  setState(gameState){
    this.gameState = gameState;
  }

  createViews(){
    this.createViewIntro();
    this.createViewStartQuestion();
    this.createViewQuestion();
    this.createViewAnswer();
    this.createViewWin();
    this.createViewLose()
  }

  createViewIntro(){
    //busca el contenedor ppal
    const container = document.getElementById('container');
    // Se crea el titulo
    const gameTitleH1 = document.createElement('h1');
    gameTitleH1.textContent = 'QUIÉN QUIERE SER MILLONARIO?';
    // Se crea el intro del juego
    const sectionIntro = document.createElement('section');
    sectionIntro.id = "intro";
    sectionIntro.classList.add("inactiveSection");
    const sectionIntroBtn = document.createElement('button');
    sectionIntroBtn.classList.add("btn", "btnIntro");
    sectionIntroBtn.textContent = 'Empezar a jugar';
    sectionIntroBtn.addEventListener("click", () => {this.gameState.setCurrentSection("start-question")})
    sectionIntro.append(gameTitleH1, sectionIntroBtn);
    container.append(sectionIntro);
  }

  createViewStartQuestion(){
    //Se crea la seccion de start-question
    const sectionStartQuestionTitleH1 = document.createElement('h1');
    sectionStartQuestionTitleH1.textContent = 'QUIÉN QUIERE SER MILLONARIO?';
    const sectionStartQuestion = document.createElement('section');
    sectionStartQuestion.id = "start-question";
    sectionStartQuestion.classList.add("inactiveSection");
    const sectionStartQuestionDiv = document.createElement('div')
    sectionStartQuestionDiv.classList.add('btnStartQuestion');
    const sectionStartQuestionBtnNumber = document.createElement('button');
    sectionStartQuestionBtnNumber.classList.add("btnGame", "btnQuestionNumber");
    sectionStartQuestionBtnNumber.textContent = 'Pregunta 1';
    const sectionStartQuestionBtnPrice = document.createElement('button');
    sectionStartQuestionBtnPrice.classList.add("btnGame", "btnQuestionPrice");
    sectionStartQuestionBtnPrice.textContent = '$100.000';
    const sectionStartQuestionBtnPlay = document.createElement('button');
    sectionStartQuestionBtnPlay.classList.add("btnGame", "btnQuestionPlay");
    sectionStartQuestionBtnPlay.textContent = 'Jugar';
    sectionStartQuestionBtnPlay.addEventListener("click", () => {this.gameState.setCurrentSection("question")})
    sectionStartQuestionDiv.append(sectionStartQuestionBtnNumber,sectionStartQuestionBtnPrice,sectionStartQuestionBtnPlay)
    sectionStartQuestion.append(sectionStartQuestionTitleH1, sectionStartQuestionDiv);

    container.append(sectionStartQuestion);
  }

  createViewQuestion(){
    //Se crea la seccion de question
    const sectionQuestion = document.createElement("section");
    sectionQuestion.id = "question";
    sectionQuestion.classList.add("inactiveSection");
    const sectionQuestionTitleH1 =  document.createElement('h1');
    sectionQuestionTitleH1.textContent = 'QUIÉN QUIERE SER MILLONARIO?';
    const sectionQuestionBtnQuestionTitle = document.createElement('button');
    sectionQuestionBtnQuestionTitle.classList.add("btnQuestionTitle","btnGame");
    sectionQuestionBtnQuestionTitle.textContent = '';
    const sectionQuestionDiv = document.createElement('div');
    sectionQuestionDiv.classList.add("btnQuestion");

    const sectionQuestionBtnQuestionA = document.createElement('button');
    sectionQuestionBtnQuestionA.classList.add("btnGame","btnOption");
    const sectionQuestionBtnSpanLetter = document.createElement('span');
    sectionQuestionBtnSpanLetter.classList.add("btnSpanLetter");
    sectionQuestionBtnSpanLetter.textContent = "A";
    const sectionQuestionBtnSpanOption = document.createElement('span');
    sectionQuestionBtnSpanOption.classList.add("spanOption");
    sectionQuestionBtnSpanOption.textContent = "9";
    sectionQuestionBtnQuestionA.addEventListener("onclick",this.question)
    sectionQuestionBtnQuestionA.appendChild(sectionQuestionBtnSpanLetter);
    sectionQuestionBtnQuestionA.appendChild(sectionQuestionBtnSpanOption);

    const sectionQuestionBtnQuestionB = document.createElement('button');
    sectionQuestionBtnQuestionB.classList.add("btnGame","btnOption");
    const sectionQuestionBtnSpanLetterB = document.createElement('span');
    sectionQuestionBtnSpanLetterB.classList.add("btnSpanLetter");
    sectionQuestionBtnSpanLetterB.textContent = "B";
    const sectionQuestionBtnSpanOptionB = document.createElement('span');
    sectionQuestionBtnSpanOptionB.classList.add("spanOption");
    sectionQuestionBtnSpanOptionB.textContent = "13";
    sectionQuestionBtnQuestionB.appendChild(sectionQuestionBtnSpanLetterB);
    sectionQuestionBtnQuestionB.appendChild(sectionQuestionBtnSpanOptionB);

    const sectionQuestionBtnQuestionC = document.createElement('button');
    sectionQuestionBtnQuestionC.classList.add("btnGame","btnOption");
    const sectionQuestionBtnSpanLetterC = document.createElement('span');
    sectionQuestionBtnSpanLetterC.classList.add("btnSpanLetter");
    sectionQuestionBtnSpanLetterC.textContent = "C";
    const sectionQuestionBtnSpanOptionC = document.createElement('span');
    sectionQuestionBtnSpanOptionC.classList.add("spanOption");
    sectionQuestionBtnSpanOptionC.textContent = "10";
    sectionQuestionBtnQuestionC.appendChild(sectionQuestionBtnSpanLetterC);
    sectionQuestionBtnQuestionC.appendChild(sectionQuestionBtnSpanOptionC);

    const sectionQuestionBtnQuestionD = document.createElement('button');
    sectionQuestionBtnQuestionD.classList.add("btnGame","btnOption");
    const sectionQuestionBtnSpanLetterD = document.createElement('span');
    sectionQuestionBtnSpanLetterD.classList.add("btnSpanLetter");
    sectionQuestionBtnSpanLetterD.textContent = "D";
    const sectionQuestionBtnSpanOptionD = document.createElement('span');
    sectionQuestionBtnSpanOptionD.classList.add("spanOption");
    sectionQuestionBtnSpanOptionD.textContent = "11";
    sectionQuestionBtnQuestionD.appendChild(sectionQuestionBtnSpanLetterD);
    sectionQuestionBtnQuestionD.appendChild(sectionQuestionBtnSpanOptionD);
    sectionQuestionDiv.append(sectionQuestionBtnQuestionA,sectionQuestionBtnQuestionB,sectionQuestionBtnQuestionC,sectionQuestionBtnQuestionD)

    sectionQuestion.append(sectionQuestionTitleH1,sectionQuestionBtnQuestionTitle,sectionQuestionDiv)
    container.append(sectionQuestion)

  }

  createViewAnswer(){
    const sectionAnswer = document.createElement("section");
    sectionAnswer.id = "answer";
    sectionAnswer.classList.add("inactiveSection");
    const sectionAnswerTitleH1 =  document.createElement('h1');
    sectionAnswerTitleH1.textContent = 'QUIÉN QUIERE SER MILLONARIO?';
    const sectionAnswernBtnQuestionTitle = document.createElement('button');
    sectionAnswernBtnQuestionTitle.classList.add("btnGame","btnQuestionTitle");
    sectionAnswernBtnQuestionTitle.textContent = "¿Qué obra de Dante Alighieri cuenta con tres partes, 'Infierno', 'Purgatorio' y 'Paraíso'?";
    const sectionAnswerDiv = document.createElement('div');
    sectionAnswerDiv.classList.add("btnQuestion");

    const sectionAnswerBtnQuestionA = document.createElement('button');
    sectionAnswerBtnQuestionA.classList.add("btnGame","btnQuestionAnswerOk");
    const sectionAnswerBtnSpanLetter = document.createElement('span');
    sectionAnswerBtnSpanLetter.classList.add("btnSpanLetter");
    sectionAnswerBtnSpanLetter.textContent = "A";
    const sectionAnswerBtnSpanOption = document.createElement('span');
    sectionAnswerBtnSpanOption.classList.add("spanOption");
    sectionAnswerBtnSpanOption.textContent = "9";
    sectionAnswerBtnQuestionA.appendChild(sectionAnswerBtnSpanLetter);
    sectionAnswerBtnQuestionA.appendChild(sectionAnswerBtnSpanOption);

    const sectionAnswerBtnQuestionB = document.createElement('button');
    sectionAnswerBtnQuestionB.classList.add("btnGame","btnQuestionAnswerWrong");
    const sectionAnswerBtnSpanLetterB = document.createElement('span');
    sectionAnswerBtnSpanLetterB.classList.add("btnSpanLetter");
    sectionAnswerBtnSpanLetterB.textContent = "B";
    const sectionAnswerBtnSpanOptionB = document.createElement('span');
    sectionAnswerBtnSpanOptionB.classList.add("spanOption");
    sectionAnswerBtnSpanOptionB.textContent ="10";
    sectionAnswerBtnQuestionB.appendChild(sectionAnswerBtnSpanLetterB);
    sectionAnswerBtnQuestionB.appendChild(sectionAnswerBtnSpanOptionB);

    const sectionAnswerBtnQuestionC = document.createElement('button');
    sectionAnswerBtnQuestionC.classList.add("btnGame","btnQuestionAnswer");
    const sectionAnswerBtnSpanLetterC = document.createElement('span');
    sectionAnswerBtnSpanLetterC.classList.add("btnSpanLetter");
    sectionAnswerBtnSpanLetterC.textContent = "C";
    const sectionAnswerBtnSpanOptionC = document.createElement('span');
    sectionAnswerBtnSpanOptionC.classList.add("spanOption");
    sectionAnswerBtnSpanOptionC.textContent ="11";
    sectionAnswerBtnQuestionC.appendChild(sectionAnswerBtnSpanLetterC);
    sectionAnswerBtnQuestionC.appendChild(sectionAnswerBtnSpanOptionC);

    const sectionAnswerBtnQuestionD = document.createElement('button');
    sectionAnswerBtnQuestionD.classList.add("btnGame","btnQuestionAnswer");
    const sectionAnswerBtnSpanLetterD = document.createElement('span');
    sectionAnswerBtnSpanLetterD.classList.add("btnSpanLetter");
    sectionAnswerBtnSpanLetterD.textContent = "D";
    const sectionAnswerBtnSpanOptionD = document.createElement('span');
    sectionAnswerBtnSpanOptionD.classList.add("spanOption");
    sectionAnswerBtnSpanOptionD.textContent ="15";
    sectionAnswerBtnQuestionD.appendChild(sectionAnswerBtnSpanLetterD);
    sectionAnswerBtnQuestionD.appendChild(sectionAnswerBtnSpanOptionD);

    const sectionAnswerBtnPlay = document.createElement('button');
    sectionAnswerBtnPlay.classList.add("btn","btnQuestionPlay");
    sectionAnswerBtnPlay.textContent = "Siguiente";
    sectionAnswerBtnPlay.addEventListener("click", () => {this.gameState.setCurrentSection("start-question")})

    sectionAnswerDiv.append(sectionAnswerBtnQuestionA,sectionAnswerBtnQuestionB,sectionAnswerBtnQuestionC,sectionAnswerBtnQuestionD);
    sectionAnswer.append(sectionAnswerTitleH1,sectionAnswernBtnQuestionTitle,sectionAnswerDiv, sectionAnswerBtnPlay)
    container.append(sectionAnswer);
  }

  createViewWin(){
    const sectionWin = document.createElement("section");
    sectionWin.id = "win";
    sectionWin.classList.add("inactiveSection");
    const sectionWinTitleH1 =  document.createElement('h1');
    sectionWinTitleH1.textContent = 'HAS GANADO!';
    const sectionWinDiv = document.createElement('div');
    sectionWinDiv.classList.add("btnStartQuestion");
    const sectionWinBtn = document.createElement('button');
    sectionWinBtn.classList.add("btnGame", "btnWin");
    sectionWinBtn.textContent = "$100.000.000"
    const sectionWinBtnPlayAgain = document.createElement("button");
    sectionWinBtnPlayAgain.classList.add("btn", "btnPlayAgain");
    sectionWinBtnPlayAgain.textContent = "Volver a empezar";
    sectionWinBtnPlayAgain.addEventListener("click", () => {this.gameState.setCurrentSection("intro")})

    sectionWinDiv.append(sectionWinBtn);
    sectionWin.append(sectionWinTitleH1,sectionWinDiv,sectionWinBtnPlayAgain);
    container.append(sectionWin);
  }

  createViewLose(){
    const sectionLose = document.createElement("section");
    sectionLose.id = "lose";
    sectionLose.classList.add("inactiveSection");
    const sectionLoseTitleH1 =  document.createElement('h1');
    sectionLoseTitleH1.textContent = 'HAS PERDIDO';
    const sectionLoseBtnPlayAgain = document.createElement("button");
    sectionLoseBtnPlayAgain.classList.add("btn", "btnPlayAgain");
    sectionLoseBtnPlayAgain.textContent = "Volver a empezar";
    sectionLoseBtnPlayAgain.addEventListener("click", () => {this.gameState.setCurrentSection("intro")})

    sectionLose.append(sectionLoseTitleH1,sectionLoseBtnPlayAgain);
    container.append(sectionLose);
  }

  // Reemplaza el contenido de la pregunta
  updateQuestionContent() {
    // Busca el boton donde esta la pregunta
    const buttonTitle = document.querySelector("#question button.btnQuestionTitle");
    const question = this.gameState.question;
    if (buttonTitle) {
      buttonTitle.textContent = question.title;
    }
    // Busca el boton de las respuestas
    const buttonFirstAnswer = document.querySelector("#question > div > button:nth-child(1) > span.spanOption");
    buttonFirstAnswer.textContent = question.answer[0].text;
    const buttonSecondAnswer = document.querySelector("#question > div > button:nth-child(2) > span.spanOption");
    buttonSecondAnswer.textContent = question.answer[1].text;
    const buttonThirdAnswer = document.querySelector("#question > div > button:nth-child(3) > span.spanOption");
    buttonThirdAnswer.textContent = question.answer[2].text;
    const buttonFourthAnswer = document.querySelector("#question > div > button:nth-child(4) > span.spanOption");
    buttonFourthAnswer.textContent = question.answer[3].text;
  }


  displayCurrentSection(){
    console.log(this.question);
    if (this.gameState.currentSection === "question") {
      this.updateQuestionContent();
    }
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('activeSection');
      section.classList.add('inactiveSection');

    });
    const section = document.getElementById(this.gameState.currentSection);
    section.classList.add('activeSection')
  }
}

