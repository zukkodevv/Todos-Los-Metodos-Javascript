// Para el siguiente ejemplo vamos a ordenar un array con números con
// el método sort(), esto es más complicado que con los strings, por lo siguiente;

const numeros = [1, 2, 3, 4, 5, 232, 1231, 3234];
// Definimos un array constante con números

numeros.sort();
// Usamos el método sort() para ordenar" el array pero
// transformandolos en strings, esto ocasiona que se ordenen
// alfabeticamente, osea toma el primer número para ordenar
// por lo que después del 10 el orden se rompería totalmente;
console.log(numeros); // [1, 1231, 2, 232, 3, 3234, 4, 5]

//**--------------- Ejemplo bien resuelto------------------------*/

const numeros1 = [1, 2, 3, 4, 5, 121, 32, 1132, 923];
// Definimos un array constante con variedad de números

numeros1.sort((a, b) => a - b);
// Utilizamos el método sort pero aplicandole una función, esta función compara
// si el parametro a, osea el número anterior iterado es menor que b, el número
// actual iterado, y así ordenarlos de menor a mayor basandose en el orden númerico
// y no el orden alfabético.
console.log(numeros1); // [1, 2, 3, 4, 5, 32, 121, 923, 1132]
