function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0]; // Returning arguments directly when there's one argument |return arguments; → This returns the entire arguments object instead of the single value. |   Fix: return arguments[0]; to return the first argument when there's only one.  
  let product = 1; 
  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}


console.log(multiplicarArgumentos(2,2,2))
module.exports = multiplicarArgumentos;
