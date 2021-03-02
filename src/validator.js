let validator = {  
  isValid: function (cardnum) {
    //divide el numero por digitos y lo almacena en un array de strings, con map lo transforma en array de numeros
    let char = cardnum.split("").map(Number);
    //reversa el array char
    let charReverse = char.reverse();
    //busca las posiciones pares (index impar) del array y lo multiplica x 2
    for (var i = 0; i < charReverse.length; i++) {
      if (i % 2 !== 0) {
        charReverse[i] = charReverse[i] * 2;
        // condicional para separar (split) y sumar (reduce) los digitos convertidos en numero (map) del valor si son mayor o igual a 10
        if (charReverse[i] >= 10) {
          charReverse[i] = String(charReverse[i])
            .split("")
            .map(Number)
            .reduce(function (a, b) {
              return a + b;
            });
        }
      } else {
        charReverse[i] = charReverse[i] * 1;
      }
    }

    let valid = charReverse.reduce(function (a, b) {
      return a + b;
    });

    if (valid % 10 == 0) {
      //tarjeta valida
      return true;
    } else {
      //tarjeta invalida
      return false;
    }
  },

  maskify: function (cardnum) {
    if (cardnum.length >= 5) {
      const regexp = /.(?=.{4})/g;
      const substr = "#";
      return cardnum.replace(regexp, substr);
    } else {
      return cardnum;
    }
  },
};

export default validator;
