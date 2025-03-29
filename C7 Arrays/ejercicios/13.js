function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(cb => (cb % 2 === 0))
}
console.log(filtrarNumerosPares([1,2,3,4,5,6,11,12]))

module.exports = filtrarNumerosPares;
