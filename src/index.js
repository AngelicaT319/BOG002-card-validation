import validator from "./validator.js";

let cardNumber;

// al darle click en el boton validar, se ejecuta la función isValid del objeto validator, quien regresa false para tarjeta invalida y true para tarjeta valida. El retorno quedara en la variable validacion

document.getElementById('card_number').addEventListener('change', (event) => {
    cardNumber = event.target.value
})

document.getElementById("buttonValidar").addEventListener("click", function () {
  
  console.log(cardNumber)
  
  console.log(validator.isValid(cardNumber));
  const isValid = validator.isValid(cardNumber);
  showMessage(isValid);
});

function showMessage(resultValidation) {
    const resultHTML = document.getElementById('resultvalid');
  let number_mask = validator.maskify(
    cardNumber
  );
  if (resultValidation) {
    resultHTML.innerHTML = `Su tarjeta N° ${number_mask} es valida`;
  } else {
    
        resultHTML.innerHTML = `Su tarjeta N° ${number_mask} es invalida`;
  }
}
console.log(validator);
