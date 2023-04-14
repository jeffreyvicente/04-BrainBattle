//Buttons for the start game, submit name and play again buttons. 
var startButton = document.querySelector("#start-button");
var scoreCardButtonSubmit = document.querySelector("#nameFieldBtn");
var leaderboardButton = document.querySelector("#playAgainBtn");

//Buttons for the 4 different buttons the user can select. 
var ansBtn01 = document.querySelector("#answer-button-01");
var ansBtn02 = document.querySelector("#answer-button-02");
var ansBtn03 = document.querySelector("#answer-button-03");
var ansBtn04 = document.querySelector("#answer-button-04");

//Points the JS to specified areas of the HTML. Allows to change the display attributes of a page. 
var gameSection01 = document.querySelector(".gameSection-1");
var gameSection02 = document.querySelector(".gameSection-2");
var gameSection03 = document.querySelector(".gameSection-3");
var gameSection04 = document.querySelector(".gameSection-4");

//Logic to call the area in the HTML that sets the questions and the current question the user is on. 
var questionField = document.querySelector("#questionField");
var questionNumber = document.querySelector("#questionNumber");

//Logic to call the HTML for the high score field, the list for the high score and the high score button. 
var highScoreName = document.querySelector("#nameField");
var leaderboardCardList = document.querySelector("#leaderboardCardList");
var headerBtn = document.querySelector("#highBtnHeader");

//Referencing elements in the html, grabs the countdown timer, and toast that appears when the question is answered correctly. 
var countdownText = document.getElementById('countdownTimer');
var questionNotification = document.getElementById('questionNotification');

//Array that holds the high score and names of the users. 
var savedHighScores = [];

//variable that keeps track of questions in the array. 
var currentQuestion = 0;
//variable that sets the starting time of the game to 100 seconds
var timeLeft = 100;
//variable that keeps track of the ongoing timer. 
var timeInterval;

//Sets the game to show the default cards of the game. 
gameReset();

/* An Array that contains the the question, 4 different selections and the answer*/

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
    question: "Which of the following is a primitive data type in JavaScr ipt?",
    option01: "A. Object",
    option02: "B. Array",
    option03: "C. Boolean",
    option04: "D. Date",
    answer:"C"
  }

];

//Places the questions array into local storage
localStorage.setItem("questionBank", JSON.stringify(questionBank));
//Grabs the questions from local storage so that they can be used. 
var lastGrade = JSON.parse(localStorage.getItem("questionBank"));

// startBattle() is logic that is ran when the game start button is selected
function startBattle(){
    //starts the timer. 
    countdown();

    //hids the welcome page
    gameSection01.style.display = "none";
    //displays the section 2 card
    gameSection02.style.display = ""
    //hides the view high score button on the header
    headerBtn.style.display = "none";

    //calls the quiz logic to check if the quiz has ended
    quizLogic();
  }

// quizlogic() checks where in the game the user is in the quiz. If the player reaches the end the quiz will call showScore. 
function quizLogic(){
  
  if(currentQuestion < questionBank.length)
  {
    //loads more questions in the text field 
    loadQestions();
  }else{
    //shows the score card once all questions are answered. 
    showScore();
    
  }
}

//function loads each question card on the page
function loadQestions(){
    //sets the card header
    var temp = currentQuestion + 1;
    document.getElementById("questionNumber").innerHTML = "Question: " + temp;
    //sets the question text in the html
    document.getElementById("questionField").innerHTML = lastGrade[currentQuestion].question;
    //sets the button text in the HTML
    document.getElementById("answer-button-01").innerHTML = lastGrade[currentQuestion].option01;
    document.getElementById("answer-button-02").innerHTML = lastGrade[currentQuestion].option02;
    document.getElementById("answer-button-03").innerHTML = lastGrade[currentQuestion].option03;
    document.getElementById("answer-button-04").innerHTML = lastGrade[currentQuestion].option04;
}

//function shows the score of the game played
function showScore(){
    //Shows the total score the user has gotten in the game. 
    document.getElementById("scoreField").innerHTML = "Your final score is: " + timeLeft;
    console.log("This is the time interval "+ timeLeft)
   
    //Hides the section 2 card an allows section 3 to show. 
    gameSection02.style.display = "none";
    gameSection03.style.display = "";

    //Stops the timer. 
    clearInterval(timeInterval);
  
}

