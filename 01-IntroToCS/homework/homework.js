'use strict';

function BinarioADecimal(num) {
   var numToStr = num.split('').reverse().join(''); // en el test podemos ver que nos pasan un string, por lo que lo dividimos,invertimos y volvemos a unir para utilizar el metodo de conversion
   var solved = null; // variable que sumara los productos de, los digitos binarios por 2 elevado a la posicion que ocupe
   for (var i=0; i<numToStr.length; i++){ // itineramos por la cantidad de digitos del numero binario otorgado
   solved = solved + (2**i)*numToStr[i] // sumara los productos de, los digitos binarios por 2 elevado a la posicion que ocupe
   }
   return solved //retorno del numero decimal
}

function DecimalABinario(num) {
   var variable = num; // variable que toma el valor de num y despues tomara el valor de los cocientes
   var solved = []; // array que ira tomando los restos de la variable dividido 2
   while(variable != 1) { // mientras el cociente no sea 1, significa que puedo seguir diviendo, por lo que mientras se cumpla, quiero seguir itinerando
      solved.push(variable % 2); // pusheo el resto al array
      variable = Math.floor(variable/2); // variable toma un nuevo valor entero de cociente
      if (variable === 1){solved.push(variable)}; // si el cociente es 1, agrego el 1 final al array
   }
   return solved.reverse().join(''); // retorno el array invertido y unido en un string
}
//       por si hubiese sido necesario:
//       cambiando por lo siguiente despues del while devolvemos en enteros decimales y no en cadena:
//       solved=solved.reverse().join('');
//       solved = parseInt(solved,10);
//       return solved

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
