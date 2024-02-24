# Métodos de string

> Esta es una sección que preferí modularizar para poder contribuir a un
> aprendizaje gradual y apuntando al conocimiento especifico que se desee, acá
> estan los métodos más usados únicamente en arrays (Aunque es obvio tener en
> cuenta que mayormente se utilizan en conjunto con otros métodos).

## Fácil de apreder

> Cómo la mayoría de métodos en arrays apuntan a strings individuales
> aprenderlos por sí solos realmente no es algo difícil, ya que están pensados
> para usarse en conjunto con otros métodos.

## Ejemplo

> El método to upperCase convierte un string en mayúsculas en su totalidad, pero
> que pasa sí queremos que un array tenga todos sus strings en mayusculas. En
> este caso podríamos usar un bucle cómo el .map() de esta forma;

`const palabras = ["Torcuato", "Veronica", "Ramiro"];`

`const palabrasMayus = palabras.map(function(palabra){`
`return palabra.toUpperCase() })`

`console.log(palabrasMayus) // ['TORCUATO', 'VERONICA', 'RAMIRO']`

> Cómo se ve en este ejemplo no tuivmos que usar únicamente el método
> toUpperCase (Perteneciente al método de los arrays), sí no también .map() que
> se usa para iterar sobre los elementos de un array o objeto, siendo así una
> especie de sinergia entre distintios métodos.
