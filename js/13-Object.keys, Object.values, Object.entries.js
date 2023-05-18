const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};

// Object Keys()
console.log(Object.keys( producto ));


/* Object.values() 
    es un método estático en JavaScript que devuelve un array con los valores de las propiedades enumerables de un objeto. Es decir, si tienes un objeto con varias propiedades y valores, puedes utilizar Object.values() para obtener un array que contenga únicamente los valores del objeto. 
*/
console.log(Object.values( producto));


/* Object.entries()
    te retorna en un array TODO(llave-valor) en pares.
*/
console.log(Object.entries( producto ));
