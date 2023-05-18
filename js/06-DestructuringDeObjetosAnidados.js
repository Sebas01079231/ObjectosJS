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

//Destructuring
const { precio, informacion: { pais, idiomas: { id2: { español1, } } } } = producto;

console.log(precio);
console.log(pais);
console.log(español1);