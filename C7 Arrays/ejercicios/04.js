function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;

//si quiero que el array se vea asi en el console : [1, 2, kami, kama] debo desempaquetarlo:
//let arrayNew = [1, 2];
//arr.push(..[kami, kama]);
//console.log(arrayNew);
}

console.log(agregarItemAlFinalDelArray([1, 2],["kami", "kama"]))

module.exports = agregarItemAlFinalDelArray;
