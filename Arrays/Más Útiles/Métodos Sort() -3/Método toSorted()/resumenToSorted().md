# Método toSorted()

> El método toSorted() funciona exactamente igual que el método sort() con la
> diferencia de que en vez de mutar el array original devuelve un nuevo array
> con los elementos ordenados y con el array original sin ningún cambio, cómo en
> el siguiente ejemplo;

**_Hay un ejemplo mucho más profundo de este ejemplo en la carpeta
"principiante"_**  
const palabras = ["Juanito, "Arantza", "Brebonio"]  
const palabras1 = palabras.toSorted()  
console.log(palabras1); // ["Arantza", "Brebonio", "Juanito"]
console.log(palabras); // ["Juanito", "Arantza", "Brebonio"]

## Utilidad

> En códigos en los que necesitemos ordenar los elementos de un array sin mutar
> el original, ya sea para evitar interferencias con otras líneas de código o
> reutilizarlo de mejor manera próximamente en el código, el método toSorted()
> es ideal.
