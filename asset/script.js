//query selectors
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector('#start');
var startScreenEl = document.querySelector('#start-screen')
var quizScreenEl = document.querySelector('#quiz-screen')


//functional variables
var time = 60;
var timeInterval;


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
}

function starttimer() {

}

startBtn.addEventListener("click", startGame);

//each question its own object



