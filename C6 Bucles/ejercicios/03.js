function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x === y) {
    return x; // No need for "x || y" since they are equal.
  }  
  if (x > y) {
    return x; 
  }
  return y;  // If x is not greater, then y must be greater.
  } 
module.exports = obtenerMayor;