// fucntion that shows the leaderboard on the page
function showLeaderBoard(){

  // stops the function from running if high name is blank. 
  if(highScoreName.value ===""){
    return;
  }
  
  //sets the display status of the card. 
  gameSection01.style.display = "none";
  gameSection03.style.display = "none";
  gameSection04.style.display = "";

  //will check if user pressed the view leaderboard button. 
  //will not push data to the high score array
  if (timeLeft === 100){
    renderLeader();
    return;
  }
  
  //Array that will hold the high score and their name. 
  var highScores = {
    playerName: highScoreName.value,
    score: timeLeft
  };
  
  //Adds the high score to the array 
  savedHighScores.push(highScores)

  //Saves the data in local storage to be access at another time. 
  localStorage.setItem("savedHighscores", JSON.stringify(savedHighScores));
  //Will not render the leaderboard if saved high score is empty
  if(savedHighScores.length > 0 ){
    renderLeader();
  }
}

//Resets all fields of the game
function gameReset(){
    //sets card 1 to being visable and hides all other cards
    gameSection01.style.display = ""
    gameSection02.style.display = "none";
    gameSection03.style.display = "none";
    gameSection04.style.display = "none";
    //resets the question counter 
    currentQuestion = 0;
    //resets the socre
    timeLeft = 100;
    //displays the high score button
    headerBtn.style.display = "";
}

//AddEventListener code for all the answers and buttons on the card. 
startButton.addEventListener("click", startBattle);
ansBtn01.addEventListener("click", setAnswerA);
ansBtn02.addEventListener("click", setAnswerB);
ansBtn03.addEventListener("click", setAnswerC);
ansBtn04.addEventListener("click", setAnswerD);
scoreCardButtonSubmit.addEventListener("click", showLeaderBoard);
leaderboardButton.addEventListener("click", gameReset);

//Function called when the A button is pressed. 
function setAnswerA(){
  var selectedAnswer = "A";
  //Grabs the answer from local memory
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  //Validates if answer is correct.
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Correct";
    // Generates the next quiz card. 
    quizLogic();
  }else{
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Wrong!";
    //Decreases the score. 
    decScore();
    // Generates the next quiz card. 
    quizLogic();
  }

}

//Function called when the B button is pressed. 
function setAnswerB(){
  var selectedAnswer = "B";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
  //Validates if answer is correct.
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Correct";
    // Generates the next quiz card. 
    quizLogic();
  }else{
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Wrong!";
    decScore();
    // Generates the next quiz card. 
    quizLogic();
  }
  
}

//Function called when the C button is pressed. 
function setAnswerC(){
  var selectedAnswer = "C";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
    //Validates if answer is correct.
  if (correctAnswer == selectedAnswer)
  {
    console.log("Correct answer was selected");
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Correct";
    // Generates the next quiz card. 
    quizLogic();
  }else{
    currentQuestion++;
    //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Wrong!";
    decScore();
    // Generates the next quiz card. 
    quizLogic();
  }
}

//Function called when the D button is pressed. 
function setAnswerD(){
  var selectedAnswer = "D";
  var correctAnswer = lastGrade[currentQuestion].answer;
  console.log("This is the correct answer value: " + correctAnswer);
   //Validates if answer is correct.
  if (correctAnswer == selectedAnswer)
  {
    console.log("The value goes into the loop");
    currentQuestion++;
     //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Correct";
    // Generates the next quiz card. 
    quizLogic();
    
  }
    currentQuestion++;
     //Changes the text on the screen showing if the answer is correct or wrong
    questionNotification.textContent = "Wrong!";
    decScore(); 
    // Generates the next quiz card. 
    quizLogic();
    
}

// function to lower the score by 10 points
function decScore(){
  timeLeft = timeLeft - 10;
  console.log("The answer was wrong minus 10 points")
}

//function that sets the countdown timer
function countdown(){
    timeInterval = setInterval(function(){
    
      //decrements the timer down until the timer is zero
      if(timeLeft > 1)
      {
        countdownText.textContent = timeLeft + " seconds remaining";
        timeLeft--;
        //changes the text from seconds to second when the timer reaches 1 second
      }else if (timeLeft === 1){
        countdownText.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        //ends the game when the timer reaches zero
        countdownText.textContent = "";
        clearInterval(timeInterval);
        //calls the show score function
        showScore();
      }

 },1000)

}

// The following function renders items in a todo list as <li> elements
function renderLeader() {

  leaderboardCardList.innerHTML = "";
 
  // Render a new li for each person in the leaderboard
  for (var i = 0; i < savedHighScores.length; i++) {
    //grabs the name from the local storage
    var nameTwo = savedHighScores[i].playerName;
    //grabs the score from the local storage
    var scoreTwo = savedHighScores[i].score;

    // creates the elements li
    var li = document.createElement("li");
    //sets the layout of the high scores
    li.textContent = nameTwo + " ........................  " + scoreTwo + " points";
    li.setAttribute("data-index", i);

    //appends the data to the list. 
    leaderboardCardList.appendChild(li);
  }
}
