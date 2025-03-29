function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.

  let duplicados = array.map((num) => num * 2); // Multiplica cada elemento por 2
  
  return duplicados; // Retorna el nuevo array
}
console.log(duplicarElementos([1,2,3,4]))
module.exports = duplicarElementos;
