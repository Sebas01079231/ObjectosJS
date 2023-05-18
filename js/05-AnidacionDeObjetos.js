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

console.log(producto.informacion.idiomas.id2.español1);