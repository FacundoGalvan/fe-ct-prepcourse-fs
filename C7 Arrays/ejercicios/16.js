function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map(function(elemento, indice){
 return elemento * indice;
})
}
console.log(multiplicarElementosPorIndice([1,2,3]));
module.exports = multiplicarElementosPorIndice;

