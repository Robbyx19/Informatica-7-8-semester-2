function game(userChoice){
    let randomNum= Math.random();
let compChoice;
    if  (randomNum < 0.33){
        compChoice = "Rock";

    } else if(randomNum <0.66)
        compChoice = "Paper";

}else if(randomNum < 1){
    compChoice = "Scissors";

}
console.log(compChoice);

let result = document.querySelector("#result");
if (userChoice == compChoice){
    result.innerHTML = "Tie";
    {
        
    }
}
document.addEventListener('DOMContentLoaded',function(){

    document.querySelector("#rock-button").onclick=console.log("click Rock ");

});
//document.addEventListener('DOMContentLoaded'),function(){}
//your code here
// document
