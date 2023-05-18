'use strict';

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
};
Object.seal( producto );
console.log(producto);

producto.disponible = false; //si permitido
console.log(producto);
console.log(Object.isSealed(producto));
producto.imagen = 'imagen.jpg'; //ignorado
