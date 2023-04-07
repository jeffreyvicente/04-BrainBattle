var count = 0;
//  Select increment and decrement button elements
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

gameSection02.style.display = "none";
gameSection03.style.display = "none";
gameSection04.style.display = "none";



function startBattle(){
    console.log("Start Battle has been triggerd");
    gameSection01.style.display = "none";
    gameSection02.style.display = ""
}

function quizLogic(){


    
}

function showScore(){
    gameSection02.style.display = "none";
    gameSection03.style.display = "";
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
}


startButton.addEventListener("click", startBattle);
ansBtn01.addEventListener("click", showScore);
scoreCardButtonSubmit.addEventListener("click", showLeaderBoard);
leaderboardButton.addEventListener("click", gameReset);

/*
btn04.addEventListener("click", function(){
    console.log("Button Click");
    gameSection02.style.display = "none";
    gameSection04.style.display = "";
   
  
});
*/



/*
// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});

// Attach event listener to decrement button element
decrementEl.addEventListener("click", function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
*/