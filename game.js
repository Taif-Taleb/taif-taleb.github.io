var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var highscoreNumber = 0;
var audioIsOn = true;

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.round(Math.random() * 3);
    //console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
    if(audioIsOn){
        var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        audio.play();
    }
    level++;
    $("h1").text("Level " + level);
}

$(".btn").on("mouseup", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //$(this).fadeOut("fast").fadeIn("fast");
    if(audioIsOn){
        var audio = new Audio("sounds/" + userChosenColour + ".mp3");
        audio.play();
    }
    //animatePress($(this).attr("id"));
    checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColour).removeClass("pressed");
    }, 10);
}

/*
$(document).keypress(function() {
    if(!started){
        nextSequence();
        started = true;
        $(".startButtonContainer").fadeOut(10);
    }
});
*/

$("#startButton").click(function(){
    var audioToggle = document.getElementById("audio-controll").checked;
    if(audioToggle){
        audioIsOn = true;
    } else {
        audioIsOn = false;
    }
    if(!started){
        started = true;
        $(".row-container").removeClass("hide");
        setTimeout(function () {
            nextSequence();
        }, 500);
        $(".startButtonContainer").fadeOut(10);
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
            if(audioIsOn){
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
            }
            $("h1").html("Game over!<br>Lol better luck next time");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            $(".row-container").addClass("hide");
            $(".startButtonContainer").fadeIn(10);
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