function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
         return i;
      }
   }  // Tu código acá
   return -1;
 }

console.log(encontrarElemento(4, [1,2,3,4,5]))

module.exports = encontrarElemento;
