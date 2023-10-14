const preOperationsText = document.querySelector("pre-operation")
const posOperationsText = document.querySelector("pos-operation")
const button = document.querySelectorAll("buttons-box button")

class Calculator {
constructor(preOperationsText,posOperationsText){
this.preOperationsText=preOperationsText
this.posOperationsText=posOperationsText
this.posOperationsText=""
}
addDigit(digit){
console.log(digit)
}
}

const calc=new Calculator(preOperationsText,posOperationsText)


button.forEach(
    (btn) => {
        btn.addEventListener("click", (e) => {
            const value = e.target.value;

            if (+value >= 0 || value === ".") {
                calc.addDigit(value)
            }

            else {
                console.log("op." + value);
            }
        }

        )
    }

)