const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// version antigua
// const nombre = producto.nombre;
// console.log(nombre);
    

// Nueva version  'Destructuring' . Esto extrae la propiedad del objeto y le da su propia variable en un solo paso.
const{nombre} = producto;
console.log(nombre);


const {disponible, precio} = producto;
console.log(precio);
console.log(disponible);
