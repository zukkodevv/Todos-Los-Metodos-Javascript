const numbers = [1, 2, 3, 4, 5];
//* Acabamos de definir un array con 5 números (elementos) dentro */

const doubleNumbers = numbers.map((number) => {
  // Usamos "number" para referirnos a cada elemento iterado por map()
  //-----
  /* Se realiza una variable que aplique el método .map() al array, iterando todos los <-----
 ELEMENTOS en su interior y aplicandoles la función del arrow function */
  //------
  return number * 2; // <--- Esto es lo que se le aplica a cada elemento
});

console.log(doubleNumbers); // [2, 4, 6, 8, 10]
