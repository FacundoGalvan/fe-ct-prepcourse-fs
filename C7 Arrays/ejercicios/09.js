function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let aleatorio = Math.random() * array.length;
   let entero = Math.floor(aleatorio);
   return array[entero];  // Accede al elemento usando el índice generado
   // buscar como hacer este codigo en una linea 
}

console.log(obtenerElementoAleatorio([0,1,2,3,5]))

module.exports = obtenerElementoAleatorio;
