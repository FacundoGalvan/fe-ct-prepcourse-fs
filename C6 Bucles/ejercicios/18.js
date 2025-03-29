function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let product = 1;

    if (min === 0 || max === 0 || (min < 0 && max > 0)) {
      return 0; // If 0 is in the range, the product will be 0
    }
    
    for (let i = min; i <= max; i++) {
      product *= i; // Multiply product by each number in the range
    }
  
    return product;
  }
console.log(productoEntreNúmeros(3,5))


module.exports = productoEntreNúmeros;