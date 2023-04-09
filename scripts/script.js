
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

gameSection02.style.display = "none";
gameSection03.style.display = "none";
gameSection04.style.display = "none";


var currentQuestion = 0;
var scoreCounter = 0;

//Code from the 25 INS sections
var questionBank = [
  {
    question: "What does the DOM stand for in JavaScript?",
    option01: "Document Object Model",
    option02: "Data Object Model",
    option03: "Dynamic Object Model",
    option04: "Display Object Model",
    answer:"A"
  },
  {
    question: "What keyword is used to declare a variable in JavaScript??",
    option01: "let",
    option02: "var",
    option03: "const",
    option04: "all of the above",
    answer:"D"
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    option01: "== compares values but not types, while === compares both values and types",
    option02: "== compares types but not values, while === compares both types and values",
    option03: "== and === are interchangeable and have no difference",
    option04: "none of the above",
    answer:"A"
  },
  {
    question: "Which of the following is not a valid loop in JavaScript?",
    option01: "for",
    option02: "while",
    option03: "until",
    option04: "do-while",
    answer:"C"
  },
  {
    question: "What is the correct syntax for a function declaration in JavaScript?",
    option01: "function myFunction() {}",
    option02: "myFunction() {}",
    option03: "declare myFunction() {}",
    option04: "def myFunction() {}",
    answer:"A"
  },
  {
    question: "What method is used to add an element to the end of an array in JavaScript?)",
    option01: "push()",
    option02: "add()",
    option03: "append()",
    option04: "insert()",
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


console.log("This is a temp value " + lastGrade[0].question);
console.log("This is a temp value " + lastGrade[0].option01);
console.log("This prints out the length of questionBank " + lastGrade.length);
/*

document.getElementById("questionField").innerHTML = lastGrade[0].question;
document.getElementById("answer-button-01").innerHTML = lastGrade[0].option01;
document.getElementById("answer-button-02").innerHTML = lastGrade[0].option02;
document.getElementById("answer-button-03").innerHTML = lastGrade[0].option03;
document.getElementById("answer-button-04").innerHTML = lastGrade[0].option04;
*/





function startBattle(){
    console.log("Start Battle has been triggerd");
    gameSection01.style.display = "none";
    gameSection02.style.display = ""
    quizLogic();
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
    gameSection02.style.display = "none";
    gameSection03.style.display = "";
    document.getElementById("scoreField").innerHTML = "Your final score is: " + scoreCounter;
}

function showLeaderBoard(){
    gameSection03.style.display = "none";
    gameSection04.style.display = "";
   
}

function gameReset(){
    gameSection01.style.display = ""
    gameSection02.style.display = "none";
    gameSection03.style.display = "none";
    gameSection04.style.display = "none";
    currentQuestion = 0;
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
    scoreCounter++;
    quizLogic();
  }else{
    currentQuestion++
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
    scoreCounter++;
    quizLogic();
  }else{
    currentQuestion++;
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
    scoreCounter++;
    quizLogic();
  }else{
    currentQuestion++;
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
    scoreCounter++;
    quizLogic();
  }
    currentQuestion++;
    quizLogic();
}

