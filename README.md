# ObjectosJS
    Un OBJETO agrupa todo en una sola variable

# OBJET LITERAL
    -es distinguible ya que usa una sintaxis de llaves.
    - contiene una lista de pares clave-valor separados por comas
    
    Su sintaxis es la siguiente:

        const producto ={
            nombre: 'Monitor de 20 pulgadas',
            precio: 300,
            disponible: true,
        }
        Donde: 
        -Nombre Variable -> producto
        -llave del objeto -> nombre: 
            *La llave SIEMPRE USA ':'
        -Valor -> 'Monitor de 20 pulgadas'


# Solicitar una llave del objeto
    // sintaxis de punto
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.disponible);

    // sintaxis corchetes
    console.log(producto['nombre']);
    console.log(producto['precio']);
    console.log(producto['disponible']);


# Agregar nueva propiedad al objeto
    -Para agregar nuevas propiedades poner nombre del objeto, seguido por un punto y el nombre de la nueva propiedad.

    -como esta accion esta fuera del objeto y es una "agregacion posterior", aqui si es necesario '=' y ';'
    
        producto.imagen = "imagen.jpg";
        console.log(producto);


# eliminar una propiedad del objeto
    delete producto.disponible;
    console.log(producto);


# Extraer una propiedad de un objeto y darle su propia variable con Destructuring

        Destructuring -> forma de extraer datos de una estructura de datos, como un objeto o un array, y asignarlos a variables individuales de una manera más concisa.

        //version antigua
        const nombre = producto.nombre;
        console.log(nombre);

        // Nueva version  'Destructuring' . Esto extrae la propiedad del objeto y le da su propia variable en un solo paso.
        const{nombre} = producto;
        console.log(nombre);

        //se puede extraer mas de una propiedad del objeto
        const{ nombre , precio} = producto;
        console.log(nombre);
        console.log(precio);


# Anidacion de objetos
    const producto = {
        nombre: 'pantalla',
        precio: 900,
        informacion: {
            pais: 'Mexico',
            marca: 'sony',
            tamaño: '20 pulgadas',
            idiomas: {
                id1: 'ingles',
                id3: 'frances', 
                id2: {
                    español1: 'latino',
                    español2: 'Castellano',
                }
            }
        }
    }

    Esta es la forma de acceder a propiedades anidadas 

    console.log(producto.informacion.idiomas.id2.español1);


# Destructuring de objetos anidados 

    sea el siguiente objeto: 

    const producto = {
        nombre: 'pantalla',
        precio: 900,
        informacion: {
                pais: 'Mexico',
                marca: 'sony',
                tamaño: '20 pulgadas',
                idiomas: {
                    id1: 'ingles',
                    id3: 'frances', 
                    id2: {
                        español1: 'latino',
                        español2: 'Castellano',
                    }
                }
        }
    }
  
    para crear una variable (con Destructuring) de una propiedad de un objeto anidado se ase asi:

    const { precio, informacion: { pais, idiomas: { id2: { español1, } } } } = producto;

    console.log(precio);
    console.log(pais);
    console.log(español1);

    //tip: los que tienen comas son las nuevas variables


# Reasignar valores de las llaves de los objetos 
    const producto = {
        nombre: "Monitor de 20 pulgadas",
        disponible: true
    }   


    // Reasignacion
    producto.disponible = false;
    console.log(producto);

    //Output: Object { nombre: "Monitor de 20 pulgadas", disponible: false }


# " Use strict"
    es una directiva de JavaScript que habilita el modo estricto, una forma de colocar su código en un contexto de funcionamiento restringido. Cuando se utiliza "use strict", JavaScript será más estricto en la aplicación de sus reglas, lo que dará como resultado mensajes de error más precisos y menos errores silenciosos. 


# Object.freeze();
    El método Object.freeze() en JavaScript se utiliza para congelar un objeto, lo que significa que no se pueden agregar, eliminar o modificar propiedades del objeto.

    Al congelar un objeto con Object.freeze(), se previene cualquier cambio en sus propiedades. Cualquier intento de modificar una propiedad de un objeto congelado o de agregar una nueva propiedad a este objeto será ignorado. Además, cualquier intento de cambiar su prototipo o cambiar su configuración de propiedad también será ignorado. ejemplo:

    const miObjeto = {
        nombre: "Juan",
        edad: 25
    };

    Object.freeze(miObjeto);

    //Intento de modificar una propiedad
    miObjeto.nombre = "Pedro"; //Ignorado en modo estricto

    //Intento de agregar una nueva propiedad
    miObjeto.pais = "España"; //Ignorado en modo estricto

    //Comprobamos que el objeto sigue igual
    console.log(miObjeto); //{ nombre: "Juan", edad: 25 }


