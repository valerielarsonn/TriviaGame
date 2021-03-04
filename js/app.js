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

let triviaData;
let player1 = 0;
let player2 = 0;
let index = 0;

//Getting data from API

$.ajax("https://opentdb.com/api.php?amount=50&type=multiple")
    .then((data) => {
        triviaData = data;
        console.log(data);
        useApiData(triviaData.results[0]);
    });



//Function that does something with the data from the API

function useApiData(data){
    $category.text(data.category);
    console.log(data.category);
    $difficulty.text(data.difficulty);
    console.log(data.difficulty);
    $question.text(data.question);
    console.log(data.question);
    document.querySelector("#answerA").innerHTML = data.incorrect_answers[0];
    console.log(data.incorrect_answers[0]);
    document.querySelector("#answerB").innerHTML = data.correct_answer;
    console.log(data.correct_answer);
    document.querySelector("#answerC").innerHTML = data.incorrect_answers[1];
    console.log(data.incorrect_answers[1]);
    document.querySelector("#answerD").innerHTML = data.incorrect_answers[2];
    console.log(data.incorrect_answers[2]);
};

// Event Listeners
//Scoring for correct answer

let correctButton = document.querySelector("#answerB");

correctButton.addEventListener("click", () => {
    alert("Correct!")
    index++;
    useApiData(triviaData.results[index]);
    if (index %2 === 0) {
        player2 = player2 + 5;
        $player2.text(player2);
    } else {
        player1 = player1 + 5;
        $player1.text(player1);
    }
});


document.querySelectorAll(".wrong").forEach(item => {
    item.addEventListener('click', () => {
      alert("Wrong!")
      index++;
      useApiData(triviaData.results[index]);
    })
  });
  