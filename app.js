//get the calculator displlay
const currentoperation = document.getElementById("current-operation")
const previousoperation = document.getElementById("previous-operation")

//Getting all buttons
const buttons = document.querySelectorAll("button")

//calculator state
let currentNumber ="";
let previousNumber ="";
let operator = "";



buttons.forEach(function(button){
  button.addEventListener("click", function(){
   const value = button.textContent;

     //clear everything
      if (value === "AC"){
                   currentNumber = "";
                   operator = "";

                   currentoperation.textContent = "0";
                   previousoperation.textContent= "";

      }

      //delete the last digit

      else if(value === "DEL"){
        currentNumber = currentNumber.slice(0, -1);
         if (currentNumber  ===  " "){
              currentoperation.textContent = " 0";
        } else {
          currentoperation.textContent = currentNumber;
        }
      }

      
      //percentage operator
      else  if(value === "%"){
        currentNumber= Number(currentNumber)  / 100;
        currentoperation.textContent = currentNumber;
      }


   //if the button is an operator

  else  if(
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/"
   ){
      operator = value;
    previousoperation.textContent = currentNumber +  "  " + operator;
    currentNumber = "   ";
   }

       // equals
   else if (value === "="){ 
             const secondNumber = currentNumber;

                         let result;
                          if (operator === "+") {
                            result = Number(previousoperation.textContent.split("")[0])  + Number(secondNumber);
                          }
                          else if (operator === "-"){
                            result = Number(previousoperation.textContent.split("")[0])  - Number(secondNumber);
                          }
                          else if (operator === "*"){
                            result = Number(previousoperation.textContent.split("")[0])  *  Number(secondNumber);
                          }
                          else if (operator === "/"){
                            if(Number(secondNumber) ===0){
                              result = "Error";
                            } else{ 
                            result = Number(previousoperation.textContent.split("")[0])  / Number(secondNumber);
                             }
                             }
                     currentoperation.textContent = result;
    } 

        //number
    else{

      if (value === "."){
        if (! currentNumber.includes(".")){
          currentNumber += value;
        }
      }
         //number 
         else { 

            currentNumber += value;
         }
          currentoperation.textContent  =  currentNumber;
   }
    });
});