# Object.isFrozen
    es una función incorporada de JavaScript que determina si un objeto está congelado o no.

    Un objeto se considera congelado si no se pueden agregar, eliminar o modificar propiedades. La función Object.isFrozen devuelve un valor booleano true si el objeto está congelado, de lo contrario devuelve false.

    const obj = {
        prop1: 'valor1',
        prop2: 'valor2'
    };

    Object.freeze(obj); // hacer el objeto congelado

    console.log(Object.isFrozen(obj)); // salida: true

    // Ahora, intenta modificar el objeto y ve lo que sucede

    obj.prop1 = 'nuevo valor';
    console.log(obj.prop1); // salida: "valor1", porque el objeto está congelado y no podemos modificar sus propiedades
 

# Object.seal()
    es una función incorporada de JavaScript que sella un objeto, lo que significa que se pueden modificar las propiedades existentes, pero NO se pueden AGREGAR ni ELIMINAR propiedades.


 # Object.isSealed
    Me dice por medio de un valor booleano si el objeto esta sellado


# Objet.assign()

    se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. La función devuelve el objeto destino después de haber sido modificado.

        Object.assign(destino, fuente1, fuente2, ..., fuenteN);
    
        const producto = {
            nombre: "Monitor de 20 pulgadas",
            precio: 300,
            disponible: true,
        };

        const medidas = {
            peso: '1kg',
            medida: '1m',
        };
        console.log(producto);
        console.log(medidas);


        const resultado = Object.assign(producto, medidas);
        console.log(resultado); 
        //producto y medidas se copian en resultado


# spread operator (operador de propagación) {...}
    Esto me permite hacer lo mismo de Objet.assign, osea copiar los objetos y pegarlos en un nuevo objeto, es mas practico que logico

    su sintaxis: 
    //producto, medidas: son objetos

    const resultado2 = { ...producto, ...medidas};
    console.log(resultado2);


# this. 
    se refiere al objeto y sus llaves/valores que está siendo utilizado en un contexto determinado.

    let nombre = arturo;
    let precio = 1000;

    const producto = {
        nombre: "Monitor de 20 pulgadas",
        precio: 300,
        disponible: true,
        mostrarInfo: function(){
            console.log(`El producto: ${this.nombre} tiene un precio de: $${this.precio}`);
        }
    };

    //si no estuviera el valor this, el nombre y el precio que se imprimiria seria las variables que se encuentran fuera del objeto


# Object Constructor
    útiles para crear varios objetos con las mismas propiedades y métodos, sin tener que repetir el código cada vez que se crea un objeto nuevo.
    - Es una funcion especial
    - se utiliza para crear objetos
    - se llama Constructor por que se utiliza para contruir o crear objetos
    - Cuando se llama a una función constructora utilizando la palabra clave "new", Se crea un nuevo objeto y se asigna a "this"
    - la función constructora puede agregar propiedades y métodos al objeto utilizando "this".

    function persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.saludo = function() {
            console.log(`Hola, Mi nombre es ${this.nombre}, y tengo ${this.edad} de edad`);
        };
    }
    const Sebastian = new persona('Sebastian', 21);
    Sebastian.saludo();
    console.log(Sebastian);


# Object Keys()
    método estático que devuelve un array(arreglo) con todas las llaves de un objeto dado. Es decir, devuelve un array con todas las propiedades enumerables del objeto. 

    es especialmente útil cuando necesitas trabajar con las llaves de un objeto de manera dinámica, es decir, cuando no conoces de antemano las llaves del objeto. 

    ejemplo: me puede servir para saber si la consulta de una base de datos de un clinte fue exitosa o no, lo podemos saber con Object Keys(), Asi contamos todos sus datos y verificamos que no este vacia


# Object.values() 
    devuelve un array con los valores de las propiedades enumerables de un objeto. 


# Object.entries()
    te retorna en un array TODO, es decir 'llave-valor' en pares.
