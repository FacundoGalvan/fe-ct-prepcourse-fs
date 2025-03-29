function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    // Caso 1: Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
      return false;
    }
    
    // Caso 2: Si el número es 2, es primo (único primo par)
    if (numero === 2) {
      return true;
    }
    
    // Caso 3: Si el número es par y no es 2, no es primo
    if (numero % 2 === 0) {
      return false;
    }
    
    // Caso 4: Verificamos divisibilidad solo con números impares
    // hasta la raíz cuadrada del número
    const limite = Math.sqrt(numero);
    
    // Comenzamos en 3 y avanzamos de 2 en 2 (solo impares)
    for (let i = 3; i <= limite; i += 2) {
      // Si el número es divisible por i, entonces no es primo
      if (numero % i === 0) {
        return false;
      }
    }
    
    // Si llegamos aquí, el número es primo
    return true;
}

module.exports = esNumeroPrimo;
