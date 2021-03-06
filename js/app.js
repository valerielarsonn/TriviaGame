//Variables

const $category = $("#category");
const $difficulty = $("#difficulty");
const $question = $("#question");
// const $answerA = $("answerA");
// const $answerB = $("answerB");
// const $answerC = $("answerC");
// const $answerD = $("answerD");
const $player1 = $("#playerOneScore");
const $player2 = $("#playerTwoScore");
const $turn = $("#playerTurn");

let triviaData;
let player1 = 0;
let player2 = 0;
let index = 0;

$turn.text("Player 1's Turn")



//Getting data from API

$.ajax("https://opentdb.com/api.php?amount=50&type=multiple&encode=url3986")
    .then((data) => {
        console.log(data);
        triviaData = data.results
        console.log(triviaData);
        useApiData(triviaData[0]);
    });



//Function that does something with the data from the API
//Decoding data before setting display text

function useApiData(data){
    $category.text(decodeURIComponent("Category~ " + data.category));
    $difficulty.text("Difficulty~ " + data.difficulty);
    $question.text(decodeURIComponent(data.question));
    document.querySelector("#answerA").innerHTML = decodeURIComponent(data.incorrect_answers[0]);
    document.querySelector("#answerB").innerHTML = decodeURIComponent(data.correct_answer);
    document.querySelector("#answerC").innerHTML = decodeURIComponent(data.incorrect_answers[1]);
    document.querySelector("#answerD").innerHTML = decodeURIComponent(data.incorrect_answers[2]);
};



// Event Listeners
//Scoring for correct answer

let correctButton = document.querySelector("#answerB");

let addScore = (answer) => { 
  if (index %2 === 0) {
    if (answer === true) player1 = player1 + 5;
    $player1.text(player1);
    $turn.text("Player 2's Turn")
  } else {
    if (answer === true) player2 = player2 + 5
    $player2.text(player2);
    $turn.text("Player 1's Turn")
  } 
  index++;
  useApiData(triviaData[index]);
};

correctButton.addEventListener("click", () => {
    alert("Correct!")
    addScore(true)
});



document.querySelectorAll(".wrong").forEach(item => {
    item.addEventListener('click', () => {
      alert("Wrong!")
      addScore(false)
    })
  });
  





    
  