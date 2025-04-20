let amountInput = document.querySelector(".amountInput")
let labelInput = document.querySelector(".labelInput")

let radioInputs = document.querySelectorAll("input[type='radio']")
let radioInputsArray = Array.from(radioInputs)

console.log(radioInputsArray);


let addExpenseButton = document.querySelector(".addExpenseBtn")

let ExpenseType = ""

addExpenseButton.addEventListener("click", function () {
    let amount = amountInput.value
    let label = labelInput.value

    console.log("clicked");
    
    
    if (amount === "" || label === "") {
        alert("Please fill in all fields")
        return
    }
    
    let selectedRadio = radioInputsArray.find((radio) => radio.checked)
    if (selectedRadio) {
        ExpenseType = selectedRadio.value
    } else {
        alert("Please select an expense type")
        return
    }
    
    console.log(`Amount: ${amount}, Label: ${label}, Type: ${ExpenseType}`)
})
