
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons button");


for (let i = 0; i < buttons.length; i++) {

    let button = buttons[i];

    button.addEventListener("click", function() {

        let value = button.innerText;


        
        if (value === "AC") {

            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = "";

            display.value = "";

        }


       
        else if (value === "DEL") {

            if (operator === "") {

                firstNumber = firstNumber.slice(0, -1);
                display.value = firstNumber;

            }
            else {

                secondNumber = secondNumber.slice(0, -1);
                display.value = secondNumber;

            }

        }


       
        else if (value >= "0" && value <= "9") {

            if (operator === "") {

                firstNumber = firstNumber + value;
                display.value = firstNumber;

            }
            else {

                secondNumber = secondNumber + value;
                display.value = secondNumber;

            }

        }


       
        else if (
            value === "+" ||
            value === "-" ||
            value === "*" ||
            value === "/" ||
            value === "%"
        ) {

            if (firstNumber !== "" && operator === "") {

                operator = value;
                display.value = firstNumber + operator;

            }

        }


    
        else if (value === "=") {

            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {

                let a = Number(firstNumber);
                let b = Number(secondNumber);


                if (operator === "+") {
                    result = a + b;
                }
                else if (operator === "-") {
                    result = a - b;
                }
                else if (operator === "*") {
                    result = a * b;
                }
                else if (operator === "/") {

                    if (b === 0) {
                        result = "Error";
                    }
                    else {
                        result = a / b;
                    }

                }
                else if (operator === "%") {
                    result = a % b;
                }


                display.value = result;

                firstNumber = String(result);
                secondNumber = "";
                operator = "";

            }

        }


       
        else if (value === ".") {

            if (operator === "") {

                if (!firstNumber.includes(".")) {

                    firstNumber = firstNumber + value;
                    display.value = firstNumber;

                }

            }
            else {

                if (!secondNumber.includes(".")) {

                    secondNumber = secondNumber + value;
                    display.value = secondNumber;

                }

            }

        }

    });

}

