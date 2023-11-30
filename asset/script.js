//query selectors
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector('#start');
var startScreenEl = document.querySelector('#start-screen')
var quizScreenEl = document.querySelector('#quiz-screen')
var scoreScreenEl = document.querySelector('#score-screen')
var questionEl = document.querySelector("#question")
var choicesEl = document.querySelector("#choices")
var initialsEl = document. querySelector("#init-input")
var submitScoreBtn = document.querySelector("#submit-score")


//functional variables
var scoreHistory = JSON.parse(localStorage.getItem('history')) || [];
var time = 60;
var timeInterval;
var qIndex = 0;
var choices;



function startGame(a) {
  startScreenEl.hidden = true;
  quizScreenEl.hidden = false;
  //function to start timer 
  //starttimer()
  console.log("hello")
  //function to start game
  timeInterval = setInterval(function () {
    if (time <= 0) {
      endGame()
    }
    time--;
    timerEl.textContent = time;
  }, 1000)

  renderQ()
  
    //TTimer triggers a question 
    //log the right answer


}

function renderQ() {
  var currentQ = questions[qIndex]

  questionEl.textContent = currentQ.title;

  choicesEl.innerHTML = ""

  for (let i = 0; i < currentQ.choices.length; i++) {
    const choiceBtn = document.createElement('button')
    choiceBtn.textContent = currentQ.choices[i]

    choiceBtn.onclick = checkAnswer;

    choicesEl.appendChild(choiceBtn)
  }
}

function checkAnswer(event) {
  var userChoice = event.target.textContent
  
  if (userChoice === questions[qIndex].correctAnswer) {
    console.log(true);
    //something here to change answers?
  } else {
    console.log(false);
    time -= 10

  }

  console.log(qIndex, questions.length);
  if (qIndex >= questions.length - 1) {
    endGame()
  } 
  qIndex++;
  renderQ()

}

function endGame() {
  clearInterval(timeInterval)

  quizScreenEl.hidden = true;
  scoreScreenEl.hidden = false;
}

function saveScore() {
  console.log(initialsEl.value);
  var newUser = {
    name : initialsEl.value,
    score: time
  }

  scoreHistory.push(newUser)
  localStorage.setItem("history",JSON.stringify(scoreHistory))
  location.href  = "highscores.html"
}

startBtn.addEventListener("click", startGame);
submitScoreBtn.addEventListener("click", saveScore); 


