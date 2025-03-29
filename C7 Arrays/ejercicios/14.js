function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(num => num > 10).length; // Returns a number, not an array
}
console.log(contarElementosMayoresA10([0]))

module.exports = contarElementosMayoresA10;
