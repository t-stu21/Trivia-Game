$("#startGame").on("click", function(event) {
    $("#startGame").hide();
    //        $("#counter").html("<h2> </h2>");
    //        $("#trivia").html("<h2>QUESTIONS GO HERE</h2>");
    clock();
    generateHTML();

});

$("body").on("click", ".answer", function(event) {
    console.log("Answer listener func()");
    event.preventDefault();
    selectedAnswer = $(this).text();
    //con.log for error checking
    console.log("Selected " + selectedAnswer);
    console.log(correctArray[counter]);
    if (selectedAnswer === correctArray[counter]) {
        clearInterval(time);
        correctAnswer();
    } else {
        clearInterval(time);
        wrongAnswer();
    }
});

$("body").on("click", ".reset-button", function(event) {
    var correctNum = 0;
    var incorrectNum = 0;
    var notAnsweredNum = 0;
    var counter = 0;
    var time = 0;
    var timerCounter = 30;
    resetGame();
});

function clock() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerCounter === 0) {
            clearInterval(time);
            questionTimeout();
        }
        if (timerCounter > 0) {
            timerCounter--;
        }
        $(".timer").html(timerCounter);
    }
}

function generateHTML() {
    console.log("generateHTML  counter " + counter);
    //<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p>
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>" + questionsArray[counter] +
        "</h3><h3 class='answer'>A. " + answersArray[counter][0] +
        "</h3><h3 class='answer'>B. " + answersArray[counter][1] + "</h3><h3 class='answer'>C. " +
        answersArray[counter][2] + "</h3><h3 class='answer'>D. " + answersArray[counter][3] + "</h3>";
    $(".gameDiv").html(gameHTML);
    console.log("generateHTML counter2 " + counter);
};

function correctAnswer() {
    console.log("correctAnswer Func()");
    correctNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Correct! The answer is: " +
        correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function wrongAnswer() {
    console.log("wrongAnswer func()");
    incorrectNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>Incorrect! The answer is: " +
        correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function questionTimeout() {
    console.log("questionTimeout func()");
    notAnsweredNum++;
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>You ran out of time!</h3>" +
        "<h3>The correct answer is: " + correctArray[counter] + "</h3>";
    $(".gameDiv").html(gameHTML);
    setTimeout(wait, 2500);
}

function endOfGame() {
    console.log("endOfGame func()");
    gameHTML = "<h2 class='text-center timer-p'>Time Remaining: <span class='timer'>" +
        timerCounter + "</span></h2><h3 class='text-center'>All done, here's how you did!</h3>" +
        "<h3 class='summary-correct'>Correct Answers: " + correctNum +
        "</h3><h3>Wrong Answers: " + incorrectNum + "</h3><h3>Unanswered: " +
        notAnsweredNum + "</h3>" +
        "<h3 class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></h3>";
    $(".gameDiv").html(gameHTML);
    console.log("EOG counter" + counter);
    console.log("EOG incorrectNum" + incorrectNum);
    console.log("EOG correctNum" + correctNum);
}

function wait() {
    console.log("im in the wait function");
    if (counter < 1) {
        counter++;
        console.log("wait func()" + counter);
        generateHTML();
        timerCounter = 30;
        clock();
    } else {
        endOfGame();
    }
}

function resetGame() {
    //    var correctNum = 0;
    //    var incorrectNum = 0;
    //    var notAnsweredNum = 0;
    //   var counter = 0;
    //   var time = 0;
    //   var timerCounter = 30;
    console.log("Reset counter " + counter);
    console.log("Reset incorrectNum " + incorrectNum);
    console.log("Reset correctNum " + correctNum);
    generateHTML();
    clock();
}

var questionsArray = [
    "What did Doctor Emmett Brown steal to power his time machine?",
    "Whom did he steal this from?"
];
var answersArray = [
    ["Titanium", "Plutonium", "Liquid Nitrogen", "Alfredo Sauce"],
    ["Lybians", "Russians", "Germans", "Iranians"]
];
var correctArray = [
    "B. Plutonium",
    "A. Lybians"
];
var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;
var counter = 0;
var time = 0;
var timerCounter = 30;
