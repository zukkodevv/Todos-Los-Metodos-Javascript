//Nuestro objetivo en este ejercicio va a ser elevar los números
//recibidos cómo parametros por su cuadrado (osea elevarlos por sí mismos)

function elevarCuadrado(...nums) {
  // 1
  return nums.map(function (number) {
    //2
    if (number % 2 === 0) {
      //3
      return number * number; //4
    } else {
      //5
      return "error"; //6
    }
  });
}

console.log(elevarCuadrado(8, 2, 3)); // 16
console.log(elevarCuadrado(32)); // 64
console.log(elevarCuadrado(3)); // error

// Cómo se ve esta función es más compleja que las anteriores pero
// realmente podría haberse hecho mucho más facil que esto, solo para
// añadir el método map se aumentó la complejidad.
// El código explicado línea por línea es el siguiente:

// 1 - Se declara la función con el rest operator ...nums
// 1 - que indica que los parametros que van a recibir son
// 1 - variables, osea pueden ser 10, 20 o 3.
//--------------------------------------------------------
// 2 - Se le indica al código que devuelva el resultado del
// 2 - mapeado de cada iteración de los argumentos que toman el lugar de nums
// 2 - al usar .map se convierten en un array y cada elemento iterado
// 2 - recibe el parametro de number
//--------------------------------------------------------
// 3 - Se pone la condicional que sí un número dividido por 2 tiene de resto 0
// 3 - entonces se eleve a la raíz, osea se multiplique por sí mismo, ya que solo los
// 3 . números pares pueden realizar esto.
//--------------------------------------------------------
// 4 - Indicamos que devuelva el número elevado por su cuadrado
//--------------------------------------------------------
// 5 - Ponemos un condicional else para que el código sepa que hacer sí
// 5 - se introduce un valor que no tiene esperado
//--------------------------------------------------------
// 6 - Por último hacemos que el condicional else devuelva (return)
// 6 - un string en la consola diciendo "error"
