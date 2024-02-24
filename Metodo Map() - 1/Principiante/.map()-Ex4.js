// Ahora, sí queremos usar esto en una función que
// ingrese un valor variable y no una ya predefinida? Veamos.

function notVar(val) {
  // 1
  return val
    .split("")
    .map(function (elem) {
      //2
      return elem.toUpperCase(); //3
    })
    .join(""); // 4
}

console.log(notVar("pepito")); // "PEPITO"

//Si bien esta función parece intimdante realmente no es algo dificil de aprender, vamos a desglosarla
//línea por línea;
// ----------
// 1- Acá creamos una función "notVar" con un parametro variable "val"
// ----------
// 2- Hacemos que el código separe letra por letra la palabra introducida cómo valor de "val"
// 2- así transformandolo en un array mappeable, que después se le asigna el método map con una función
// 2- con referencia a "elem" cómo elemento iterado
// ----------
// 3- Le pedimos que nos devuelva cada letra pero convertida en Mayuscula con el metodo toUpperCase()
// ----------
// 4- le pedimos a la función general que una todas las letras con el método join()
// ----------
