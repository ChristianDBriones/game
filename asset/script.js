//query selectors
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector('#start');
var startScreenEl = document.querySelector('#start-screen')
var quizScreenEl = document.querySelector('#quiz-screen')
var questionEl = document.querySelector("#question")
var choicesEl = document.querySelector("#choices")



//functional variables
var time = 60;
var timeInterval;
var qIndex = 0;



function startGame(a) {
  startScreenEl.hidden = true;
  quizScreenEl.hidden = false;
  //function to start timer 
  //starttimer()
  console.log("hello")
  //function to start game
  timeInterval = setInterval(function () {
    time--;
    timerEl.textContent = time;
  }, 1000)

  renderQ()
  
    //TTimer triggers a question 
    //create text box for answer
    //log the right answer

    //repeat ^^^ 4-5 times

}

function renderQ() {
  var currentQ = questions[qIndex]

  questionEl.textContent = currentQ.title;

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
  } else {
    console.log(false);
  }
  qIndex++;
  renderQ()
}

startBtn.addEventListener("click", startGame);

//each question its own object



