function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];  // Aquí sumas el valor de cada elemento
  }
  return suma / resultadosTest.length;  // Devuelves el promedio
}
console.log(promedioResultadosTest([5,5,5,5,5,10,10]))
module.exports = promedioResultadosTest;


