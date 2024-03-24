var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var highscoreNumber = 0;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.round(Math.random() * 3);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
    var audio = new Audio(randomChosenColour + ".mp3");
    audio.play();
    level++;
    $("h1").text("Level " + level);
    
}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //$(this).fadeOut("fast").fadeIn("fast");
    var audio = new Audio(userChosenColour + ".mp3");
    audio.play();
    animatePress($(this).attr("id"));

    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

$(document).keypress(function() {
    if(!started){
        nextSequence();
        started = true;
    }
});

$("#startButton").click(function(){
    if(!started){
        nextSequence();
        started = true;
        $("#startButton").fadeOut(10);
    }
});

function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length){
              setTimeout(function () {
                nextSequence();
              }, 1000);
              highscore(level);
            }
          } else {
            var audio = new Audio(wrong.mp3");
            audio.play();
            $("h1").html("Game over!<br>Press any key to start over");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            $("#startButton").fadeIn(10);
            startOver();
          }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
} 

function highscore(currentScore) {
    
    if(currentScore >= highscoreNumber){
        highscoreNumber = currentScore;
        $("#highscoreNumber").text(highscoreNumber);
    }
    
}
