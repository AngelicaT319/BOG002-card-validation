import validator from './validator.js';

let cardNumber = document.getElementById("card_number").value;


document.getElementById("buttonValidar").addEventListener("click", function(){
    console.log(cardNumber)
    validator.isValid(cardNumber)     
});

console.log(validator);
/* validator.maskify(cardNumber); */



