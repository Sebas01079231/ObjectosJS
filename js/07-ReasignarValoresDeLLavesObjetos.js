const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}


// Se pueden reasignar las propiedades dentro del objeto
producto.disponible = false;
delete producto.precio;
console.log(producto);