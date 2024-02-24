const pets = ["lorito", "gatito", "perrito"];
//Definimos un array, nuestro objetivo ahora es conseguir la
//longitud de cada palabra con el método lenght, junto a map()

const petsLenght = pets.map(function (pet) {
  //Definimos la variable y aplicamos map refiriendonos como pet a la iteración
  return pet.length;
  // Le pedimos que devuelva el largo de cada palabra dentro del array
});

console.log(petsLenght); // [6, 6, 7]
