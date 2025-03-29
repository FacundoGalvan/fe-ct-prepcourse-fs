function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  console.log(str1, str2)
  return str1.length === str2.length;

// La comparación str1.length === str2.length ya devuelve true o false automáticamente.
//No necesitamos if-else porque el resultado se puede retornar directamente.
//El código es más corto, limpio y eficiente
}

console.log(tienenMismaLongitud("Mahito", "Itadori"))

module.exports = tienenMismaLongitud;

