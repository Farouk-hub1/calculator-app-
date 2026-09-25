//get the calculator displlay
const currentoperation = document.getElementById("current-operation")
const previousoperation = document.getElementById("previous-operation")

//Getting all buttons
const buttons = document.querySelectorAll("button")

//calculator state
let currentNumber ="";
let previousNumber ="";
let operator = "";



//listen for button clicks

buttons.forEach(function(button){
  button.addEventListener("click", function(){
    const value = button.textContent;
    currentNumber += value
    currentoperation.textContent = currentNumber;
  });
});

