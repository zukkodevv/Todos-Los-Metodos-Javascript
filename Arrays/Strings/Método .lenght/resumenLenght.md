# Método Lenght

> El método lenght se utiliza en un string para poder verificar la longitud en
> carácteres del mismo, osea; el string "Hola" contiene 4 carácteres que sería
> el output de este método si fuera aplicado. Al saber esto ya casi conocemos
> este sencillo método pero veamoslo a fondo primero.

## Variaciones

> El método lenght no se aplica exclusivamente a strings por más que sea su tipo
> de valor idonéo para aplicarlo, sí no que **también se utiliza muy** >
> **frecuentemente en arrays u objetos pero comportandose distinto**. En arrays
> y objetos devuelve la cantidad de elementos que contiene aunque en objetos
> llega a ser más complicado.

## Ejemplo

### Strings

`const nombre = "Mario"`  
`console.log(nombre.lenght) // 5`

> En strings es tan simple cómo ponerle el método .lenght a la variable con el
> string definido.

---

### Arrays

` const nombres = ["Maria", "Magdalena", "Rumidesnapio"];`  
`console.log(nombres.lenght) // 3`

> En arrays no pierde su sencillez, solamente añadiendole el método .lenght al
> array correspondiente para obtener un valor númerico con la cantidad de
> elementos que contiene, en este caso 3.

---

### Objetos

`const objeto = { a: 1, b: 2, c: 3 };`
`console.log(Object.keys(objeto).length); // Output: 3`

> En los objetos sí deja su sencillez, debiendo crear un objeto con la función
> constructora "object" y accediendo a las llaves del objeto pasado entre
> parentésis con la función estática keys(objeto) y entonces aplicarle al objeto
> el método lenght para conocer su longitud.
