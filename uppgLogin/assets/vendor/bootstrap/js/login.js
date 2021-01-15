
var Name ="Marcus" // Namn på användaren
var Pass ="pass123" // Lösenord
var attempt = 3; // Antal login attempts

//Funktion för validering av inloggings uppg.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == Name && password == Pass){
document.getElementById("loginCnt").style.display = "none";
document.getElementById("loggedIn").style.display = "block";
document.getElementById("LoggedInUsername").innerHTML = Name; //Skriv ut användarens namn
return false;
}
// Stäng av Login om inga Login attempts är kvar
else if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
alert("You have 0 attempts left");
return false;
}
// Minska antal Attempts med 1 vid varje försök
else{
attempt --;
alert("You have "+attempt+" attempts left");
}
}