function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let count = 0; // Counter to track iterations

  do {
    num += 5;  // Increase num by 5
    count++;   // Increment count
  } while (count < 8); // Stop after 8 iterations

  return num; // Return final result
}

module.exports = doWhile;