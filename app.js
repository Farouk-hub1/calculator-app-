//get the calculator displlay
const currentoperation = document.getElementById("current-operation")
const previousoperation = document.getElementById("previous-operation")

//Getting all buttons
const buttons = document.querySelectorAll("button")

//calculator state
let currentNumber ="";
let previousNumber ="";
let operator = "";



//detect operators
buttons.forEach(function(button){
  button.addEventListener("click", function(){
      const value = button.textContent;
        if (
          value === "+" ||
          value === "-" ||
          value === "*" ||
          value === "/" 
        ){
          operator = value;

          console.log("operator selected:", operator);
        } else {
          currentNumber += value;
          currentoperation.textContent = currentNumber;
        }
});
});