const validator = {

  isValid: function(cardnumber){
    let char = cardnumber.split("").map(Number);
     /* console.log(char);
     console.log(typeof char[0]); */
     let charReverse = char.reverse();

     for (var i=0; i< charReverse.length; i++){
      if(i % 2 !== 0){
          charReverse[i] = charReverse[i] * 2
          // condicional para separar y sumar los digitos del valor si son mayor a 10 
          if(charReverse[i] >= 10){
              charReverse[i] = String(charReverse[i]).split("").map(Number).reduce(function(a,b){return a + b});                
          } 
      }       
      else{
          charReverse[i] = charReverse[i] * 1            
      }        
  }
  /* console.log(char); */
  let valid = charReverse.reduce(function(a,b){return a + b});
  /* console.log(valid);  */
  if(valid % 10 == 0){
      /* console.log("tarjeta valida") */
      return true;
  }
  else{
      /* console.log("tarjeta invalida") */
      return false;
  }  
    
}

 /*  maskify: function(num,enm){
    if(enm.length >= 5){
      const regexp = /.(?=.{4})/g;
      const substr = "#";
      document.getElementById("replace").innerHTML  = `Su tarjeta N° ${enm.replace(regexp,substr)} es undefined`;
  }
} */
}

export default validator;
