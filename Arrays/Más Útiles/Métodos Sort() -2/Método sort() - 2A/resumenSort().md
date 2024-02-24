# Método sort()

> El método sort() sirve para poder ordenar elementos en un array solamente
> aplicandole el método .sort() pero cómo esto solo ordena el array
> alfabeticamente, pierde su sencillez cuándo nos vamos de los arrays con
> strings a arrays con números necesitando utilizar funciones con parametros
> para poder ordenarlos correctamente.

const palabras = ["Juanito", "Anita", "Bautista"];  
palabras.sort() // <---- Esto muta la constante original  
console.log(palabras) // ["Anita", "Bautista", "Juanito"]

## Utilidad

> Este es un método de gran utilidad, ya que en arrays donde debamos ordenar
> alfabeticamente o númericamente elementos para su mejor comprensión, también
> es algo común de ver en las entrevistas. (Entregar arrays ordenados)
