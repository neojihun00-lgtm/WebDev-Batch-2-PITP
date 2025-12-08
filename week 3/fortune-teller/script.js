//---JAVASCRIPT LOGIC---
//1. create an arrayof possible answer (classic + Fun/Sarcastic)
let answers = [
    "It is certain.",
    "Yes definitely.",
    "Chances are good.",
    "Signs point to yes.",
    "My source say no.",
    "Chances are not so good.",
    "Very doubtful.",
    "404 Error: Fate nit found.",
    "Only if you do a little dance first.",
    "You are about die!.",
    "The stars say ...meh.",
    "Ask your dog, they know better.",
    "Computer says no.",
    "I'm on a coffee break,ask later.",
    "Yes, but you won't like the consequence.",
    "You need to consult a doctor.",
    "Your WiFi connection to destiny is weak.",
    "Fate is currently stuck....", 
    "Chances are great...for someone else",
] ;

//2.Select the important HTML elements
let getAnswerButton = document.querySelector("#get-answer-btn");
let answerDisplay = document.querySelector("#answer");

//3.The function that runs on clik
function showRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
}

//4. We use the variable 'getAnswerButton' we defined above.
getAnswerButton.addEventListener("click" , showRandomAnswer);
