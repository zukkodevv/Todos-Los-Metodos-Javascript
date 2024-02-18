const names = ["Juanito", "Rodolfa", "Lionel"];
// Se define un array con diferentes strings

const namesUpperCase = names.map(function (name) {
  // Se usa el método map() para hacer una función que
  // toma el parametro name para referirse a cada iteración de map()
  return name.toUpperCase();
  //Se devuelve el nombre en mayusculas y se lo imprime en consola
  console.log(name);
});

namesUpperCase;
