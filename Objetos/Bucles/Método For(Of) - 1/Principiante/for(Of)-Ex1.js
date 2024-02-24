// Para empezar vamos a ver cómo funciona el bucle for(of)
// Comenzando por definir un string sencillo

const saludo = "Hola mundo";
// Un saludo sencillo con 10 carácteres
//Ahora haremos un bucle for(Of) que cuente esos carácteres;

for (let char of saludo) {
  console.log(char); // 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o'
}
// Este código inicia el bucle con for, luego entre parentesis
// una variable que se usa para referirse a cada eemento iterado
// en este ejemplo a cada caracter. Luego esta el término "Of"
// que se usa para indicarle al código que es lo que vamos a iterar,
// en este caso la variable "saludo"
// Luego ponemos entre llaves lo que queremos que haga cada iteración,
// en este ejemplo queremos que haga un console.log de cada caracter
// (recordar que estan asignados cómo char y debemos referirnos a ellos por esa palabra)
