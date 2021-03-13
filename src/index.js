import validator from "./validator.js";

let cardNumber;
let number_mask;
let inputValue;

//depuracion de numero de tarjeta para eliminar letras y char especiales. Enmascarar primeros 12 numeros
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

//Validacion de numero de tarjeta de credito
document.getElementById("buttonPagar").addEventListener("click", () => {   
  const isValid = validator.isValid(inputValue.value);
  showMessage(isValid);  
});

document.getElementById("buttonAceptar").addEventListener("click", () => {  
  blurEffect();
});

function blurEffect(){  
  document.querySelector("main").classList.toggle("blur")
  document.querySelector(".validationPopup").classList.toggle("blur")
}

//funcion que reemplaza/inserta el nombre ingresado en el input en el plastico en pantalla
document.getElementById("card_name").addEventListener("keyup", (event) => {
  let cardName = event.target.value;
  document.getElementById("name-plastic").innerHTML = cardName;
});

//Muestra un display de numero de tarjeta valido o invalido
function showMessage(resultValidation) {
  const resultHTML = document.getElementById("resultvalid");
  if (resultValidation) {
    document.querySelector("#validationImage").setAttribute("src", "./img/valid_card.svg")
    resultHTML.innerHTML = `<p style="margin:0px;text-align:center;font-size:18px;margin-top:10px;">Tarjeta valida</p><p style="margin:10px 0 20px 0;">¡Gracias por su compra!</p>`;
    blurEffect();  
  } else {
      document.querySelector("#validationImage").setAttribute("src", "./img/invalid_card.svg");
      resultHTML.innerHTML = `<p style="margin:0px;text-align:center;">Tarjeta Invalida</p><p style="font-size:15px;">Por favor verifique el numero de su tarjeta</p>`
      blurEffect();      
  }
}

//Agregar los options de meses y años en el select de la fecha de expiración
//Meses del año
const monthSelect = document.querySelector("#month-select")
for(let i = 1;i <= 12;i++){
  const monthOptions = document.createElement("option");
  monthOptions.textContent = i;
  monthSelect.appendChild(monthOptions);  
}
//Años de vencimiento
const yearSelect = document.querySelector("#year-select")
let currentYear = new Date().getFullYear()
currentYear = Number(String(currentYear).substr(2,2));
for(let i = currentYear;i <= (currentYear+7);i++){
  const yearOptions = document.createElement("option");
  yearOptions.textContent = i;
  yearSelect.appendChild(yearOptions);  
}

//agregar fecha de vencimiento en el plastico en pantalla

//Mes
const expireDateContainer = document.querySelector("#expire-date")
const expireParrafo1 = document.createElement("p");
document.querySelector("#month-select").addEventListener("change",(event)=>{
    let selectMonthValue = event.target.value;
    expireParrafo1.innerHTML = selectMonthValue; 
});
expireParrafo1.setAttribute("id","month-parrafo");
expireDateContainer.appendChild(expireParrafo1);

//Año
const expireParrafo2 = document.createElement("p");
document.querySelector("#year-select").addEventListener("change",(event)=>{
    let selectYearValue = event.target.value;
    expireParrafo2.innerHTML = selectYearValue; 
});

expireParrafo2.setAttribute("id","year-parrafo");
expireDateContainer.appendChild(expireParrafo2);




/* console.log(validator); */
