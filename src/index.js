import validator from "./validator.js";

let cardNumber;
let number_mask;
let inputValue;

/* document.getElementById("card_number").addEventListener("keypress", (event) => {
  return (event.code >= 48 && event.code <= 57)

}); */

document.getElementById("card_number").addEventListener("keyup", (event) => {
  cardNumber = event.target.value;
  cardNumber = event.target.value;
  let regexp_letras = /\D/g;
  let regexp_blank = /\s/g;
  inputValue = document.getElementById("card_number");
  inputValue.value = cardNumber.replace(regexp_letras,'').replace(regexp_blank,'');
  number_mask = validator.maskify(inputValue.value);
  document.getElementById("number-plastic").innerHTML = number_mask;

});

document.getElementById("buttonValidar").addEventListener("click", () => { 
  const isValid = validator.isValid(inputValue.value);
  showMessage(isValid);
});

//funcion que reemplaza/inserta el nombre ingresado en el input en el plastico en pantalla
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
/* console.log(validator); */
