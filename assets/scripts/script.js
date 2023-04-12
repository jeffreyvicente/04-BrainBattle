
var startButton = document.querySelector("#start-button");
var scoreCardButtonSubmit = document.querySelector("#nameFieldBtn");
var leaderboardButton = document.querySelector("#playAgainBtn");

var ansBtn01 = document.querySelector("#answer-button-01");
var ansBtn02 = document.querySelector("#answer-button-02");
var ansBtn03 = document.querySelector("#answer-button-03");
var ansBtn04 = document.querySelector("#answer-button-04");

var gameSection01 = document.querySelector(".gameSection-1");
var gameSection02 = document.querySelector(".gameSection-2");
var gameSection03 = document.querySelector(".gameSection-3");
var gameSection04 = document.querySelector(".gameSection-4");

var questionField = document.querySelector("#questionField");
var questionNumber = document.querySelector("#questionNumber");

var highScoreName = document.querySelector("#nameField");
var leaderboardCardList = document.querySelector("#leaderboardCardList");
var headerBtn = document.querySelector("#highBtnHeader");

var countdownText = document.getElementById('countdownTimer');
var questionNotification = document.getElementById('questionNotification');

var savedHighScores = [];

var currentQuestion = 0;
var scoreCounter = 0;
var timeLeft = 100;
var timeInterval;

gameReset();
//Code from the 25 INS sections
var questionBank = [
  {
    question: "What does the DOM stand for in JavaScript?",
    option01: "A. Document Object Model",
    option02: "B. Data Object Model",
    option03: "C. Dynamic Object Model",
    option04: "D. Display Object Model",
    answer:"A"
  },
  {
    question: "What keyword is used to declare a variable in JavaScript??",
    option01: "A. let",
    option02: "B. var",
    option03: "C. const",
    option04: "D. all of the above",
    answer:"D"
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    option01: "A. == compares values but not types, while === compares both values and types",
    option02: "B. == compares types but not values, while === compares both types and values",
    option03: "C. == and === are interchangeable and have no difference",
    option04: "D. none of the above",
    answer:"A"
  },
  {
    question: "Which of the following is not a valid loop in JavaScript?",
    option01: "A. for",
    option02: "B while",
    option03: "C. until",
    option04: "D. do-while",
    answer:"C"
  },
  {
    question: "What is the correct syntax for a function declaration in JavaScript?",
    option01: "A. function myFunction() {}",
    option02: "B. myFunction() {}",
    option03: "C. declare myFunction() {}",
    option04: "D. def myFunction() {}",
    answer:"A"
  },
  {
    question: "What method is used to add an element to the end of an array in JavaScript?)",
    option01: "A. push()",
    option02: "B. add()",
    option03: "C. append()",
    option04: "D. insert()",
    answer:"A"
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    option01: "A. Object",
    option02: "B. Array",
    option03: "C. Boolean",
    option04: "D. Date",
    answer:"C"
  }

];

localStorage.setItem("questionBank", JSON.stringify(questionBank));
var lastGrade = JSON.parse(localStorage.getItem("questionBank"));


function startBattle(){
    console.log("Start Battle has been triggerd");
    gameSection01.style.display = "none";
    gameSection02.style.display = ""
    headerBtn.style.display = "none";

    quizLogic();
    countdown();
}

function quizLogic(){
  
  if(currentQuestion < questionBank.length)
  {
    loadQestions();
  }else{
    showScore();
  }
}

function loadQestions(){
    var temp = currentQuestion + 1;
    document.getElementById("questionNumber").innerHTML = "Question: " + temp;
    document.getElementById("questionField").innerHTML = lastGrade[currentQuestion].question;
    document.getElementById("answer-button-01").innerHTML = lastGrade[currentQuestion].option01;
    document.getElementById("answer-button-02").innerHTML = lastGrade[currentQuestion].option02;
    document.getElementById("answer-button-03").innerHTML = lastGrade[currentQuestion].option03;
    document.getElementById("answer-button-04").innerHTML = lastGrade[currentQuestion].option04;
}

