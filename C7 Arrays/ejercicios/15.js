function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) return 0; // Check for an empty array first
  return array.indexOf(Math.max(...array));
}
console.log(encontrarIndiceMayor([]))
module.exports = encontrarIndiceMayor;
