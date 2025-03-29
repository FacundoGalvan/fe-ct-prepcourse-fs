function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  return num % 2 === 0;
}

// Un número es par si al dividirlo por 2, el resto es 0.
// el patron que suele hacer chat gpt es que no usa un if sino que returna directamente si es true la condicion.
//La expresión numero % 2 === 0 ya devuelve un booleano (true o false).
// No es necesario usar if-else, porque el resultado de la comparación se puede retornar directamente.
module.exports = esPar;


