// Para el primer ejercicio vamos a sumar todos los
// numeros dentro de un arreglo predefinido y explicarlo paso a paso
// usando solo el bucle for..of

const numeros = [1, 2, 3, 4, 5];
// Establecemos un array con una constante
let suma = 0;
// establecemos una variable suma que va a servir de almacen
// para el resultado final
for (let number of numeros) {
  // utilizamos el bucle para referirnos a cada elemento del array
  // numeros con la variable number y le aplicamos el siguiente código:
  suma += number;
  // Se suma a la variable "suma" cada elemento(número) del array "numeros"
}

console.log(suma); // 15

