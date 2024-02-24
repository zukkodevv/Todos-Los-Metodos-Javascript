// En este ejemplo de For(Of) lo usaremos para un array con varios strings dentro

const texto = ["Juanita", "Panchita", "Romualdo"];
// En el array constante "texto" tenemos 3 strings, supongamos que
// queremos un solo string con los 3 valores dentro, para esto
// podemos utilizar el método for(of) así;

let suma = [];
// definimos un array variable vacío que contendra el resultado

for (let nombre of texto) {
  // definimos la variable nombre para referirnos a cada elemento
  // iterado en el array
  suma += nombre + " ";
  // le indicamos al código que le sume a la variable "suma" cada
  // elemento iterado + un espacio para que no queden todos amontonados
}

console.log(suma); // 'Juanita Panchita Romualdo'