function showScore(){
  clearInterval(timeInterval);
    document.getElementById("scoreField").innerHTML = "Your final score is: " + timeLeft;
    console.log("This is the time interval "+ timeLeft)
    
    gameSection02.style.display = "none";
    gameSection03.style.display = "";
    
}


function showLeaderBoard(){
  
  gameSection01.style.display = "none";
  gameSection03.style.display = "none";
  gameSection04.style.display = "";

  if (timeLeft === 100){
    renderTodos();
    return;
  }
  

  var highScores = {
    playerName: highScoreName.value,
    score: timeLeft
  };
  
  savedHighScores.push(highScores)

  localStorage.setItem("savedHighscores", JSON.stringify(savedHighScores));
  if(savedHighScores.length > 0 ){
    renderTodos();
  }

  
}

function gameReset(){
    gameSection01.style.display = ""
    gameSection02.style.display = "none";
    gameSection03.style.display = "none";
    gameSection04.style.display = "none";
    currentQuestion = 0;
    timeLeft = 100;
    countdownText.textContent = "Hello 😬";
    headerBtn.style.display = "";
}


startButton.addEventListener("click", startBattle);
ansBtn01.addEventListener("click", setAnswerA);
ansBtn02.addEventListener("click", setAnswerB);
ansBtn03.addEventListener("click", setAnswerC);
ansBtn04.addEventListener("click", setAnswerD);
scoreCardButtonSubmit.addEventListener("click", showLeaderBoard);
leaderboardButton.addEventListener("click", gameReset);


function setAnswerA(){
  var selectedAnswer = "A";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
    questionNotification.textContent = "Correct";
    quizLogic();
  }else{
    currentQuestion++;
    questionNotification.textContent = "Wrong!";
    decScore();
    quizLogic();
  }

}
function setAnswerB(){
  var selectedAnswer = "B";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
    questionNotification.textContent = "Correct";
    quizLogic();
  }else{
    currentQuestion++;
    questionNotification.textContent = "Wrong!";
    decScore();
    quizLogic();
  }
  
}
function setAnswerC(){
  var selectedAnswer = "C";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  if (correctAnswer == selectedAnswer)
  {
    console.log("Correct answer was selected");
    currentQuestion++;
    questionNotification.textContent = "Correct";
    quizLogic();
  }else{
    currentQuestion++;
    questionNotification.textContent = "Wrong!";
    decScore();
    quizLogic();
  }
}
function setAnswerD(){
  var selectedAnswer = "D";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
    questionNotification.textContent = "Correct";
    quizLogic();
    
  }
    currentQuestion++;
    questionNotification.textContent = "Wrong!";
    decScore(); 
    quizLogic();
    
}

function decScore(){
  timeLeft = timeLeft - 10;
  console.log("The answer was wrong minus 10 points")
}



function countdown(){
    timeInterval = setInterval(function(){
    
      if(timeLeft > 1)
      {
        countdownText.textContent = timeLeft + " seconds remaining";
        timeLeft--;
      }else if (timeLeft === 1){
        countdownText.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        countdownText.textContent = "";
        clearInterval(timeInterval);
        showScore()
      }

 },1000)

}

// The following function renders items in a todo list as <li> elements

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  leaderboardCardList.innerHTML = "";
  //todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < savedHighScores.length; i++) {
    var nameTwo = savedHighScores[i].playerName;
    var scoreTwo = savedHighScores[i].score;

    var li = document.createElement("li");
    li.textContent = nameTwo + " ........................  " + scoreTwo + " points";
    li.setAttribute("data-index", i);

    //var button = document.createElement("p");
    //button.textContent = scoreArray[i];

    //li.appendChild(button);
    leaderboardCardList.appendChild(li);
  }
}
