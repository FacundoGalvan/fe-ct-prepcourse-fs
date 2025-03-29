function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
    if (numero <= 0) return false; // Powers of 2 are positive numbers
    
    while (numero > 1) { // Keep dividing by 2
      if (numero % 2 !== 0) return false; // If it becomes odd, it's not a power of 2
      numero = numero / 2;
    }
    
    return true; // If we reach 1, it's a power of 2
  }

module.exports = esPotenciaDeDos;
