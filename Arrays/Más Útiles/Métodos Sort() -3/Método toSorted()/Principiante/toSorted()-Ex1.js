// En este ejemplo usaremos la misma forma que con sort() normal,
// realizaremos un array constante con 4 strings, pero en vez de
// mutar el array original, con toSorted() crearemos un nuevo
// array con los strings ordenados, sin modificar el original.

const palabras = ["pepito", "juanita", "rodolfa", "augusta"];
// Declaramos un array constante con varios strings

const palabras1 = palabras.toSorted();
// Creamos una nueva constante para almacenar el array nuevo con
// los nombres ordenados

// llamamos a la constante <---- Array nuevo creado
console.log(palabras1); //["augusta", "juanita", "pepito", "rodolfa"]

// llamamos a la constante original <---- Array no mutado
console.log(palabras); //["pepito", "juanita", "rodolfa", "augusta"]
