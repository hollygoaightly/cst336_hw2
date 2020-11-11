var secretChar = "X";
var secret;
var guessedLetters;
var hangCount;
var remainingLetters;
var output;

window.onload = function(){
    newGame();
    $("#guess").on("keyup change", isValid);
    $("button").on("click", checkGuess);
};

function newGame(){
    hangCount = 1;
    setImage();
    setSecret();
    guessedLetters = "";
    remainingLetters = secret.length;
    output = secretChar.repeat(secret.length);
    $("#guess").html("");
    $("#output").html(output);
}

function setImage(){
    $("#hangman").attr("src", `img/hangman${hangCount}.png`);
}

function setSecret(){
    let words = ['whimsical', 'absquatulate', 'shenanigan', 'cattywampus', 'kerfuffle', 'bamboozle', 'hullabaloo', 'didgeridoo', 'nincompoop', 'skedaddle'];
    var i = Math.floor(Math.random() * words.length);
    secret = words[i];
}

function isValid(){
    var isValid = true;
    var input = $("#guess").val().toLowerCase();
    if(input.length != 1 || !input.match(/[a-z]/i)){
        isValid = false;
    }
    if(!isValid){
       $("button").prop("disabled", true); 
    }
    else{
       $("button").prop("disabled", false); 
    }
    
}
function loss(){
    hangCount++;
    setImage();
    if(hangCount == 7){
        alert("You Lose!")
        setTimeout(function(){ newGame() }, 3000);
    }
}
function checkGuess(){
    var guess = $("#guess").val().toLowerCase();
    if(guessedLetters.includes(guess)){
        loss();
        return;
    }
    guessedLetters += guess;
    var match = false;
    var temp = "";
    for(let i = 0; i < secret.length; i++){
        if(guess == secret[i]){
            remainingLetters--;
            match = true;
            temp = temp.concat(secret[i])
        }
        else{
            temp = temp.concat(output[i])
        }
        
    }
    if(match){
        output = temp
        $("#output").html(output);
    }
    else{
        loss();
    }
    
    if(remainingLetters == 0)
    {
        alert("You Win!");
        setTimeout(function(){ newGame() }, 3000);
    }
}