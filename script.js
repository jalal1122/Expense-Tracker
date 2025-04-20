let amountInput = document.querySelector(".amountInput");
let labelInput = document.querySelector(".labelInput");

let radioInputs = document.querySelectorAll("input[type='radio']");
let radioInputsArray = Array.from(radioInputs);

let ExpenseList = document.querySelector(".expense-list");

let expenseTypeImgs = {
  food: "./assets/food.png",
  travel: "./assets/travel.png",
  shopping: "./assets/shopping.png",
  bill: "./assets/bill.png",
  personalCare: "./assets/personalCare.png",
};

let totalAmout = document.querySelector(".totalAmount");

totalAmout.textContent = `0 Pkr`;

let addExpenseButton = document.querySelector(".addExpenseBtn");

let ExpenseType = "";

addExpenseButton.addEventListener("click", function () {
  let amount = amountInput.value;
  let label = labelInput.value;

  console.log("clicked");

  if (amount === "" || label === "") {
    alert("Please fill in all fields");
    return;
  }

  let selectedRadio = radioInputsArray.find((radio) => radio.checked);
  if (selectedRadio) {
    ExpenseType = selectedRadio.value;
  } else {
    alert("Please select an expense type");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
        <div class="expense-img-div">
                <img src="${expenseTypeImgs[ExpenseType]}" alt="" />
        </div>
        <div class="expense-description">
                <h3>${labelInput.value}</h3>
                <p class="expense-type">${ExpenseType}</p>
        </div>
        <div class="expense-amount">
                <h3>${amountInput.value}</h3>
                <p class="exprense-date">${getDateNow()}</p>
        </div>
        <div class="delEditDiv">&cross;</div>
    `;

  totalAmout.textContent = `${
    parseInt(totalAmout.textContent) + parseInt(amount)
  } Pkr`;

  ExpenseList.appendChild(li);

  let delEditDiv = li.querySelector(".delEditDiv");
  delEditDiv.addEventListener("click", function () {
    console.log("clicked");

    totalAmout.textContent = `${
      parseInt(totalAmout.textContent) -
      parseInt(li.querySelector(".expense-amount h3").textContent)
    } Pkr`;
    li.remove();
  });

  amountInput.value = "";
  labelInput.value = "";
  radioInputsArray.forEach((radio) => {
    radio.checked = false;
  });
  ExpenseType = "";
});

function getDateNow() {
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}