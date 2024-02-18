# Método For.. Of

> Este método puede pensarse cómo un .map() a menor escala, osea; un iterador
> que en vez de iterar elementos de un array itera cada caracter, o cada letra
> que haya recibido, por ejemplo, sí necesitamos hacer un contador de palabras
> de repente este método parece una salvación ya que al únicamente poner un
> contador, la función y un condicional todo estara hecho, cómo de la siguiente
> forma:

function contarPalabras(texto){  
 let contador = 0;  
 for(let letra of texto){  
 contador++;  
 }  
 return contador;  
} console.log(contarPalabras("pala")); // 4

## Estructura

> Este método en particular tiene una estructura o sintaxis fácil de comprender,
> el método recibe entre paréntesis al iniciar generalmente una variable que se
> usa para referirse al caracter iterado, osea cada letra de un string por
> ejemplo y of se usa para referenciar el objeto/array que va a estar iterando,
> en este caso el parametro "texto". Entre llaves se encuentra el código que va
> a ejecutarse por cada caracter iterado, generalmente incluye un condicional
> para verificar si el caracter es uno en especifico cómo por ejemplo letra ===
> "a" pero no es el caso.

## Entrevistas

> Este es uno de los métodos más vistos en entrevistas por lo que es fundamental
> sí no es que obligatorio saber manejarlo bien, en este método también veremos
> varías preguntas que se toman en entrevistas en la carpeta especial
> "entrevistas" - Estás solo cuentan con la consigna de la entrevista y algunas
> pistas, la respuesta esta mucho más abajo del código.
