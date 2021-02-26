import validator from "./validator.js";

let cardNumber;
let number_mask;

document.getElementById("card_number").addEventListener("change", (event) => {
  cardNumber = event.target.value;  
});

document.getElementById("card_number").addEventListener("keyup", (event) => {
  cardNumber = event.target.value;
  number_mask = validator.maskify(cardNumber);
  document.getElementById("number-plastic").innerHTML = number_mask;
});

document.getElementById("buttonValidar").addEventListener("click", () => {   
  const isValid = validator.isValid(cardNumber);   
  showMessage(isValid);
});

document.getElementById("card_name").addEventListener("keyup", (event) => { 
  let cardName = event.target.value;
  document.getElementById("name-plastic").innerHTML = cardName;
});

function showMessage(resultValidation) {
  const resultHTML = document.getElementById("resultvalid");
  if (resultValidation) {
    resultHTML.innerHTML = `Su tarjeta es valida`;
  } else {
    resultHTML.innerHTML = `Su tarjeta es invalida`;
  }
}
console.log(validator);
