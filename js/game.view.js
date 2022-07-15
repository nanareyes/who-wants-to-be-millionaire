export class GameView {

  createViews({onChangeCurrentSection}){
    this.createViewIntro({onChangeCurrentSection});
    this.createViewStartQuestion({onChangeCurrentSection});
  }

  createViewIntro({onChangeCurrentSection}){
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
    sectionIntroBtn.addEventListener("click", () => {onChangeCurrentSection("start-question")})
    sectionIntro.append(gameTitleH1, sectionIntroBtn);
    container.append(sectionIntro);
  }

  createViewStartQuestion({onChangeCurrentSection}){
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
    sectionStartQuestionDiv.append(sectionStartQuestionBtnNumber,sectionStartQuestionBtnPrice,sectionStartQuestionBtnPlay)
    sectionStartQuestion.append(sectionStartQuestionTitleH1, sectionStartQuestionDiv);

    container.append(sectionStartQuestion);
  }


  displayCurrentSection(currentSection){
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('activeSection');
      section.classList.add('inactiveSection');

    });
    const section = document.getElementById(currentSection);
    section.classList.add('activeSection')
  }
}

