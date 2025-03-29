function convertirStringAMayusculas(array) {

  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map(cb => cb.toUpperCase());
}
console.log(convertirStringAMayusculas(["leo","messi","lucas","vasquez"])
)
module.exports = convertirStringAMayusculas;
