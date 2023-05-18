'use strict';

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};
Object.freeze( producto );
console.log(producto);
console.log(Object.isFrozen(producto));

producto.disponible = false; //ignorado
delete producto.nombre;
producto.imagen = 'imagen.jpg'; //ignorado
console.log(producto);

