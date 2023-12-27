function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código 
 
  // Obtener la fecha actual
  const fechaActual = new Date();

   // Obtener el año actual
   const añoActual = fechaActual.getFullYear();

   // Obtener el año de nacimiento
   const añoNacimiento = fechaNacimiento.getFullYear();
 
   // Calcular la edad restando el año de nacimiento del año actual
   const edad = añoActual - añoNacimiento;
   
   //verificar si es mayor o no 
   if (edad >= 18) {
    return true; // La persona es mayor de edad
  } else {
    return false; // La persona no es mayor de edad
  }
}

module.exports = esMayorDeEdad;


